import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-addstudent',
  imports: [FormsModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent 
{
  constructor(private addservice:StudentserviceService)
  {}
  
  addstudent(data:any){
    console.log(data);
    this.addservice.addstudent(data).subscribe((result)=>{
      console.log(result);
      
    })
  }




    }
  





