import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.html',
  styleUrl: './income.css',
})
export class Income {
  incomeForm: any;
  selectedMonth: any;
  januaryIncome: any[] = [
    { source: 'Salary', amount: 500, investment: '401(k)' },
    { source: 'freelancing', amount: 1000, investment: 'stocks' },
  ];
  februaryIncome: any[] = [
    { source: 'Salary', amount: 520, investment: '401(k)' },
    { source: 'Freelancing', amount: 900, investment: 'Stocks' },
    { source: 'Rental Income', amount: 750, investment: 'Real Estate' },
  ];

  marchIncome: any[] = [
    { source: 'Salary', amount: 500, investment: '401(k)' },
    { source: 'Freelancing', amount: 1100, investment: 'Stocks' },
    { source: 'Rental Income', amount: 820, investment: 'Real Estate' },
  ];

  aprilIncome: any[] = [
    { source: 'Salary', amount: 530, investment: '401(k)' },
    { source: 'Freelancing', amount: 950, investment: 'Stocks' },
    { source: 'Rental Income', amount: 780, investment: 'Real Estate' },
  ];

  mayIncome: any[] = [
    { source: 'Salary', amount: 550, investment: '401(k)' },
    { source: 'Freelancing', amount: 1200, investment: 'Stocks' },
    { source: 'Rental Income', amount: 850, investment: 'Real Estate' },
  ];

  juneIncome: any[] = [
    { source: 'Salary', amount: 560, investment: '401(k)' },
    { source: 'Freelancing', amount: 1000, investment: 'Stocks' },
    { source: 'Rental Income', amount: 800, investment: 'Real Estate' },
  ];

  julyIncome: any[] = [
    { source: 'Salary', amount: 570, investment: '401(k)' },
    { source: 'Freelancing', amount: 1300, investment: 'Stocks' },
    { source: 'Rental Income', amount: 900, investment: 'Real Estate' },
  ];

  augustIncome: any[] = [
    { source: 'Salary', amount: 560, investment: '401(k)' },
    { source: 'Freelancing', amount: 1050, investment: 'Stocks' },
    { source: 'Rental Income', amount: 820, investment: 'Real Estate' },
  ];

  septemberIncome: any[] = [
    { source: 'Salary', amount: 580, investment: '401(k)' },
    { source: 'Freelancing', amount: 1150, investment: 'Stocks' },
    { source: 'Rental Income', amount: 880, investment: 'Real Estate' },
  ];

  octoberIncome: any[] = [
    { source: 'Salary', amount: 600, investment: '401(k)' },
    { source: 'Freelancing', amount: 1400, investment: 'Stocks' },
    { source: 'Rental Income', amount: 920, investment: 'Real Estate' },
  ];

  novemberIncome: any[] = [
    { source: 'Salary', amount: 600, investment: '401(k)' },
    { source: 'Freelancing', amount: 1250, investment: 'Stocks' },
    { source: 'Rental Income', amount: 900, investment: 'Real Estate' },
  ];

  decemberIncome: any[] = [
    { source: 'Salary', amount: 650, investment: '401(k)' },
    { source: 'Freelancing', amount: 1500, investment: 'Stocks' },
    { source: 'Rental Income', amount: 1000, investment: 'Real Estate' },
  ];
  monthSelected: boolean = false;
  constructor(public fb: FormBuilder, public router: Router) {

    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }
  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investment: ['', Validators.required]

    })
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value
    this.monthSelected = true;
    this.getFilteredIncome();
  }
  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomeForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomeForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncome;
      case 'February':
        return this.februaryIncome;

      case 'March':
        return this.marchIncome;

      case 'April':
        return this.aprilIncome;

      case 'May':
        return this.mayIncome;

      case 'June':
        return this.juneIncome;

      case 'July':
        return this.julyIncome;

      case 'August':
        return this.augustIncome;

      case 'September':
        return this.septemberIncome;

      case 'October':
        return this.octoberIncome;

      case 'November':
        return this.novemberIncome;

      case 'December':
        return this.decemberIncome;
      default:
        return [];

    }
  }



  getFilteredIncome(): any[] {
  switch (this.selectedMonth) {
    case 'January': return this.januaryIncome;
    case 'February': return this.februaryIncome;
    case 'March': return this.marchIncome;
    case 'April': return this.aprilIncome;
    case 'May': return this.mayIncome;
    case 'June': return this.juneIncome;
    case 'July': return this.julyIncome;
    case 'August': return this.augustIncome;
    case 'September': return this.septemberIncome;
    case 'October': return this.octoberIncome;
    case 'November': return this.novemberIncome;
    case 'December': return this.decemberIncome;
    default: return [];
  }
}


  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncome.push(newIncome);
          break;

        case 'February':
          this.februaryIncome.push(newIncome);
          break;

        case 'March':
          this.marchIncome.push(newIncome);
          break;

        case 'April':
          this.aprilIncome.push(newIncome);
          break;

        case 'May':
          this.mayIncome.push(newIncome);
          break;

        case 'June':
          this.juneIncome.push(newIncome);
          break;

        case 'July':
          this.julyIncome.push(newIncome);
          break;

        case 'August':
          this.augustIncome.push(newIncome);
          break;

        case 'September':
          this.septemberIncome.push(newIncome);
          break;

        case 'October':
          this.octoberIncome.push(newIncome);
          break;

        case 'November':
          this.novemberIncome.push(newIncome);
          break;

        case 'December':
          this.decemberIncome.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investment: '' });

    }

  }

  saveForm() {
    console.log("Form saved");
  }

  onBack() {
    this.router.navigate(['dashboard'])
  }

}
