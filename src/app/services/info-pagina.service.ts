import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
   info:InfoPagina= {};
   cargada = false;
   equipo:any =[];


  constructor( private http:HttpClient) {
    console.log('sevicio infoPagina listo....');
    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo(){
    //leer el archivo json local
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina)=>{
        this.cargada = true;
        this.info = resp;
        //console.log(resp.email, 'linkedin');

      })
   }

   private cargarEquipo(){
    this.http.get('https://portafolio-61d56-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp)=>{
        this.equipo = resp;
        /* this.cargada = true;
        this.info = resp; */
        console.log(resp);

      })
   }
}
