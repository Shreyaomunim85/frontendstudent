import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 

{
  title = 'studentcreation';
}
