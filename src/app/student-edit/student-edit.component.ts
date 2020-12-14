import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: Student=new Student();
  id: number
  router: any;
  massage:any;

  constructor( private service:StudentService,private activatedRout:ActivatedRoute,router:Router) { }

  ngOnInit(): void {
    //read id given by list component on click edit
    this.id=this.activatedRout.snapshot.params['id'];
    //call service and suscrive success data to student
    this.service.getOneStudent(this.id).subscribe(
      data=>{
              this.student=data;
      }
    )
  }

  updateStd(){
   // console.log('student updetd')
   this.service.updateStudent(this.student).subscribe(
     data=>{
       console.log(data);
       this.router.navigate(['all'])
       this.massage=data;
     }
   )

   }
  }


