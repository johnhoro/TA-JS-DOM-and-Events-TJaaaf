let rootElement = document.querySelector("main");

got.houses.forEach((house) => {
  house.people.forEach((p) => {
    const article = document.createElement("article");
    const peopleInfo = document.createElement("div");
    const img = document.createElement("img");
    img.src = p.image;
    const name = document.createElement("h2");
    name.innerText = p.name;
    const description = document.createElement("p");
    description.innerText = p.description;
    const learnMoreBtn = document.createElement("button");
    learnMoreBtn.innerText = "Learn More!";

    peopleInfo.append(img, name);
    article.append(peopleInfo, description, learnMoreBtn);
    rootElement.append(article);
  });
});
