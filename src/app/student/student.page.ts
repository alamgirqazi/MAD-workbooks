import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { EverythingstudentService } from './../everythingstudent.service';
import { StudentsListService } from '../students-list.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss']
})
export class StudentPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private everythingstudentService: EverythingstudentService,
    private studentsListService: StudentsListService
  ) {}

  students = [];

  singleStudent;

  ngOnInit() {
    this.students = this.everythingstudentService.returnStudentsList();
    // this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('studentid');

      this.singleStudent = this.students.find(obj => {
        return obj.id.includes(val);
      });
    });
  }

  async deleteStudent() {
    console.log('deleteStudent', this.singleStudent);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleStudent.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.everythingstudentService.deleteStudent(this.singleStudent.id);
            this.router.navigateByUrl('/studentslist');
          }
        }
      ]
    });

    alert.present();

    // this.everythingstudentService.deleteStudent(this.singleStudent.id);
    // const url = `studentslist`;

    // this.router.navigateByUrl(url);

    // this.studentsListService.deleteAStudent(this.singleStudent.id);
  }
}

// const alert = await this.alertController.create({
//   header: 'Success',
//   // subHeader: 'Subtitle',
//   message: `${this.singleStudent.name} has been removed successfully`,
//   buttons: ['OK']
//   // buttons: [
//   //   {
//   //     text: 'Okay',
//   //     handler: () => {
//   //       console.log('Confirm Okay');
//   //       this.router.navigateByUrl('/studentslist');
//   //     }
//   //   }
//   // ]
// });

// alert.present();
