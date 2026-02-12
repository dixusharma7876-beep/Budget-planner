import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideNav } from '../side-nav/side-nav';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,SideNav],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profileForm: any;


  constructor(private fb:FormBuilder,private snackBar: MatSnackBar){}

  ngOnInit(): void{
    this.profileForm = this.fb.group({
      name: ['',Validators.required],
      age:['',[Validators.required, Validators.min(18)]],
      dob:['',Validators.required],
      gender:['',Validators.required],
      occupation:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      address:['',Validators.required],
      contact:['',Validators.required]
    });
  }


  onSubmit(){
    if (this.profileForm.valid){
      console.log("Form Saved!!!",this.profileForm.value);
    }else{
      this.openSnackBar('Please fill in the fields correctly!','close');
    }
  }

  openSnackBar(message: string,action: string){
    this.snackBar.open(message, action,{
      duration:3000
    });

  }
}
