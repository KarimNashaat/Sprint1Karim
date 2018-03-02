import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
 import { MyserviceService } from '../../../myservice.service';
@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  products ;
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
     prince: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      },
      username: {
        title: 'User name'
      },
      componentNo :{
        title : 'Number'
      }
    }
  };
  data = this.products;
  constructor (private myservice: MyserviceService) { }

  ngOnInit() {
     this.myservice.getProducts().subscribe((res : any [] )=>{
       this.products=res;
     }

     )
  }

  update(event){
    var id = event.data._Id;
    var data = {"name" : event.newData.name,
    "price" : event.newData.price,
    "createdAt" : event.newData.createdAt,
    "updatedAt": event.newData.updatedAt,
    "username": event.newData.username,
    "component": event.newData.component
    };
    this.myservice.updateProduct(data).subscribe(
      res => {
        event.confirm.resolve(event.newData);
        })
  }
  
  create(event) {
    var data = {"name" : event.newData.name,
    "price" : event.newData.price,
    "createdAt" : event.newData.createdAt,
    "updatedAt": event.newData.updatedAt,
    "username": event.newData.username,
    "component": event.newData.component
    };
    this.myservice.createProduct(data).subscribe(
      res => {
        event.confirm.resolve(event.newData);
      }
    )
  }
  delete(event) {
    var id = event.data._id
        this.myservice.deleteProduct().subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.source.Data);
      })
    }
  }

  
