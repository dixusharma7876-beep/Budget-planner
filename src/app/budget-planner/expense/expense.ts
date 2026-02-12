import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatIconModule],
  templateUrl: './expense.html',
  styleUrl: './expense.css',
})
export class Expense {
  expenseForm: any;
  selectedMonth: string;
  expense: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1000 },
    { month: 'April', expenseAmount: 1800 },
    { month: 'May', expenseAmount: 2200 },
    { month: 'June', expenseAmount: 1600 },
    { month: 'July', expenseAmount: 2500 },
    { month: 'August', expenseAmount: 1400 },
    { month: 'September', expenseAmount: 1900 },
    { month: 'October', expenseAmount: 2300 },
    { month: 'November', expenseAmount: 1700 },
    { month: 'December', expenseAmount: 3000 }
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'rent', expenseAmount: 1000 },
    { expenseType: 'Geoceries', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 600 }
  ];

  marchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1500 },
    { expenseType: 'Groceries', expenseAmount: 550 },
    { expenseType: 'Utilities', expenseAmount: 450 }
  ];

  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1300 },
    { expenseType: 'Groceries', expenseAmount: 650 }
  ];

  mayExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Groceries', expenseAmount: 700 },
    { expenseType: 'Utilities', expenseAmount: 500 }
  ];

  juneExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1800 },
    { expenseType: 'Groceries', expenseAmount: 600 }
  ];

  julyExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2500 },
    { expenseType: 'Groceries', expenseAmount: 750 },
    { expenseType: 'Utilities', expenseAmount: 550 }
  ];

  augustExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1700 },
    { expenseType: 'Groceries', expenseAmount: 650 }
  ];

  septemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1600 },
    { expenseType: 'Groceries', expenseAmount: 600 },
    { expenseType: 'Utilities', expenseAmount: 400 }
  ];

  octoberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1900 },
    { expenseType: 'Groceries', expenseAmount: 700 }
  ];

  novemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1400 },
    { expenseType: 'Groceries', expenseAmount: 650 },
    { expenseType: 'Utilities', expenseAmount: 350 }
  ];

  decemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2200 },
    { expenseType: 'Groceries', expenseAmount: 800 },
    { expenseType: 'Utilities', expenseAmount: 600 }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpense().push(newExpense);
      this.expenseForm.reset();
    }
  }
  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
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
  calculateTotalExpense(month: string): number {
    return this.getFilteredExpense().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  onSave() {
    if (this.expenseForm.valid) {
      this.expenseForm.reset({ month: this.selectedMonth });
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
