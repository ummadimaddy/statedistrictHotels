import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotelview',
  templateUrl: './hotelview.component.html',
  styleUrls: ['./hotelview.component.scss']
})
export class HotelviewComponent implements OnInit {

  constructor(private dataService: DataService, private route: Router) { }
public array;
public district = [];
public hotels = [];
public hot = [];
public dishes = [];

  ngOnInit() {
    this.dataService.fetchhotels().subscribe(data => {
      this.array = data;
      for (const x in this.array) {
        // console.log(this.array[x]);
        for (const y in this.array[x].district) {
          // console.log(this.array[x].district[y])
          for (const z in this.array[x].district[y].hotels) {
            // console.log(this.array[x].district[y].hotels[z]);
             this.hot.push(this.array[x].district[y].hotels[z]);
            //  console.log(this.hot);
          }
        }
        console.log(this.hot);
      }
      // this.district = this.array.district;
      // this.hotel = this.district.hotel;
    });
  }

  items(id: any) {
this.route.navigate(['display', id]);
  }

}
