import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/utilizatori");
    return this.httpClient.get<any>(url);
  }

  insertUser(user): Observable<HttpRequest<any>> {
    let url = this.baseUrl.concat("/search/utilizatori");
    console.log("CUTARE");
    console.log(user);
    let payload = {data: user};
    console.log(payload.data)
    return this.httpClient.post<any>(url, payload.data);
  }

  signIn(username, parola): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/login");
    console.log(username, parola);
    let payload = {
      username: username,
      parola: parola
    }
    return this.httpClient.post<any>(url, payload);
  }

  getKilometraj(username): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/kilometraj");
    let payload = {username: username};
    return this.httpClient.post<any>(url, payload);
  }

  getNrMasini(username): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/nrmasini");
    let payload = {username: username};
    return this.httpClient.post<any>(url, payload);
  }

  getPretMasini(username): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/valuemasini");
    let payload = {username: username};
    return this.httpClient.post<any>(url, payload);
  }

  getNrAvariatii(username): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/nravariatii");
    let payload = {username: username};
    return this.httpClient.post<any>(url, payload);
  }

  getTotalAlimentari(username): Observable<HttpResponse<any>> {
    let url = this.baseUrl.concat("/search/totalalimentari");
    let payload = {username: username};
    return this.httpClient.post<any>(url, payload);
  }



}
