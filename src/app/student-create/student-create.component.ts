import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student=new Student();
  massage:any;

  constructor(private service:StudentService, router: Router) { }

  ngOnInit(): void {
    //reset form data
    this.student=new Student();
  }
    createStudent()
    {
     // console.log('data submmit'+this.student.sname);
      this.service.cretaeStudent(this.student).subscribe(
      data=>{
          console.log(data);
          this.massage=data;
          this.student=new Student();
      },
      error=>{
              console.log(error);
      });
    }
}
