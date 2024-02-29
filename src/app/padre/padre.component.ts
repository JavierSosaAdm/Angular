import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service'

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  nombre?: string
  
  // constructor(
  //   private _servicioFamiliar : ServicioFamiliarService
  //   ) {}
    private _servicioFamiliar2 = inject(ServicioFamiliarService)
  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoGrande('Juan')
    this.nombre = this._servicioFamiliar2.getHermanoGrande();
  }

  saludar(){
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoChico() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar2.preguntarPorHijo()); 
  }

  messagePadre: string = 'Ojalá Messi llegue al proximo mundial';
  mensajeRecibido: string = '';
  
  recibirMensaje($event: string) {
    this.mensajeRecibido = $event
  }

  
  // CONTADOR
  valorContador: number = 0;
  Incrementar() {
    this.valorContador++;
  }

  Decrementar() {
    if (this.valorContador > 0) {
      this.valorContador--;
    }
  }
}
