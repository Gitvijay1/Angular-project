import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  constructor(private service : StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSData();
  }

  getAllSData(){
    /**this method calling service get data from observeble
     * and copy into student array such process is called suscrived()
     */
    this.service.getAllStudData().subscribe(
      data=>{this.students=data;},
      error=>{console.log(error);}
      
    )
  };
  deleteStudent(id : number){
    console.log("One row deleted "+id);
    this.service.deletestudent(id).subscribe(
      data=>{
              console.log(data);
              this.getAllSData();
      },
      error=>{
        console.log(error);
        
      }
    )
  };
  showEdit(id: number){
    this.router.navigate(['edit',id])
  }

}
