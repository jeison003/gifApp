import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent{
  //inyectamos el servicio
  constructor( private gifsService: GifsService) { }


// ViewChild nos sirve para tomar una referencia local
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;//ElementRef hace referencia a un elemento HTML, tu escoger a que elemento hace referencia
  //el '!' al final hace referencia a que siempre tendra un valor, sin el mostrara un error que dira que podria tener un valor null

  //con esta funcion sacamos la info escrita en un input
searchTag (){

  const newTag = this.tagInput.nativeElement.value;
  this.gifsService.searchTag(newTag);
  //limpiamos la caja de texto
  this.tagInput.nativeElement.value = '';
}

}
//
