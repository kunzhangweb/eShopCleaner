import { Component, OnInit } from "@angular/core";
import { Cleaner } from "../../models/cleaner";
import { HttpClient } from "@angular/common/http";
import { CleanerService } from "../../services/cleaner.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-cleaner-add",
  templateUrl: "./cleaner-add.component.html",
  styleUrls: ["./cleaner-add.component.css"]
})
export class CleanerAddComponent implements OnInit {
  cleaner: Cleaner = {
    name: "",
    weight: "",
    description: "",
    price: "",
    manufacturer: "",
    barcode: null
  };
  imagePreview: any;
  image;

  constructor(
    private http: HttpClient,
    private user: UserService,
    public cleanerservice: CleanerService,
    private router: Router
  ) {}

  ngOnInit() {}
  // isLogin() {

  //   if (this.user.loggedin) {
  //     this.router.navigate(["/add"]);
  //   }
  // }

  addCleaner() {
    this.cleanerservice.addCleaner(this.cleaner);
    this.cleaner = {
      name: "",
      weight: "",
      description: "",
      price: "",
      manufacturer: "",
      barcode: null
    };
    this.router.navigate(["/list"]);
  }

  onImagePicked(event) {
    const file = event.target.files[0];
    console.log(file);
    this.cleaner.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
