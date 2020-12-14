import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  basePath : string='http://localhost:8989/nit/api/std';

  constructor(private http : HttpClient) { }

  getAllStudData(): Observable<Student[]>{
    
    return  this.http.get<Student[]>(`${this.basePath}/all`);
  }

  deletestudent(id : number): Observable<any>{
    return this.http.delete(`${this.basePath}/delete/${id}`,{responseType: 'text'});
  }

  cretaeStudent(student: Student):Observable<any>{
     return this.http.post(`${this.basePath}/save`,student,{responseType: 'text'} )
  }

  getOneStudent(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.basePath}/one/${id}`)
  }

  updateStudent(student: Student):Observable<any>{
    return this.http.put(`${this.basePath}/update`, student, {responseType: 'text'})
  }
}
