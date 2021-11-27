import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router }  from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  validacionEmail = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

  miFormulario : FormGroup = this.fb.group({
    email:['',[Validators.required , Validators.pattern(this.validacionEmail) , Validators.minLength(2)]],
    password:['',[Validators.required , Validators.minLength(2)]],
  })

  constructor(private fb: FormBuilder , private router : Router) {}

  correoGuardado! : string;

  ngOnInit(): void {
    this.correoGuardado =JSON.parse(localStorage.getItem('correos')!) || [] 
  }

  login(){

   let email =this.miFormulario.controls.email.value

     if(this.correoGuardado.includes(email)){ 
        this.router.navigate(["/principal"])
     }
     else{ 
      Swal.fire('El email no existe , debes registrarte previamente..')
     }
   
  }

  validado( campo:string){
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched
}

}
