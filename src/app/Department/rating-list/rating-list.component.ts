import { Component, OnInit } from '@angular/core';
import {RateServiceService} from '../../Services/RateService.service'

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
RatingsList:any = [];
searchString:string='';
RatingsCountsforchart:any = [];

  constructor(private RateServiceService:RateServiceService) { 
    this.GetAllRating();
    this.GetAllCounts();
  }

  ngOnInit(): void {
  }

  GetAllRating(){
    this.RateServiceService.GetAllRates().subscribe((Result: any) => {
      if (Result != "") {
        this.RatingsList = Result;
      }
    });
  }

  customizeLabel(point:any) {
    return `${point.argumentText}: ${point.valueText}%`;
  }
  GetAllCounts(){
    this.RateServiceService.GetAllCounts().subscribe((Result: any) => {
      let RateCountList: any[];
      if (Result != "") {
        let total = Result.excellentCount + Result.verryGoodCount + Result.goodCount+Result.acceptedCount+Result.badCount;
          this.RatingsCountsforchart.push({"RateName":'Excellent',"percent":(Result.excellentCount*100/total)*1000/1000});
          this.RatingsCountsforchart.push({"RateName":'Verry Good',"percent":(Result.verryGoodCount*100/total)*1000/1000});
          this.RatingsCountsforchart.push({"RateName":'Good',"percent":(Result.goodCount*100/total)*1000/1000});
          this.RatingsCountsforchart.push({"RateName":'Accepted',"percent":(Result.acceptedCount*100/total)*1000/1000});
          this.RatingsCountsforchart.push({"RateName":'Bad',"percent":(Result.badCount*100/total)*1000/1000});
      }
    });
  }
}
