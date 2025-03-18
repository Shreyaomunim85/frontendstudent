import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-showstudent',
  imports: [FormsModule],
  templateUrl: './showstudent.component.html',
  styleUrl: './showstudent.component.css'
})
export class ShowstudentComponent {
  studentdata:any;
  studData: any = {}; 
  
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
  selectStudent(id:any){
    this.studentservice.getOneStudent(id).subscribe((response:any)=>{
      console.log(response);
      this.studData = response.student || response; // Adjust based on API response structure
    });
  }
  

  updateStudent(id:any, data:any) {
    const updatedData = {
      name: data.name || '',
      email: data.email || '',
      course: data.course || ''
    };

    this.studentservice.updateStudent(id, updatedData).subscribe((result)=>{
      console.log(result);
      this.showstudents();
    }, error => {
      console.error("Update failed:", error);
    });
}


}
