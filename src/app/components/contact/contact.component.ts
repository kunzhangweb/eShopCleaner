import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  mail = {
    to: "",
    from: "",
    subject: "",
    text: "",
    name: "",
    tel: "",
    sendtype: "",
  };
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  sendMail() {
    console.log(this.mail);
    this.http
      .post("https://eshop-cleaner-api.onrender.com/api/email", this.mail)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
