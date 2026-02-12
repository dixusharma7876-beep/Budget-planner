import { Routes } from '@angular/router';
import { login } from './budget-planner/login/login';
import { SideNav } from './budget-planner/side-nav/side-nav';
import { Dashboard } from './budget-planner/dashboard/dashboard';
import { Income } from './budget-planner/income/income';
import { Expense } from './budget-planner/expense/expense';
import { Todo } from './budget-planner/todo/todo';
import { Chatbox } from './chatbox/chatbox';
import { History } from './budget-planner/history/history';
import { Profile } from './budget-planner/profile/profile';


export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'       
    },
    {
        path: 'login',
         component: login
    },
    {
        path:'side-nav',
        component: SideNav
    },
    {
        path:'dashboard',
        component: Dashboard
    },
    {
        path:'income',
        component: Income
    },
    {
        path:'expense',
        component: Expense
    },
    {
        path:'todo',
        component: Todo
    },
    {
        path:'chatbox',
        component: Chatbox
    },
    {
        path:'history',
        component: History
    },
    {
        path:'profile',
        component: Profile
    }
    
    
];
