import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){

    }

    cargarPersonas():Observable<any>{
        return this.httpClient.get("https://listado-personas-90a66-default-rtdb.firebaseio.com/datos.json");
    }

    guardarPersonas(personas:Persona[]){ 
        this.httpClient.put("https://listado-personas-90a66-default-rtdb.firebaseio.com/datos.json",personas)
        .subscribe(
            response => console.log("resultado de guardar personas: "+response),
        )
    }

    modificarPersona(index:number, persona: Persona){
        let url:string;
        url="https://listado-personas-90a66-default-rtdb.firebaseio.com/datos/"+index+".json";
        this.httpClient.put(url,persona)
        .subscribe(
            response => console.log("resultado de guardar personas: "+response),
        );
    }

    eliminarPersona(index:number){
        let url:string;
        url="https://listado-personas-90a66-default-rtdb.firebaseio.com/datos/"+index+".json";
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado de guardar personas: "+response),
        );
    }
}