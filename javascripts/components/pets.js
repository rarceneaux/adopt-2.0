import {printToDom} from "../helpers/util.js";

// thinking of a way to have cards auto fill in card colors with pet type
// const catCards = 'blue';
// const dogCards =  'green';
// const dinoCards = 'red';

// made array of objects key value pairs
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
        color:"Red",
        specialSkill:"Hitting Daddy",
        typeOfPet: "Dino"
      },

      {
        id: "pet6",
        name:"Earl Sinclair",
        img:"https://vignette.wikia.nocookie.net/the-dinosaurs-tv-series/images/6/65/Download.jpg/revision/latest?cb=20140502005725",
        color:"Red",
        specialSkill:"Getting Hit",
        typeOfPet: "Dino"
      },

      {
        id: "pet7",
        name:"Dino",
        img:"https://dyn1.heritagestatic.com/lf?set=path%5B1%2F2%2F6%2F1%2F4%2F12614592%5D%2Csizedata%5B850x600%5D&call=url%5Bfile%3Aproduct.chain%5D",
        color: "Red",
        specialSkill:"Dancing",
        typeOfPet: "Dino"
      },
      
      {
       id: "pet8",
       name:"Garfield",
       img:"https://catnamescity.com/wp-content/uploads/2017/07/famous-cat-names-garfield.jpg",
       color: "Blue",
       specialSkill: "Getting in Trouble",
       typeOfPet: "Cat"
      },

      {
        id: "pet9",
        name:"Tom",
        img:"https://i.pinimg.com/originals/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.png",
        color: "Blue",
        specialSkill: "Chasing Jerry",
        typeOfPet: "Cat"
       },

];

// Pets Builder Function to loop over pets
const petsBuilder = () => {
  let petString = " ";
  for(let i = 0;i<pets.length;i++){
  petString += `<div class="card" style="width: 18rem;" id="${pets[i].id}">`;
  petString += `<div id="name"<h5>${pets[i].name}</h5></div>`;
  petString += `<img src="${pets[i].img}" class="card-img-top alt="picture"></<img>`;
  petString += `<div class="card-body" id="color" ${pets[i].color}>`;
  petString += `<p class="card-text">Special Skill: ${pets[i].specialSkill}</p></div>`;
  petString += `<h5 class="pet-type">${pets[i].typeOfPet}</h5>`;
  petString += `</div>`;
}
printToDom(petString,"pet-cards");
}

    // // commmented out trying to figure out if I need or know how to json form e8
    // export {petsBuilder};
// Sort Btn Events here cat, dog, dino, all
// testing out cat btn its not working print 3 of the winston cards to dom and the others stay on page
const sortPets = (e) => {
  const type = e.target.id;
  if(type === 'cats'){
    let catString = " ";
    for(let i= 0;i<pets.length;i++){ 
      if(pets[i].typeOfPet === "Cat"){
        catString += petsFilterBuilder(pets);
      }
    }
    printToDom(catString,'pet-cards');
   
  }
  }
 
// Exported sortedPets to main.js to call on AppInt
const sortedPets = () => {
    const catsBtns = document.getElementById('cats');
    const dogsBtns = document.getElementById('dogs');
    const dinosBtns = document.getElementById('dinos');
    catsBtns.addEventListener('click',sortPets);
    dogsBtns.addEventListener('click',sortPets);
    dinosBtns.addEventListener('click',sortPets);
    };

   // Pets Filter Builder Function 
   const petsFilterBuilder = (pets) => {
    let filterString = '';
    for(let i = 0;i<pets.length;i++){
     filterString += `<div class="card" style="width: 18rem; id="${pets[i].id}">`;
     filterString += `<div id="name"<h5>${pets[i].name}</h5></div>`;
     filterString += `<img src="${pets[i].img}" class="card-img-top" alt="picture"></<img>`;
     filterString += `<div class="card-body" id="color" ${pets[i].color}>`;
     filterString += `<p class="card-text">Special Skill: ${pets[i].specialSkill}</p></div>`;
     filterString += `<h5 class="pet-type">${pets[i].typeOfPet}</h5>`;
     filterString += `</div>`;
     filterString += `</div>`;
  
    return filterString;
     }
  
    }
 
export {petsBuilder,sortedPets};