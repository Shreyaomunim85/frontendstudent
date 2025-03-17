import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent {
  private route = inject(ActivatedRoute);
  private studentService = inject(StudentserviceService);
  private router = inject(Router);

  studentData: any = { name: '', email: '', course: '' };
  studentId!: number;
  successMessage: string = '';

  constructor() {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    // ✅ Fetch student data directly in the constructor
    this.studentService.getStudentById(this.studentId).subscribe(
      (response) => {
        this.studentData = response;
      },
      (error) => {
        console.error('Error fetching student data', error);
      }
    );
  }

  updateStudent() {
    if (!this.studentData.name || !this.studentData.email || !this.studentData.course) {
      alert("All fields are required!");
      return;
    }

    // ✅ Call API to update student data
    this.studentService.updateStudent(this.studentId, this.studentData).subscribe(
      (response) => {
        console.log("Update successful:", response);
        this.successMessage = 'Student updated successfully!';

        // ✅ Redirect after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/students']);
        }, 2000);
      },
      (error) => {
        console.error('Error updating student', error);
      }
    );
  }
}
