import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loggingService } from '../../loggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  constructor(private loggingService:loggingService,
              private personasService:PersonasService,
              private router: Router,
              private route: ActivatedRoute
              ) {
                this.personasService.saludar.subscribe(
                  (indice:number)=>alert("El indice es: "+indice)
                )
               }

  ngOnInit(): void {
    this.index = this.route.snapshot.params["id"];
    this.modoEdicion= +this.route.snapshot.queryParams["modoEdicion"];
    if(this.modoEdicion!=null && this.modoEdicion===1){
      let persona=this.personasService.encontrarPersona(this.index);
      this.nombreInput=persona.nombre;
      this.apellidoInput=persona.apellido;
    }
  }
  nombreInput:string;
  apellidoInput:string;
  index:number;
  modoEdicion:number;

  onGuardarPersona(){
    let persona1=new Persona(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion!=null && this.modoEdicion===1){
      this.personasService.modificarPersona(this.index,persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(["personas"]);
  }

  eliminarPersona(){
    if(this.index!=null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
