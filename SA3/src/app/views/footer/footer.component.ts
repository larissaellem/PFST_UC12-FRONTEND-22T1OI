import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["../../app.component.css"],
})
export class FooterComponent {
  links = [
    {
      label: "Home",
      url: "#",
    },
    {
      label: "Produtos",
      url: "#",
    },
    {
      label: "Fale conosco",
      url: "#",
    },
  ];
}
