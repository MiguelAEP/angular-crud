import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../interface/Persona';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-principal-crud',
  templateUrl: './principal-crud.component.html',
  styleUrls: ['./principal-crud.component.css']
})
export class PrincipalCrudComponent implements OnInit {

  existe : boolean = false;
  constructor() {  }

  correoGuardado!: string;

  personaObtenida:any [] = [];

  ngOnInit(): void {} 

  emitidoArreglo( personaObtenida : any[]){
    this.personaObtenida=personaObtenida;
  }

  salir(){
    localStorage.clear();
  }

}
