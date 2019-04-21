import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-displaydishes',
  templateUrl: './displaydishes.component.html',
  styleUrls: ['./displaydishes.component.scss']
})
export class DisplaydishesComponent implements OnInit {
  public array;
  public district = [];
  public hotels = [];
  public dishes = [];
  public items = [];
  constructor(private obj: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    const ids = this.obj.snapshot.paramMap.get('id');
    this.dataService.fetchhotels().subscribe(data => {
      this.items = new Array();
      this.array = data;
      for (const x in this.array) {
        for (const y in this.array[x].district) {
          for (const z in this.array[x].district[y].hotels) {
            if (this.array[x].district[y].hotels[z].hotelid === ids) {
              console.log(this.array[x].district[y].hotels[z].hotelid);
              for (const a in this.array[x].district[y].hotels[z].dishes) {
                this.items.push(this.array[x].district[y].hotels[z].dishes[a]);
              }
            }
          }
          // break;
        }
      }
      console.log(this.items);
    });
  }
}
