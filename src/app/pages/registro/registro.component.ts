import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:User;

  constructor() { }

  ngOnInit(){ 
  	this.user = new User();
  }

  public onSubmit(form:NgForm){
  	
  }


}
