import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent {
  subject: any = {};
  subjectId: any;

  constructor(
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.subjectId = this.activatedRoute.snapshot.paramMap.get('subjectid');
    this.getSubject(this.subjectId);
  }

  getSubject(id: any) {
    this.subjectService.getSubject(id).subscribe((res) => {
      this.subject = res;
    });
  }

  updateSubject() {
  this.subjectService.updateSubject(this.subject).subscribe(() => {
    alert('Subject updated successfully!');
    this.router.navigate(['/all-subject']);
  }, (err) => {
    console.error('Error updating subject:', err);
  });
}

}
