import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: any;
  constructor(private dataService: DataService, private route: Router) {}
  loginform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  ngOnInit() {}
  onsubmit() {
    const data = this.loginform.value;
    this.dataService.fetchlogindata().subscribe(response => {
      for (const x in response) {
        if (response[x].email === data.email && response[x].password === data.password) {
         if (response[x].role === 'admin') {
          console.log(response[x].role);
          this.route.navigate(['/landingpage']);
         } else if (response[x].role === 'user') {
           console.log(response[x].role);
           this.route.navigate(['/landingpage']);
         } else {
           console.log('not user or admin');
         }
        }
      }
    });
    // const data = this.loginform.value;
    // this.dataService.fetchlogindata().subscribe(response => this.users = response);
    // for (const x in this.users) {
    // console.log(this.users[x].email );
    // console.log(this.loginform.value.email);
    // if (this.users[x].email === this.loginform.value.email &&  this.users[x].password === this.loginform.value.password) {
    //   console.log('hii');
    //   if (this.users[x].role === 'admin') {
    //     // true;
    //     console.log(this.users[x].role);
    //   } else if (this.users[x].role === 'user') {
    //     // true;
    //     console.log(this.users[x].role);
    //   } else {
    //     // false
    //   }
    // }
  }
}
