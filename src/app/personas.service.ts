import { EventEmitter, Injectable } from "@angular/core";
import { of } from "rxjs";
import { DataServices } from "./data.services";
import { loggingService } from "./loggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas:Persona[]=[];

    saludar = new EventEmitter<number>();

    constructor(private loggingService:loggingService,
                private dataService:DataServices){}

    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    agregarPersona(persona:Persona){
        this.loggingService.enviarMensajeAConsola("agregamos persona:"+persona.nombre)
        if(this.personas==null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    };

    encontrarPersona(index:number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        this.personas[index]=persona;
        this.dataService.modificarPersona(index,persona);
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index);
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }
}