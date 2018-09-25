import { Component } from '@angular/core';

@Component({
  selector: 'barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./app.component.css']
})
export class barcodeComponent {
  current:number=1;
  Next(){
    this.current+=1;
  }
  Previous(){
    this.current-=1;
  }
  srcUrl:string='';
}
