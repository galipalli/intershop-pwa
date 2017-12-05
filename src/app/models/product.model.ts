import { Attribute } from './attribute.model';
import { Image } from './image.model';
import { Price } from './price.model';
import { ShippingMethod } from './shipping-method.model';
import { Warranty } from './warranty.model';

export class Product {
  name: string;
  type: string;
  attributes: Attribute[];
  shortDescription: string;
  minOrderQuantity: number;
  longDescription: string;
  productMaster: boolean;
  listPrice: Price;
  productBundle: boolean;
  shippingMethods: ShippingMethod[];
  availableWarranties: Warranty[];
  productName: string;
  roundedAverageRating: string;
  readyForShipmentMin: number;
  readyForShipmentMax: number;
  salePrice: Price;
  sku: string;
  images: Image[];
  manufacturer: string;
  availability: boolean;
  retailSet: boolean;
  inStock: boolean;
  mastered: boolean;
  variationAttributes?: Attribute[];
  enableExpressShop: boolean;
  richSnippetsEnabled: boolean;
  showProductRating: boolean;
  showAddToCart: boolean;
  totalRatingCount: number;
  simpleRatingView: boolean;
  averagRating: number;
  isRetailSet: boolean;
  displayType: string;
  applicablePromotions: any[];
  nameOverride: string;
  showInformationalPrice: boolean;
  isEndOfLife: boolean;
  id: string;
  averageRatingClass: string;
  isProductMaster: boolean;
}
