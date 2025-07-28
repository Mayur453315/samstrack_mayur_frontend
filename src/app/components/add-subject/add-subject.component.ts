import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  constructor(private subjectService: SubjectService) { }

  subject = {
    name: ''
  }

  addSubject() {
    const trimmedName = this.subject.name.trim();

    if (!trimmedName) {
      alert("⚠️ Please enter the subject name.");
      return;
    }

    this.subjectService.addSubject({ name: trimmedName }).subscribe((res) => {
      if (res != null) {
        alert("✅ Subject Added Successfully!");
        this.subject.name = '';
      } else {
        alert("❌ Something Went Wrong.");
      }
    });
  }
}
