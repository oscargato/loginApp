import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = '/v1/accounts:';	
  private apiKey = 'AIzaSyCzgY5EHZ0eT3-0sm-HD6zzc0CW5jETNNk';	
  
  constructor(private httpClient:HttpClient){}


  //Login Usuario
  public login(user:User){
    const authData = {
      email:user.email,
      password:user.password,
      returnSecureToken:true,
    }
    const path = `${this.URL}signInWithPassword?key=${this.apiKey}`;
    return this.httpClient.post(path,authData);
  }


  //Cerrar
  public logout(){
  }


  //Crear Usuario
  public newUser(user:User){
  	const authData = {
  		email:user.email,
  		password:user.password,
  		returnSecureToken:true,
  	}

  	const path = `${this.URL}signUp?key=${this.apiKey}`;
  	return this.httpClient.post(path,authData);
  }
}