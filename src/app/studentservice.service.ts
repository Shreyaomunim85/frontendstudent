import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private apiUrl = 'http://127.0.0.1:8000/api/students';

  constructor(private http:HttpClient) { }

  addstudent(data:any)
  {
    return this.http.post("http://127.0.0.1:8000/api/store",data);

  }
  showstudent()
  {
    return this.http.get("http://127.0.0.1:8000/api/index");
  }

  deletestudent(id:any)
  {
    return this.http.delete("http://127.0.0.1:8000/api/destroy/"+id)
  }


  
  getStudentById(id: number) {
     return this.http.get("http://127.0.0.1:8000/api/update/1");
   }

  // updateStudent(id: number, data: any){
  //   return this.http.post("http://127.0.0.1:8000/api/update/1",data);
 // }
 updateStudent(id: number, studentData: any): Observable<any> {
  return this.http.put(`http://127.0.0.1:8000/api/students/${id}`, studentData);
}

  
}
