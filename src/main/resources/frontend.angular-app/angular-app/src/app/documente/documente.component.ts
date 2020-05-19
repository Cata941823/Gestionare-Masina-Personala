import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Documentt, Utilizator} from "../services/car-log.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-documente',
  templateUrl: './documente.component.html',
  styleUrls: ['./documente.component.css']
})

export class DocumenteComponent implements OnInit {

  // DECLARATII VARIABILE
  username: String;
  nume: String;
  prenume: String;
  email: String;
  varsta: String;
  utilizatorLogat: Utilizator = null;
  DOCUMENT_DATA: Documentt[];
  DOCUMENT_DATA_TEMP;
  displayedColumns: string[] = ['ID', 'VIN', 'Tip document', 'Data expirare', 'Pret'];
  dataSource;

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();
    this.getToateDocumentele();
    this.dataSource = new MatTableDataSource(this.DOCUMENT_DATA);

    if (this.username == null) {
      this.redirectToLogin();
    }
  }

  initialiseUtilizatorLogat() {
    this.utilizatorLogat = this.carLogService.getUtilizatorLogat();
    if (this.utilizatorLogat) {
      this.username = this.utilizatorLogat.username;
      this.nume = this.utilizatorLogat.nume;
      this.prenume = this.utilizatorLogat.prenume;
      this.varsta = this.utilizatorLogat.varsta;
      this.email = this.utilizatorLogat.email;
    }
  }

  redirectToPlatform() {
    this.router.navigateByUrl("/platforma", {skipLocationChange: true});
    this.location.replaceState('/platforma');
  }

  redirectToLogin() {
    this.router.navigateByUrl("/login", {skipLocationChange: true});
    this.location.replaceState('/login');
  }

  redirectToAccount(){
    this.router.navigateByUrl("/myaccount", {skipLocationChange: true});
    this.location.replaceState('/myaccount');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getToateDocumentele(){
    this.dataService.getToateDocumentele(this.username).subscribe(data => {

      this.DOCUMENT_DATA_TEMP = data;
      for (let arr of this.DOCUMENT_DATA_TEMP){
        let array;
        console.log("ALO:", arr);
        array.iddocument = arr[0];
        array.vin = arr[1];
        array.tipdocumente = arr[2];
        array.dataexpirare = arr[3];
        array.pret = arr[4];
        this.DOCUMENT_DATA.push(array);
      }
    });
  }
}
