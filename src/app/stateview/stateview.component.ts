import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import {Router} from '@angular/router';
@Component({
  selector: "app-stateview",
  templateUrl: "./stateview.component.html",
  styleUrls: ["./stateview.component.scss"]
})
export class StateviewComponent implements OnInit {
  array: any;
  array1: any[];
  a: any;
  array2: any[];
  array3:any[];
  public states;

  constructor(private dataService: DataService,private route:Router) {}

  ngOnInit() {
    this.dataService.fetchhotels().subscribe(data => {
      this.array = data;
      this.array1 = new Array();
      // console.log(data);
      for (const x in this.array) {
        this.array1.push(this.array[x]); //  this.states.push(this.array[x])
        console.log(this.array1);
      }
    });

    // console.log(this.states);
  }
  onSelectState(val: any) {
    console.log(val);
    this.dataService.fetchhotels().subscribe(data => {
      this.array = data;
      this.array2 = new Array();
      for (const x in this.array) {
        if (this.array[x].stateid == val) {
          for (const y in this.array[x].district) {
            this.array2.push(this.array[x].district[y]);
          }
        }
        // console.log(this.array2);
      }
    });
  }
  onSelectDistrict(value:any){
    console.log(value);
    this.dataService.fetchhotels().subscribe(data=>{
      this.array=data;
      this.array3=new Array();
      for(const x in this.array){
        // if(this.array[x].stateid==this.val)
        for(const y in this.array[x].district){
          if(this.array[x].district[y].districtid==value){
            for(const z in this.array[x].district[y].hotels){
this.array3.push(this.array[x].district[y].hotels[z])
            }
          }
        }
      }
      // console.log(this.array3);
    })
  }
  routing(id:any){
    this.route.navigate(['display', id]);
  }
}
