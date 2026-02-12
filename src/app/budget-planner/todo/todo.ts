import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule,],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todoForm: any;
  selectedMonth: any;
  expense: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 1200 },
    { month: 'March', expenseAmount: 1800 },
    { month: 'April', expenseAmount: 1600 },
    { month: 'May', expenseAmount: 1700 },
    { month: 'June', expenseAmount: 1400 },
    { month: 'July', expenseAmount: 1550 },
    { month: 'August', expenseAmount: 1650 },
    { month: 'September', expenseAmount: 1750 },
    { month: 'October', expenseAmount: 1850 },
    { month: 'November', expenseAmount: 1900 },
    { month: 'December', expenseAmount: 2000 }
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Rechange', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
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

  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    this.selectedMonth = currentMonth;
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }
  toggleSelection(todoTrans: any) {
    todoTrans.selected = !todoTrans.selected;
  }


  onSubmitExpense() {
    (this.todoForm.valid)
    const newExpense = this.todoForm.value;
    switch (this.selectedMonth) {
      case 'January':
        this.januaryExpense.push(newExpense);
        break;
      case 'February':
        this.februaryExpense.push(newExpense);
        break;
      case 'March':
        this.marchExpense.push(newExpense);
        break;
      case 'April':
        this.aprilExpense.push(newExpense);
        break;
      case 'May':
        this.mayExpense.push(newExpense);
        break;
      case 'June':
        this.juneExpense.push(newExpense);
        break;
      case 'July':
        this.julyExpense.push(newExpense);
        break;
      case 'August':
        this.augustExpense.push(newExpense);
        break;
      case 'September':
        this.septemberExpense.push(newExpense);
        break;
      case 'October':
        this.octoberExpense.push(newExpense);
        break;
      case 'November':
        this.novemberExpense.push(newExpense);
        break;
      case 'December':
        this.decemberExpense.push(newExpense);
        break;
      default:
        break;
    }
    this.todoForm.reset();
    this.todoForm.patchValue({ month: '', expenseType: '', expenseAmount: '' });
  }
  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.getFilteredExpense();
  }
  getFilteredExpense() {
    let filteredExpense: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredExpense = [...this.januaryExpense];
        break;
      case 'February':
        filteredExpense = [...this.februaryExpense];
        break;
      case 'March':
        filteredExpense = [...this.marchExpense];
        break;
      case 'April':
        filteredExpense = [...this.aprilExpense];
        break;
      case 'May':
        filteredExpense = [...this.mayExpense];
        break;
      case 'June':
        filteredExpense = [...this.juneExpense];
        break;
      case 'July':
        filteredExpense = [...this.julyExpense];
        break;
      case 'August':
        filteredExpense = [...this.augustExpense];
        break;
      case 'September':
        filteredExpense = [...this.septemberExpense];
        break;
      case 'October':
        filteredExpense = [...this.octoberExpense];
        break;
      case 'November':
        filteredExpense = [...this.novemberExpense];
        break;
      case 'December':
        filteredExpense = [...this.decemberExpense];
        break;
      default:
        break;
    }
    return filteredExpense;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const income of this.gettodoFormonth(month)) {
      totalExpense += income.expenseAmount;
    }
    return totalExpense;
  }

  gettodoFormonth(month: string): any[] {
    switch (month) {
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

  onSave() {
    if (this.todoForm.valid) {
      const incomeData = this.todoForm.value;
      this.todoForm.reset({ month: this.selectedMonth });
    }
  }
  saveForm() {
    console.log("Form Saved");
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }

}



