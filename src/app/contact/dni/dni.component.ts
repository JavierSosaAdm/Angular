import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {
    
  @Input()dniType: string = 'DNI';
    docForm: FormGroup;
    
  
    constructor(private form: FormBuilder) {
      this.docForm = this.form.group({
        dni: ['']
      })
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes?.['dniType'].currentValue);
      
    }
  hasErrors(controlName: string, errorType: string){
    return this.docForm.get(controlName)?.hasError(errorType) 
    && this.docForm.get(controlName)?.touched
  }
}
