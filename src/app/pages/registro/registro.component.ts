import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:User;

  constructor(private authService:AuthService, private toastrService:ToastrService){ }

  ngOnInit(){ 
  	this.user = new User();
  }

  public onSubmit(form:NgForm){
      if(form.valid){
        this.authService.newUser(this.user).subscribe(resp=>{
            console.log('Usuario Registrado',resp);
            this.toastrService.success('Usuario Registrado','Yes');
        },(err)=>{
            console.log('Manejo de Error',err.message);
            this.toastrService.error('Usuario no Registrado','Error');
        });
      }else{
        return;
      }
  }
}