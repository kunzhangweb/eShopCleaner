import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CKEditorModule } from "ckeditor4-angular";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.modules";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatIconModule,
} from "@angular/material";
import { MatBadgeModule } from "@angular/material/badge";

import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { ContactComponent } from "./components/contact/contact.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from "../app/components/login/login.component";
import { SignupComponent } from "../app/components/signup/signup.component";

// import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { CleanerComponent } from "./components/cleaner/cleaner.component";
import { CleanerAddComponent } from "./components/cleaner-add/cleaner-add.component";
import { CleanerDetailComponent } from "./components/cleaner-detail/cleaner-detail.component";
import { CleanerListComponent } from "./components/cleaner-list/cleaner-list.component";
import { AdminSignupComponent } from "./components/admin-signup/admin-signup.component";
import { HeaderComponent } from "./components/header/header.component";

// var config = {
//   apiKey: "AIzaSyADiXXXXXXXXXXXXXXHT-IY",
//   authDomain: "ionic-4-fireXXXXXXXXXXeapp.com",
//   databaseURL: "https://ionic-4-fireXXXXXXXXXXXXeio.com",
//   projectId: "ionic-4-fiXXXXXXXXXXXn",
//   storageBucket: "ionic-4-firXXXXXXXXXXXpot.com",
//   messagingSenderId: "9253XXXXXXX324"
// };

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    CleanerAddComponent,
    CleanerDetailComponent,
    CleanerListComponent,
    AdminSignupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatBadgeModule,
    CKEditorModule,
    MatIconModule,
    MatRadioModule,
    FlexLayoutModule,
    MatSidenavModule,
    // AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
