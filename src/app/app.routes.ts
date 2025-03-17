import { Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

export const routes: Routes = 

[

    
    {path:'addstudent',component:AddstudentComponent},
    {path:'showstudent',component:ShowstudentComponent},
    {path: 'updatestudent',component:UpdatestudentComponent}
];
