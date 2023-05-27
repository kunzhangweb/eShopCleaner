import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  public model: any = {};

  constructor(
    private user: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.user.login(this.model).subscribe(
      (data) => {
        //check the response message
        if (data["message"] === "Auth Successful") {
          // console.log("data:", data);
          this.toastr.success(data["message"], "Success");
          localStorage.setItem("user_type", data["user_type"]);
          localStorage.setItem("token", data["token"]);
          this.user.loggedin = true;
          this.router.navigate(["/list"]);
        }
      },
      (error) => {
        this.toastr.error(error.error.message, "Error");
      }
    );
  }
}
