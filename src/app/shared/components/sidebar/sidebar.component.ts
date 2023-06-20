import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  //con esta funcion accedes al servicio privado de historyTag y muestra lo que tiene
  get historyTag(): string[] {
    return this.gifsService.tagHistory;
  }

  UsedTag(tag: string): void{
    this.gifsService.searchTag(tag)
  }
}
