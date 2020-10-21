import { Component } from "@angular/core";
// import { ApiServiceService } from './api-service.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  searchText: string = "";
  constructor() { }

  ngOnInit(): void {
  }
}
