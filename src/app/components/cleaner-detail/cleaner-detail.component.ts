import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CleanerService } from "../../services/cleaner.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Cleaner } from "../../models/cleaner";

@Component({
  selector: "app-cleaner-detail",
  templateUrl: "./cleaner-detail.component.html",
  styleUrls: ["./cleaner-detail.component.css"]
})
export class CleanerDetailComponent implements OnInit {
  cleaner: Cleaner;
  cleanerId;

  constructor(
    private http: HttpClient,
    public bookservice: CleanerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cleanerId = this.route.params.subscribe(params => {
      this.bookservice
        .getCleaner(params["id"])
        .subscribe((cleaner: Cleaner) => {
          this.cleaner = cleaner;
          console.log(this.cleaner);
        });
    });
  }
}
