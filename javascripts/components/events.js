import {printToDom} from "../helpers/util.js";

// Click Events and variables
const sortPets = () => {
  const catsBtns = document.getElementById('cats');
  const dogsBtns = document.getElementById('dogs');
  const dinosBtns = document.getElementById('dinos');
  catsBtns.addEventListener('click',sortPets);
  dogsBtns.addEventListener('click',sortPets);
  dinosBtns.addEventListener('click',sortPets);
  };
  // sortPets();


  // Pets Filter Builder Function 
const petsFilterBuilder = () => {
  filterString = '';
  filterString += `<div class="card2" style="width: 18rem;">`;
  filterString += `<div id="name"<h5>${pets[i].name}</h5></div>`;
  filterString += `<img src="${pets[i].img}" class="card-img-top" alt="picture"></<img>`;
  filterString += `<div class="card-body" id="color" ${pets[i].color}>`;
  filterString += `<p class="card-text">Special Skill: ${pets[i].specialSkill}</p></div>`;
  filterString += `</div>`;
  filterString += `</div>`;

  return filterString;
};

