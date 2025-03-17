import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-showstudent',
  imports: [],
  templateUrl: './showstudent.component.html',
  styleUrl: './showstudent.component.css'
})
export class ShowstudentComponent {
  studentdata:any
  constructor(private studentservice:StudentserviceService)
  {
    this.showstudents();
  }
  showstudents()
  {
    this.studentservice.showstudent().subscribe((data)=>{
      console.log(data);
      this.studentdata=data;
      
    })
  }


  deletestudent(id:any)
  {
    this.studentservice.deletestudent(id).subscribe((result)=>{
      console.log(result);
      
    })

  }

}
