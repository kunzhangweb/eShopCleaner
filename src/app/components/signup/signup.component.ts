import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public model: any = {};

  constructor(
    private user: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  signup() {
    this.user.signup(this.model).subscribe(
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
