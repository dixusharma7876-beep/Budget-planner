import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNav } from '../side-nav/side-nav';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Chatbox } from '../../chatbox/chatbox';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNav, CommonModule,Chatbox],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // income
  lastMonthsIncome = ['January:$200', 'February:$500','March:$800'];
  currentMonthIncome = '$2000';

  // Expense
  lastMonthsExpense =['January:$1220', 'February:$670','March:$8000'];
  currentMonthExpense = '$1500';

// todotransaction
todoTransaction =[
  {description: 'Pay electricity bill'},
  {description: 'Submit money report'},
  {description: 'Buy groceries'},
  {description: 'Call insurance company'}
];
totalCurrentMonthIncome = 20000;
totalCurrentMonthExpense =15000;
  constructor(public router:Router){}

  onIncome(){
    this.router.navigate(['income']);
  }
  onExpense(){
    this.router.navigate(['expense']);
}
onTodo(){
  this.router.navigate(['todo']);
}

get currentMonthSaving(): number{
  return this.totalCurrentMonthIncome -this.totalCurrentMonthExpense;
}
}

