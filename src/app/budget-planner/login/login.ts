import { CommonModule } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class login {
  loginForm:any;
  registerForm: any;
 activeForm: 'login' |'register' = 'login';
  
 constructor( private fb:FormBuilder,
  private router:Router,
  private snackBar:MatSnackBar){}
  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
    this.registerForm = this.fb.group({
      username: ['',Validators.required],
       email: ['',[Validators.required,Validators.email]],
       password: ['',Validators.required]
    });
    }

    toggleForm(form: 'login' | 'register'){
      this.activeForm = form;
    }
    login(){
      if (this.loginForm.valid){
        console.log("login info===", this.loginForm.value);
        this.router.navigate(['dashboard']);
      }else{
          this.snackBar.open('Invalid email or password', 'close',{duration: 3000});
        }
      }
      register(){
        if (this.registerForm.valid){
        console.log("register info===", this.registerForm.value);
        setTimeout(()  =>{
          window.location.reload();
        }, 2000);
        this.router.navigate(['./budget-planner/login']);
      }else{
          this.snackBar.open('Please fill in all fields correctly', 'close',{duration: 3000});
        }
      }
    }
  







