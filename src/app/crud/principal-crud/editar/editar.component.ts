import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interface/Persona';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent  {

  miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required , Validators.minLength(4)]],
    email: ['',[Validators.required , Validators.minLength(2) ] ],
    pais: ['',[Validators.required , Validators.minLength(2)]],

})
  
  constructor(private fb: FormBuilder) { }

  @Input() personas: Persona [] = [];

  personaActualizar : Persona ={
    nombre : '',
    email :'',
    pais :''
  }

  editar( persona : Persona){

   this.miFormulario.setValue({
     nombre : persona.nombre,
     email : persona.email,
     pais : persona.pais
   })

   this.personaActualizar = persona
  }
     
  actualizarPersona(){
    
    this.personaActualizar.nombre = this.miFormulario.get('nombre')!.value 
    this.personaActualizar.email = this.miFormulario.get('email')!.value 
    this.personaActualizar.pais = this.miFormulario.get('pais')!.value 
 
  }

  eliminar(index : number){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'estas seguro?',
    text: "No se podra recuperar el registro!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, lo borrare!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Borrado!',
        'tu registro ha sido borrado.',
        'success'
      )
     this.personas.splice(index,1);
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'calcelado',
        'Tu registro esta seguro :)',
        'error'
      )
    }
  })

 
      this.miFormulario.reset();
  


  }

}
