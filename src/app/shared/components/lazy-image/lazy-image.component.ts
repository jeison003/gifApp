import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(!this.url) throw new Error('Titulo no asignado');
  }

  public hasLoader: boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  onLoad(){
    // tomara un segundo antes de poner en true la carga de la imagen
    setTimeout(() => {
      this.hasLoader = true
    }, 1000);


  }
}
