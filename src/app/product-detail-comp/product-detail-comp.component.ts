import { Component } from '@angular/core';
import { ServiceactivatRouteService } from '../serviceactivat-route.service';

@Component({
  selector: 'app-product-detail-comp',
  templateUrl: './product-detail-comp.component.html',
  styleUrls: ['./product-detail-comp.component.css']
})
export class ProductDetailCompComponent {
  constructor(private service:ServiceactivatRouteService)

}
