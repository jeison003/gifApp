import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,

  ]
})
export class GifsModule { }
