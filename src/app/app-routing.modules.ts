import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { CleanerAddComponent } from "../app/components/cleaner-add/cleaner-add.component";
import { CleanerListComponent } from "../app/components/cleaner-list/cleaner-list.component";
import { ContactComponent } from "../app/components/contact/contact.component";
import { CleanerDetailComponent } from "../app/components/cleaner-detail/cleaner-detail.component";
import { LoginComponent } from "../app/components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AdminSignupComponent } from "./components/admin-signup/admin-signup.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "add", component: CleanerAddComponent },
  { path: "list", component: CleanerListComponent },
  { path: "detail/:id", component: CleanerDetailComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "admin-signup", component: AdminSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
