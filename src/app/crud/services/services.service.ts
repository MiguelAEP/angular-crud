import { Injectable } from '@angular/core';

import { Persona } from '../interface/Persona';

import Swal from 'sweetalert2';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private router: Router) {}

  personasArray: Persona[] = [];

  guardarPersona( email: any) {

    if (this.personasArray.includes(email)) {
      Swal.fire('El email ya existe');
    } 
    else {
      this.personasArray.push(email);
      Swal.fire('El correo ha sido creado correctamente');

      localStorage.setItem('correos', JSON.stringify(this.personasArray));
    }

    console.log(this.personasArray);
  }

  get personasArr() {
    return this.personasArray;
  }

  verificaAutenticacion(): boolean {
    if (!localStorage.getItem('correos')) {
      this.router.navigate(['/error']);
      return false;
    }

    return true;
  }
}
