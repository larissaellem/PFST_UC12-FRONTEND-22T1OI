import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  template: ` 
  <app-header></app-header>
  <app-home></app-home>
  <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = "SA3";
}
