import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  users;

  getUsers() {
    console.log("clicked");
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
