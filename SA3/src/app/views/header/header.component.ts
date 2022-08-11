import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: [
    "../../app.component.css"
  ]
})
export class HeaderComponent {
  links = [
    {
      name: "Home",
      url: "#"
    },
    {
      name: "Produtos",
      url: "#"
    },
    {
      name: "Monte seu PC",
      url: "#"
    },
    {
      name: "OFERTAS",
      url: "#"
    },
  ];

  activeIndex = 0;
}
