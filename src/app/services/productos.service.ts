import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosInterface } from '../interfaces/productos-service.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
cargando = true;
productos:ProductosInterface[] = [];
  constructor(private http:HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
    this.http.get('https://portafolio-61d56-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((res: any)=>{
        this.cargando = false;
        //console.log(res, 'test...productos');
        this.productos = res;

      });
   }
   getproducto(id:string){
    return this.http.get(`https://portafolio-61d56-default-rtdb.firebaseio.com/productos/${id}.json`);

   }
}
