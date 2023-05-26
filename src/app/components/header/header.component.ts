import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private user: UserService, private toastr: ToastrService) {}

  ngOnInit() {}
  logout() {
    this.user.logout();
    this.toastr.success("Successfuly Loged out", "Success");
    this.user.loggedin = false;
  }
}
