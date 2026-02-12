import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SideNav } from '../side-nav/side-nav';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideNav,MatIconModule],
  templateUrl: './history.html',
  styleUrls: ['./history.css']
})
export class History{
  todoForm: any;
  selectedMonth: string;
  expense: {month: string, expenseAmount: number}[] = [
   { month: 'January',expenseAmount:1500},
   { month: 'February', expenseAmount: 2785 },
  { month: 'March', expenseAmount: 1890 },
  { month: 'April', expenseAmount: 3420 },
  { month: 'May', expenseAmount: 1560 },
  { month: 'June', expenseAmount: 4100 },
  { month: 'July', expenseAmount: 2235 },
  { month: 'August', expenseAmount: 2980 },
  { month: 'September', expenseAmount: 1755 },
  { month: 'October', expenseAmount: 3650 },
  { month: 'November', expenseAmount: 2490 },
  { month: 'December', expenseAmount: 3200 }
  ];
 monthSelected: boolean = false;

  januaryExpense: any[] = [
    {expenseType:'Recharge',expenseAmount:1500},
    {expenseType:'Light Bills',expenseAmount:1000}
  ];
  februaryExpense: any[] = [
    { expenseType: 'Groceries', expenseAmount: 1500 },
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Essentials', expenseAmount: 600 }
  ];

  marchExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 900 },
    { expenseType: 'Internet', expenseAmount: 1200 },
    { expenseType: 'Essentials', expenseAmount: 800 }
  ];

  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1800 },
    { expenseType: 'Groceries', expenseAmount: 1600 }
  ];

  mayExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 500 },
    { expenseType: 'Light Bills', expenseAmount: 650 }
  ];

  juneExpense: any[] = [
    { expenseType: 'Groceries', expenseAmount: 1400 },
    { expenseType: 'Utilities', expenseAmount: 1200 }
  ];

  julyExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1900 },
    { expenseType: 'Essentials', expenseAmount: 750 },
    { expenseType: 'Internet', expenseAmount: 600 }
  ];

  augustExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 550 },
    { expenseType: 'Essentials', expenseAmount: 850 }
  ];

  septemberExpense: any[] = [
    { expenseType: 'Groceries', expenseAmount: 1300 },
    { expenseType: 'Utilities', expenseAmount: 1250 }
  ];

  octoberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Essentials', expenseAmount: 700 },
    { expenseType: 'Internet', expenseAmount: 900 }
  ];

  novemberExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1150 },
    { expenseType: 'Light Bills', expenseAmount: 500 }
  ];

  decemberExpense: any[] = [
    { expenseType: 'Groceries', expenseAmount: 1600 },
    { expenseType: 'Essentials', expenseAmount: 950 },
    { expenseType: 'Utilities', expenseAmount: 1200 }
  ];

  constructor(private fb:FormBuilder,private router:Router){
    this.selectedMonth = new Date().toLocaleString('default',{month: 'long'})
  }

  ngOnInit(): void{
    this.todoForm = this.fb.group({
      month: ['',Validators.required],
      expenseType: ['',Validators.required],
      expenseAmount:['',Validators.required]
    });
  }
  onSubmitExpense(){
    if(this.todoForm.valid){
      const newExpense = this.todoForm.value;
      this.getFilteredExpense().push(newExpense);
      this.todoForm.reset();
    }
  }
  onchangeExpense(event: any){
    this.selectedMonth =event.target.value;
    this.monthSelected = true;
    this.getFilteredExpense();
  }

  getFilteredExpense(){
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryExpense;

      case 'February':
        return this.februaryExpense;

      case 'March':
        return this.marchExpense;

      case 'April':
        return this.aprilExpense;

      case 'May':
        return this.mayExpense;

      case 'June':
        return this.juneExpense;

      case 'July':
        return this.julyExpense;

      case 'August':
        return this.augustExpense;

      case 'September':
        return this.septemberExpense;

      case 'October':
        return this.octoberExpense;

      case 'November':
        return this.novemberExpense;

      case 'December':
        return this.decemberExpense;
        default: 
        return [];
    }
  }
  calculateTotalExpense(month: string): number{
    return this.getFilteredExpense().reduce((acc, curr) => acc+curr.expenseAmount,0) ;
  }

  onSave() {
    if (this.todoForm.valid) {
      this.todoForm.reset({month: this.selectedMonth});
      this.getFilteredExpense();
    }
  }
  saveForm() {
    console.log("Form Saved");
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }

}