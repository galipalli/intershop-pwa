FROM node:8.11.4-alpine as buildstep
COPY package.json package-lock.json /workspace/
COPY tslint-rules /workspace/tslint-rules/
WORKDIR /workspace
RUN npm ci --production
COPY . /workspace
ENV PATH=$PATH:/workspace/node_modules/.bin
ARG env=dev
RUN npm run build:dynamic:${env}
RUN echo -e "trap \"ps -o pid,comm | grep node | awk '{print $1}' | xargs -r kill\" INT TERM\nnode server" > /workspace/dist/start.sh

FROM node:8.11.4-alpine
COPY --from=buildstep /workspace/dist /workspace/healthcheck.js /
EXPOSE 4200
USER nobody
HEALTHCHECK --interval=60s --timeout=20s --start-period=2s CMD node /healthcheck.js
ENTRYPOINT ["sh","/start.sh"]
