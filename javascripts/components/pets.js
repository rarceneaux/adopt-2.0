import {printToDom} from "../helpers/util.js";

const pets = [
  { 
     id:"pet1", 
     name:"Winston",
     img:"https://media.defense.gov/2013/Sep/05/2000915544/780/780/0/130826-F-LX370-097.JPG",
     color:"green",
     specialSkill:"Jumping",
     typeOfPet: "Dog"
    },
 {  
   id:"pet2",
    name:"Kobe",
    img:"https://live.staticflickr.com/5472/9386968830_91cfc48341_b.jpg",
    color:"green",
    specialSkill:"Eating",
    typeOfPet: "Dog"
  },
    { 
      id:"pet3",
      name:"Napoleon",
      img:"https://cdn.pixabay.com/photo/2014/09/28/10/02/german-shepherd-464612_960_720.jpg",
      color:"green",
      specialSkill:"Hunting",
      typeOfPet: "Dog"
    },

     {
        id:"pet4",
        name:"Leo",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
        color:"blue",
        specialSkill:"Sleeping",
        typeOfPet: "Cat"
      },
      {
        id: "pet5",
        name:"Baby Sinclair",
        img:"https://i.ytimg.com/vi/HNR4hKbSH7I/hqdefault.jpg",
        color:"red",
        specialSkill:"Hitting Daddy",
        typeOfPet: "Dino"
      },
      {
        id: "pet6",
        name:"Earl Sinclair",
        img:"https://vignette.wikia.nocookie.net/the-dinosaurs-tv-series/images/6/65/Download.jpg/revision/latest?cb=20140502005725",
        color:"red",
        specialSkill:"Getting Hit",
        typeOfPet: "Dino"
      },
      {
        id: "pet7",
        name:"Dino",
        img:"https://dyn1.heritagestatic.com/lf?set=path%5B1%2F2%2F6%2F1%2F4%2F12614592%5D%2Csizedata%5B850x600%5D&call=url%5Bfile%3Aproduct.chain%5D",
        color: "red",
        specialSkill:"Dancing",
        typeOfPet: "Dino"
      },
      {
       id: "pet8",
       name:"Garfield",
       img:"https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
       color: "blue",
       specialSkill: "Getting in Trouble",
       typeOfPet: "Cat"
      },
      {
        id: "pet9",
        name:"Tom",
        img:"http://www.hscipets.org/images/pets07/jennifurr01.jpg",
        color: "blue",
        specialSkill: "Chasing Jerry",
        typeOfPet: "Cat"
       },
]
const petsBuilder = () => {
  let petString = " ";
  for(let i = 0;i<pets.length;i++){
  petString += `<div class="card" style="width: 18rem;" id="${pets[i].id}">`;
  petString += `<div id="name"<h5>${pets[i].name}</h5></div>`;
  petString += `<img src="${pets[i].img}" class="card-img-top img-thumbnail" alt="picture"></<img>`;
  petString += `<div class="card-body" id="color" ${pets[i].color}></div>`;
  petString += `<div p class="card-text">Special Skill: ${pets[i].specialSkill}</div>`;
  petString += `<div id="colorA"class="pet"><h5>${pets[i].typeOfPet}</h5></div></>`;
  petString += `</div>`;
}
printToDom(petString,"pet-cards");
};

const sortPets = (e) =>{
  const type = e.target.id;
  if (type === "cats") {
      let catString = " ";
      for(let i =0;i<pets.length;i++)
  if (pets[i].typeOfPet === "Cat"){
      catString += petsFilterBuilder(pets[i]);
      let thisDiv1 = document.getElementById("pet-cards");
      thisDiv1.style.display = "none";
    }
  printToDom(catString,"selected-pet");  
  
  } else if
    (type === "dogs"){
      let dogString = " ";
      for(let i = 0;i<pets.length;i++){
  if (pets[i].typeOfPet === "Dog"){
      dogString += petsFilterBuilder(pets[i]);
      let thisDiv2 = document.getElementById("selected-pet");
      thisDiv2.style.display = "none";
      }
    }
  printToDom(dogString,"ruf");
  } else {
      (type === "dinos")
      let dinosString = " ";
      for(let i = 0;i<pets.length;i++){
  if (pets[i].typeOfPet === "Dino"){
        dinosString += petsFilterBuilder(pets[i]);
        let thisDiv3 = document.getElementById("ruf");
        thisDiv3.style.display = "none";
  }
    }
  printToDom(dinosString,"roar");
  }
};

const sortedPets = () => {
    const catsBtns = document.getElementById("cats");
    const dogsBtns = document.getElementById("dogs");
    const dinosBtns = document.getElementById("dinos");
    catsBtns.addEventListener('click',sortPets);
    dogsBtns.addEventListener('click',sortPets);
    dinosBtns.addEventListener('click',sortPets);
    };
sortedPets();

const filterAll = (e) => {
  const all = e.target.id;
    if (all === 'all-pets'){
      let thisDiv4 = document.getElementById('roar');
      thisDiv4.style.display = "none";
      let thisDiv1a = document.getElementById("pet-cards");
      thisDiv1a.style.display = "flex";
  }
};

const allFilter = () =>{
  const allPets = document.getElementById("all-pets");
  allPets.addEventListener('click',filterAll);
};
allFilter();
 
const petColors = () =>{
  let cardPetColor = document.getElementsByClassName("pet");
    for(let i =0;i<cardPetColor.length;i++){
if (cardPetColor[i].textContent === "Dog") {
    cardPetColor[i].style.backgroundColor = "green";
} else if (cardPetColor[i].textContent === "Dino") {
    cardPetColor[i].style.backgroundColor = "red";
} else { cardPetColor[i].textContent === "Cat"
  cardPetColor[i].style.backgroundColor = "blue";
  } 
 }
};

const petsFilterBuilder = (pet) => {
    let filterString = " ";
     filterString += `<div class="card" style="width: 18rem;" id="${pet.id}">`;
     filterString += `<div id="name"<h5>${pet.name}</h5></div>`;
     filterString += `<img src="${pet.img}" class="card-img-top img-thumbnail alt="picture"></<img>`;
     filterString += `<div p class="card-text">Special Skill: ${pet.specialSkill}</div>`;
     filterString += `<div id="colorA" class="pet"><h5>${pet.typeOfPet}</h5></div>`;
     filterString += `</div>`;
     filterString += `</div>`;
     filterString += `</div>`;
     return filterString;
   };

export {petsBuilder,petColors};
