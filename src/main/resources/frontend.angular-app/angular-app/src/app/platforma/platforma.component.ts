import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-platforma',
  templateUrl: './platforma.component.html',
  styleUrls: ['./platforma.component.css']
})
export class PlatformaComponent implements OnInit {

  constructor(private router: Router, private location: Location, private dataService: DataService) { }

  ngOnInit(): void {
  }

}
