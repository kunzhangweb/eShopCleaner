import { Injectable } from "@angular/core";
import { Cleaner } from "../models/cleaner";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = "https://eshop-cleaner-api.onrender.com/api/cleaner/";

@Injectable({
  providedIn: "root",
})
export class CleanerService {
  cleaners: Cleaner[] = [];
  constructor(private http: HttpClient) {}

  addCleaner(cleaner) {
    const cleanerData = new FormData();
    cleanerData.append("weight", cleaner.weight);
    cleanerData.append("name", cleaner.name);
    cleanerData.append("description", cleaner.description);
    cleanerData.append("manufacturer", cleaner.manufacturer);
    cleanerData.append("barcode", cleaner.barcode);
    cleanerData.append("price", cleaner.price);
    cleanerData.append("date", Date.now().toString());
    cleanerData.append("image", cleaner.image);
    this.http
      .post<{ message: string; cleaner: Cleaner }>(API_URL, cleanerData)
      .subscribe((res) => {
        const resbook = res.cleaner;
        console.log(resbook);
        console.log(this.cleaners);
        this.cleaners.push(resbook);
        this.updateCleanerList();
      });
  }

  deleteCleaner(cleaner): Observable<any> {
    return this.http.delete(API_URL + `${cleaner._id}`);
  }

  getCleaner(id): Observable<any> {
    return this.http.get(API_URL + `${id}`);
  }

  getCleaners(): Observable<any> {
    return this.http.get(API_URL);
  }

  updateCleanerList() {
    this.getCleaners().subscribe((cleanerslist: Cleaner[]) => {
      this.cleaners = cleanerslist["Cleaners"];
    });
  }
}
