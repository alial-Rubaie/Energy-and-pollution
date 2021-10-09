// Start defining variables

let windMill = document.getElementById("mill");
let lights = document.getElementById("earthLight");
let fan = document.getElementById("fan");
let fire = document.getElementById("fire");
let tower = document.getElementById("tower");
let discEle = document.getElementById("describe");
let windDisc = `The windmill energy station is working.Alternative energy will never run out, it Protects the environment, saves money, and creates new jobs.`;
let towerDisc = `Now the tower station is working. Fossil fuels are causing air pollution, global warming, and rising sea levels.`;
let pointer = document.getElementById("pointer");
let earth = document.getElementById("earth");
let timer = 0;

// End defining variables

// Start windmll onmousedown effects

windMill.onmousedown = function () {
  // Start style effects

  lights.style.backgroundColor = `#ac2525`;
  earth.style.animation = ` earth-rutate 10s linear infinite,
  goodEf 3s ease 0s 1 normal forwards`;
  pointer.style.display = `inline`;

  // End style effects

  // Start typing effect

  let i = 0;
  discEle.innerHTML = ``;
  timer = setInterval(function () {
    discEle.innerHTML += windDisc[i];
    if (windDisc[i] === ".") {
      discEle.innerHTML += `<br>`;
    }
    i++;
    if (i > windDisc.length - 1) {
      clearInterval(timer);
    }
    if (discEle.textContent.includes("undefined")) {
      clearInterval(timer);
      discEle.innerHTML = `<pre>Sorry something went wrong please restart the page</pre>`;
    }
  }, 50);

  // End typing effect
};

// End windmll onmousedown effects

// Start windmll onmouseup effects

windMill.onmouseup = function () {
  // Finish typing if it was working and restore the defult values

  clearInterval(timer);
  discEle.innerHTML = ``;
  discEle.innerHTML = `Please run at least one station to get a description of the action you did.`;
  pointer.style.display = ``;

  // Restore the default style values

  earth.style.animation = ` earth-rutate 10s linear infinite`;
  lights.style.transition = `2s`;
  lights.style.backgroundColor = ``;
};

// End windmll onmouseup effects

// Start oil tower onmousedown effects

tower.onmousedown = function () {
  // Start style effects

  pointer.style.display = `inline`;
  lights.style.transitionDelay = `1s`;
  lights.style.transition = `3s`;
  lights.style.backgroundColor = `#ac2525`;
  fire.style.animation = `opacity 2s infinite forwards`;
  setTimeout(function () {
    fire.style.animation = `flicker 3s infinite ease-in-out `;
  }, 2000);
  earth.style.animation = ` earth-rutate 10s linear infinite,
  badEf 3s ease 0s 1 normal forwards`;

  // End style effects

  // Start typing effect

  discEle.innerHTML = ``;
  i = 0;
  timer = setInterval(function () {
    discEle.innerHTML += towerDisc[i];
    if (towerDisc[i] === ".") {
      discEle.innerHTML += `<br>`;
    }
    i++;
    if (i > towerDisc.length - 1) {
      clearInterval(timer);
    }
    if (discEle.textContent.includes("undefined")) {
      clearInterval(timer);
      discEle.innerHTML = `<pre>Sorry something went wrong please restart the page</pre>`;
    }
  }, 50);

  // End typing effect
};

// End oil tower onmousedown effects

// Start oil tower onmouseup effects

tower.onmouseup = function () {
  //Finish typing if it was working and restore the values

  clearInterval(timer);
  discEle.innerHTML = ``;
  discEle.innerHTML = `Please run at least one station to get a description of the action you did.`;

  // Restore the default style values

  pointer.style.display = ``;
  earth.style.animation = ` earth-rutate 10s linear infinite`;
  lights.style.backgroundColor = ``;
};
// End oil tower onmouseup effects
