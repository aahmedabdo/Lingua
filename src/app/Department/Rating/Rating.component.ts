import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import {RateServiceService} from '../../Services/RateService.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-Rating',
  templateUrl: './Rating.component.html',
  styleUrls: ['./Rating.component.css']
})
export class RateComponent implements OnInit {
  RateForm: FormGroup;

  RateObj: any = {};
  submitted = false;
  IfNotcheckRaingtars:boolean = false;
  constructor(private formBuilder: FormBuilder,private RateServiceService:RateServiceService,
    private Rout: Router) {
    this.RateForm = this.formBuilder.group({
      RateCount: new FormControl('',Validators.required),
      Notes: new FormControl('')
    })
   }

  ngOnInit(): void {
 
  }
  get Control(): { [key: string]: AbstractControl } {
    return this.RateForm.controls;
  }

  AddRate(){
    if (this.RateForm.valid) {
      var count = 0;
      Swal.fire({
        title: 'Are You Sure',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result:any) => {
        if (result.isConfirmed && count == 0) {
          this.RateObj.CreationDate = new Date();
          this.RateObj.Name =(this.RateObj.RateCount == 5)?'Excellent':(this.RateObj.RateCount == 4)?'Verry Good':(this.RateObj.RateCount == 3)?'Good':(this.RateObj.RateCount == 2)?'Accepted':(this.RateObj.RateCount == 1)?'Bad':'-';
          this.RateObj.RateCount = +this.RateObj.RateCount;
          this.RateServiceService.SaveRate(this.RateObj).subscribe((Result: any) => {
            if (Result != "") {
              if(Result._Id)
              Swal.fire('Rating Added Successfully', '', "success");
              this.RateObj ={};
              // this.Rout.navigate(['#RatingList']);
              location.href = location.origin +'/#RatingList';
            }
          });
        }
        else if (result.isDenied) {
          Swal.close();
        }
      })
    }
 else{
   this.IfNotcheckRaingtars = true;
 }
  }
}
