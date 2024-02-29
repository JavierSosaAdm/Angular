import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() recibeHijo: string = '';
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  mensaje: string = '';

  enviarMensaje() {
      this.mensajeDesdeHijo.emit(this.mensaje)
      this.mensaje = '';
  }

  decrementar(){
    this.decrementarDesdeHijo.emit()
  }
  incrementar(){
    this.incrementarDesdeHijo.emit()
  }
}
