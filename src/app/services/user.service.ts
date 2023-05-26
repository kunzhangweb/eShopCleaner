import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

const API_URL = "https://eshop-cleaner-api.onrender.com/api/user/";

@Injectable({
  providedIn: "root",
})
export class UserService {
  loggedin: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  login(model: any): Observable<any> {
    return this.http.post(API_URL + "login", model);
  }

  signup(model: any): Observable<any> {
    return this.http.post(API_URL + "signup", model);
  }

  adminSignup(model: any): Observable<any> {
    return this.http.post(API_URL + "admin-signup", model);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    this.router.navigate(["/login"]);
  }
}
