import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoCompletoInterface } from 'src/app/interfaces/producto-completo.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  producto: ProductoCompletoInterface ={};
  id:string = "";
  constructor(private route:ActivatedRoute,
              private productoService:ProductosService ){
    this.route.params
      .subscribe(parametros =>{
        //console.log(parametros['id']);
        this.productoService.getproducto(parametros['id'])
          .subscribe((producto:ProductoCompletoInterface) =>{
            console.log(producto);
            this.id = parametros['id'];
            this.producto = producto;

          });
      })
  }

}
