
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interface/Persona';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  validacionEmail = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

  persona:Persona [] = []
  @Output() emitirArreglo : EventEmitter<Persona[]> = new EventEmitter();


  miFormulario : FormGroup = this.fb.group({
      nombre: ['',[Validators.required , Validators.minLength(4)]],
      email: ['',[Validators.required , Validators.minLength(2) , Validators.pattern(this.validacionEmail)] ],
      pais: ['',[Validators.required , Validators.minLength(2)]],
  })

  constructor(private fb : FormBuilder
         ) { }

  ngOnInit(): void {
  }


  registrar(){
    this.persona.unshift(this.miFormulario.value)
    this.emitirArreglo.emit(this.persona)
    this.miFormulario.reset();
    Swal.fire('Registro exitoso')
  }

  validado( campo:string){
      return this.miFormulario.controls[campo].errors && 
      this.miFormulario.controls[campo].touched
  }
}
