import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css'],
})
export class CreateLoginComponent implements OnInit {
  validacionEmail = new RegExp(
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  );

  guardaCorreos: any[] = [];

  miFormulario: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(this.validacionEmail),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder,
            private service : ServicesService) {}

  ngOnInit(): void {}

  validado(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

 
  registrar() {

   // this.guardaCorreos.push(this.miFormulario.controls.email.value) ;
    this.service.guardarPersona(this.miFormulario.controls.email.value)
   
  }


}


