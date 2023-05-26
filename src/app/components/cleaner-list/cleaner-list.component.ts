import { Component, OnInit } from "@angular/core";
import { CleanerService } from "../../services/cleaner.service";
import { Cleaner } from "../../models/cleaner";

@Component({
  selector: "app-cleaner-list",
  templateUrl: "./cleaner-list.component.html",
  styleUrls: ["./cleaner-list.component.css"]
})
export class CleanerListComponent implements OnInit {
  constructor(public cleanerService: CleanerService) {}

  cleaners: Cleaner[] = [];

  ngOnInit() {
    this.cleanerService.updateCleanerList();
  }

  deleteCleaner(cleaner) {
    this.cleanerService.deleteCleaner(cleaner).subscribe(() => {
      this.cleanerService.updateCleanerList();
    });
  }
}
