import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient,
                private loginService:LoginService){
    }

    cargarPersonas():Observable<any>{
        const token=this.loginService.getIdToken();
        return this.httpClient.get("https://listado-personas-90a66-default-rtdb.firebaseio.com/datos.json?auth="+token);
    }

    guardarPersonas(personas:Persona[]){ 
        const token=this.loginService.getIdToken();
        this.httpClient.put("https://listado-personas-90a66-default-rtdb.firebaseio.com/datos.json?auth="+token,personas)
        .subscribe(
            response => console.log("resultado de guardar personas: "+response),
        )
    }

    modificarPersona(index:number, persona: Persona){
        let url:string;
        const token=this.loginService.getIdToken();
        url="https://listado-personas-90a66-default-rtdb.firebaseio.com/datos/"+index+".json?auth="+token;
        this.httpClient.put(url,persona)
        .subscribe(
            response => console.log("resultado de guardar personas: "+response),
        );
    }

    eliminarPersona(index:number){
        let url:string;
        const token=this.loginService.getIdToken();
        url="https://listado-personas-90a66-default-rtdb.firebaseio.com/datos/"+index+".json?auth="+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado de guardar personas: "+response),
        );
    }
}