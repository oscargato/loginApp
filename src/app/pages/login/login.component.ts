import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(private authService:AuthService, private toastrService:ToastrService){}

  ngOnInit(){
  	this.user = new User();
  }

  public login(form:NgForm){
  	if(form.valid){
      this.authService.login(this.user).subscribe(resp=>{
          console.log('Respuesta',resp);
      },(err)=>{
          console.log('Error',err);
      });
      }else{
        return;
      }
  }
}