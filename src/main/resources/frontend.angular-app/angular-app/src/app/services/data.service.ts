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
}
