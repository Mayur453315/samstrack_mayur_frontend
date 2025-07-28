import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- Added
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(
    private studentService: StudentService,
    private router: Router // <-- Added
  ) { }

  student = {
    name: '',
    email: ''
  };

  addStudent() {
    this.studentService.addStudent(this.student).subscribe((res) => {
      if (res) {
        this.student.email = '';
        this.student.name = '';
        this.router.navigate(['/all-students']);
        alert('Student added successfully');
      } else {
        alert('Failed to add student');
      }
    });
  }
}
