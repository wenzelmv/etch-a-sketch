const DEFAULT_SIZE = 8;
const DEFAULT_FILL_COLOR = "#383838";

// Grid
const grid = document.getElementById("grid");
const gridWidth = grid.clientWidth;
let gridSize = DEFAULT_SIZE;
createGrid(gridSize);

// Slider
const gridSizeSlider = document.getElementById("grid-size-slider");
const sliderValues = document.querySelectorAll(".slider-value");
sliderValues.forEach((sv) => (sv.textContent = gridSize));
gridSizeSlider.onchange = (e) => setNewGridSize(e.target.value);
gridSizeSlider.addEventListener("input", (event) => {
  sliderValues.forEach((sv) => (sv.textContent = event.target.value));
});

// Create a div that will be a box in the grid
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${gridWidth / size}px`;
  div.style.height = `${gridWidth / size}px`;

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = DEFAULT_FILL_COLOR;
  });

  return div;
}

// Creates a grid that is of size
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid.appendChild(createDiv(size));
    }
  }
}

// When the user clicks on the button, open the popup
function showPopup() {
  let popup = document.getElementById("popup-input");
  popup.classList.toggle("show");
}

// Reset Grid
function resetGrid() {
  clearGrid();

  createGrid(gridSize);

  let gridBoxes = grid.querySelectorAll("div");
  gridBoxes.forEach(
    (gridBox) => (gridBox.style.backgroundColor = "transparent")
  );

  let cells = grid.querySelectorAll("div");
  cells.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = DEFAULT_FILL_COLOR;
    })
  );
}

// Sets to erase
function setPointerToEraser() {
  let cells = grid.querySelectorAll("div");
  cells.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "transparent";
    })
  );
}

// Removes all grid cells
function clearGrid() {
  grid.innerHTML = "";
}

// Sets the new grid size based on slider
function setNewGridSize(size) {
  gridSize = size;
  resetGrid();
}

// Sets pointer to change cell to a random color
function setPointerToRainbow() {
  let cells = grid.querySelectorAll("div");
  cells.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      const red = getRandomInt(255).toString();
      const green = getRandomInt(255).toString();
      const blue = getRandomInt(255).toString();
      cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
  );
}

// Gets a random integer up to 'max' value
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Particles.JS
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
