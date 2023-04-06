import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosInterface } from '../interfaces/productos-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductosInterface[] = [];
  productosFiltrado: ProductosInterface[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(
          'https://portafolio-61d56-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: any) => {
          this.cargando = false;
          //console.log(res, 'test...productos');
          this.productos = resp;
          resolve();
        });
    });
  }
  getproducto(id: string) {
    return this.http.get(
      `https://portafolio-61d56-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //esperar cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      //aplicar el filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string) {
    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
