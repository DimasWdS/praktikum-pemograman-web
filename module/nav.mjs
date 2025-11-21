function createNav(conTarget) {
  const container = document.createElement("section");

  conTarget.appendChild(container);

  container.classList.add("ascda");

  for (let i = 0; i < 7; i++) {
    const a = document.createElement("a");

    a.classList.add("sacd");

    container.appendChild(a);

    switch (true) {
      case i === 0:
        a.textContent = "Module 1 (VCS)";
        a.setAttribute("target", "_blanks");
        a.setAttribute(
          "href",
          "https://github.com/DimasWdS/praktikum-pemograman-web/network"
        );
        break;
      case i === 1:
        a.setAttribute("target", "_blanks");
        a.textContent = "Github page";
        a.setAttribute(
          "href",
          "https://github.com/DimasWdS/praktikum-pemograman-web/settings/pages"
        );
        break;
      case i === 2:
        a.textContent = "Module 3 hal 45";
        a.setAttribute("href", "index.html");
        break;
      case i === 3:
        a.textContent = "Module 4 hal 57";
        a.setAttribute("href", "prak4hal51.html");
        break;
      case i === 4:
        a.textContent = "Module 5 hal 57";
        a.setAttribute("href", "prak5hal57.html");
        break;
      case i === 5:
        a.textContent = "Module 6 hal 64";
        a.setAttribute("href", "prak6hal64.html");
        break;
      case i === 6:
        a.textContent = "Module 7 hal 80";
        a.setAttribute("href", "prak7hal80.html");
        break;
    }
  }
}

export { createNav };
