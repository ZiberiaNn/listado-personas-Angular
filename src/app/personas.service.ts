import { EventEmitter, Injectable } from "@angular/core";
import { loggingService } from "./loggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas:Persona[]=[
        new Persona("sapo","perro"),
        new Persona("laura","cozo")
      ];

    saludar = new EventEmitter<number>();

      

    constructor(private loggingService:loggingService){}

    agregarPersona(persona:Persona){
        this.loggingService.enviarMensajeAConsola("agregamos persona:"+persona.nombre)
        this.personas.push(persona);
    };

    encontrarPersona(index:number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        this.personas[index]=persona;
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
    }
}