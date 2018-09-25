import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { mainComponent } from './main.component';
import { barcodeComponent } from './barcode.component';

const routes = [
  { path: '', component: mainComponent },
  { path: 'BarCode', component: barcodeComponent },
];
@NgModule({
  declarations: [
    AppComponent,mainComponent,barcodeComponent
  ],
  imports: [
    RouterModule.forRoot(routes,
      {
          useHash: true,
          initialNavigation: true,
          preloadingStrategy: PreloadAllModules                
      }
  ), 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
