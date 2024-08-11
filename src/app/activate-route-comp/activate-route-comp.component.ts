import { Component } from '@angular/core';
import {ServiceActivateService} from '../service-activate.service';
@Component({
  selector: 'app-activate-route-comp',
  templateUrl: './activate-route-comp.component.html',
  styleUrls: ['./activate-route-comp.component.css']
})
export class ActivateRouteCompComponent {
 constructor(private service:ServiceActivateService)
}
