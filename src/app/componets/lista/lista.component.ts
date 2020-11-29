import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

//Variable vacia
  items:any;

  ediatrItem:any= {
    name: ''
  };

  constructor(private conexion:ConexionService) { 
    this.conexion.listaItem().subscribe(item=>{
      // LLenamos la variable vacia con datos de nuestro servicio
      this.items = item;
      console.log(this.items)
    })
  }

  ngOnInit(): void {
  }

  eliminar(item: { id: any; }){
    this.conexion.eliminarItem(item);
  }

  editar(item: any){ 
    this.ediatrItem = item;

  }

  agregarItemEditado(){
    this.conexion.editarItem(this.ediatrItem)
  }

}
