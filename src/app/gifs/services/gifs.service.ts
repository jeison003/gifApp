import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gitList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'Mc6kekUSWJjfUIjureo06LZp43X5cUQW';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';

constructor( private http: HttpClient) { }

  get tagHistory(){
    // console.log(this._tagsHistory);

    //Hace una copia del array _tagHistory, por silo modifica un usuario no pase nada.
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    //primero el condicional buscara si el tag esta en el arreglo, devuelve true o false
    if(this._tagsHistory.includes(tag)){
    //con el filtre solo guardara los tag no repetidos, por lo tanto borrara el tag que encuentre que sea el mismo que se esta insertando
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag);
    }
    //insertamos al inicio el nuevo tag ingresado
    this._tagsHistory.unshift(tag);
    //solo mostrara los primeros 10 elementos de la lista
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

searchTag(tag: string):void{
  if(tag.length === 0) return;
  this.organizeHistory(tag);

  const params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('limit', '10')
  .set('q', tag)


  this.http.get<SearchResponse>(`${this.serviceURL}/search`,{params})
  .subscribe(resp =>{

    this.gitList = resp.data;
    console.log({gifs: this.gitList});
  });

  }
  
}
