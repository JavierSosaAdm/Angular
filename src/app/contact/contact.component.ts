import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// SUSCRIPCIONES
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
  })
  export class ContactComponent implements OnInit, OnDestroy {
  
    contactForm: FormGroup;
    dniType: string = 'DNI';
    mostrarDNI: boolean = false;
  
    constructor(private form: FormBuilder) {
      this.contactForm = this.form.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        dniType: [''],
        email: ['', [Validators.email, Validators.required]]
      })
    }
  
    ngOnInit(): void {
      this.contactForm.get('name')?.setValue('Josefina')
      this.contactForm.get('name')?.disable()
      this.contactForm.get('dniType')?.valueChanges.subscribe(value => {
        this.mostrarDNI = value !== ''
        this.dniType = value
      })
    }

    ngOnDestroy(): void {
      console.log('Se destruyó el componente');
      
    }
    hasErrors(controlName: string, errorType: string){
      return this.contactForm.get(controlName)?.hasError(errorType) 
      && this.contactForm.get(controlName)?.touched
    }
    enviar(){
      console.log(this.contactForm);
      
    }
  }
  





// ESTO ES PARA QUE LOS INPUT QUE VENGAN YA CON LA INFO NO SE PUEDAN CAMBIAR
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent implements OnInit {

//   contactForm: FormGroup;
//   userActive: any = {
//     name: 'Josefina',
//     lastName: 'de la Encina',
//     dni: '37512631',
//   }

//   constructor(private form: FormBuilder) {
//     this.contactForm = this.form.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       lastName: ['', [Validators.required, Validators.minLength(3)]],
//       dni: ['', [Validators.required, Validators.minLength(6)]],
//       email: ['', [Validators.email, Validators.required]]
//     })
//   }

//   ngOnInit(): void {
//     this.contactForm.patchValue({
//       name: this.userActive.name,
//       lastName: this.userActive.lastName,
//       dni: this.userActive.dni
//     })
//     this.contactForm.get('name')?.disable()
//     this.contactForm.get('lastName')?.disable()
//     this.contactForm.get('dni')?.disable()
//   }
//   hasErrors(controlName: string, errorType: string){
//     return this.contactForm.get(controlName)?.hasError(errorType) 
//     && this.contactForm.get(controlName)?.touched
//   }
//   enviar(){
//     console.log(this.contactForm);
    
//   }
// }
