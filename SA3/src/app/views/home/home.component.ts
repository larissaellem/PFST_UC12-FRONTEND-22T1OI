import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  // funcao de scroll para elementos
  scrollElement(direction: string) {
    (document.querySelector("#news-container") as HTMLElement).scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -420 : 420,
    });
  }

  // funcao de login
  // login(form: HTMLFormElement) {
  //   const email = form.querySelector<HTMLInputElement>("input[type=email]")?.value;
  //   const password = form.querySelector<HTMLInputElement>("input[type=password]")?.value;
  //   if(!email || !password) return alert("Preencha todos os campos para fazer login");

  //   const username = email.split("@")[0];

  //   localStorage.setItem("user", JSON.stringify({ email, password, username }));
  //   document.querySelector("#header-login-name").textContent = "Olá, " + username;

  //   $("#loginModal").modal("hide");
  // }

  // // funcao de logout
  // logout() {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // }

  // // acionamento do modal
  // triggerModal() {
  //   const user = localStorage.getItem("user");
  //   if (!user) return $("#loginModal").modal("show");

  //   const userData = JSON.parse(user);
  //   updateUsername(userData.username);
  //   $("#userModal").modal("show");
  // }

  // // atualizar referencias de usuario
  // updateUsername(username) {
  //   document.querySelector("#header-login-name").textContent = "Olá, " + username;
  //   document.querySelectorAll("#usernameContent").forEach((element) => {
  //     element.textContent = username;
  //   });
  // }

  // // atribuindo usuario logado
  // const user = localStorage.getItem("user");
  // if (user) {
  //   const userData = JSON.parse(user);
  //   updateUsername(userData.username);
  // }
}
