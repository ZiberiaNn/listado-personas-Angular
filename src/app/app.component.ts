import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado de Personas';
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCPBBs_oEAstzrhmXLBgPkGNXb2FTupeSc",
      authDomain: "listado-personas-90a66.firebaseapp.com",
    });
  }
  
  isAutenticado(){
    return this.loginService.isAutenticado();
  }
  salir(){
    this.loginService.logout();
  }



}
