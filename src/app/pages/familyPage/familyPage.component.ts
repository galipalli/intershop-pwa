import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './familyPage.component.html'
})

export class FamilyPageComponent implements OnInit {
  imageId;
  range;
  isListView: Boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.imageId = id;
    const range = this.route.snapshot.params['range'];
    this.range = range;
  }
  resolved(captchaResponse: string) {
  }
}
