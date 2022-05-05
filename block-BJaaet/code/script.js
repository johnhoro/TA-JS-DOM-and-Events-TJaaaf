let input = document.querySelector(`input[type="text"]`);
let rootEle = document.querySelector(".movies_list");

let allMovies = [
  {
    name: "Forest Gump",
    watched: true,
  },
  {
    name: "Inception",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    creatMovieUI();
  }
});

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  creatMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function creatMovieUI() {
  rootEle.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("styled-checkbox");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;

    input.addEventListener(`change`, handleChange);
    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", i);

    span.addEventListener(`click`, deleteMovie);

    li.append(input, label, span);
    rootEle.append(li);
  });
}
creatMovieUI();
