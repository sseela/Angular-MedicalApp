import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientInfo } from 'src/app/models/patientInfo.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  /* name: string;
  nameSent: string; */
  bookingForm: FormGroup;
  patientInfo: PatientInfo = {name: '', age: 0, problem: ''};
  constructor(private backend: BackendService, private fb: FormBuilder) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      age: [],
      problem: ['']
    });
  }

  onSubmit() {
    console.log(this.bookingForm);
    this.patientInfo.name = this.bookingForm.controls.name.value;
    this.patientInfo.age = this.bookingForm.controls.age.value;
    this.patientInfo.problem = this.bookingForm.controls.problem.value;

    this.backend.savePatientInfo(this.patientInfo).subscribe(
      res => console.log(res)
    );
  }


}
