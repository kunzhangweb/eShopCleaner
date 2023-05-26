import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-admin-signup",
  templateUrl: "./admin-signup.component.html",
  styleUrls: ["./admin-signup.component.css"]
})
export class AdminSignupComponent implements OnInit {
  ngOnInit() {}
  public model: any = {};

  constructor(
    private user: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  adminSignup() {
    this.user.adminSignup(this.model).subscribe(
      data => {
        this.toastr.success(data["message"], "Success");
        this.router.navigate(["/login"]);
      },
      error => {
        this.toastr.error(error.error.message, "Error");
      }
    );
  }
}
