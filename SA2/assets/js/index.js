// funcao de scroll para elementos
function scrollElement(element, direction) {
  element.scrollBy({
    behavior: "smooth",
    left: direction === "left" ? -420 : 420,
  });
}

// funcao de login
function login(form) {
  const email = form.querySelector("input[type=email]").value;
  const password = form.querySelector("input[type=password]").value;
  const username = email.split("@")[0];

  localStorage.setItem("user", JSON.stringify({ email, password, username }));
  document.querySelector("#header-login-name").textContent = "Olá, " + username;

  $("#loginModal").modal("hide");
}

// funcao de logout
function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}

// acionamento do modal
function triggerModal() {
  const user = localStorage.getItem("user");
  if (!user) return $("#loginModal").modal("show");

  const userData = JSON.parse(user);
  updateUsername(userData.username);
  $("#userModal").modal("show");
}

// atualizar referencias de usuario
function updateUsername(username) {
  document.querySelector("#header-login-name").textContent = "Olá, " + username;
  document.querySelectorAll("#usernameContent").forEach((element) => {
    element.textContent = username;
  });
}

// atribuindo usuario logado
const user = localStorage.getItem("user");
if (user) {
  const userData = JSON.parse(user);
  updateUsername(userData.username);
}

const newsArrowLeft = document.querySelector("#news-arrow-left");
const newsArrowRight = document.querySelector("#news-arrow-right");

// evento de enter no botao de passar para esquerda item em novidades
newsArrowLeft.addEventListener("keyup", (event) => {
  if (event.key === "Enter")
    scrollElement(document.querySelector("#news-container"), "left");
});

// evento de enter no botao de passar para direita item em novidades
newsArrowRight.addEventListener("keyup", (event) => {
  if (event.key === "Enter")
    scrollElement(document.querySelector("#news-container"), "right");
});

// evento de click no botao de passar para esquerda item em novidades
newsArrowLeft.addEventListener("click", function (event) {
  event.preventDefault();
  event.target.blur();
  scrollElement(document.querySelector("#news-container"), "left");
});

// evento de click no botao de passar para direita item em novidades
newsArrowRight.addEventListener("click", function (event) {
  event.preventDefault();
  event.target.blur();
  scrollElement(document.querySelector("#news-container"), "right");
});
