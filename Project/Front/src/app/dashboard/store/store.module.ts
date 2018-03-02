import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyserviceService } from '../../myservice.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StoreComponent, MyItemsComponent,Ng2SmartTableModule],
  providers :[MyserviceService]
})
export class StoreModule { }
