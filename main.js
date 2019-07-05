// // console.log("Adpotion Me");

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
                    specialSkill:"Sleeping",
                    typeOfPet: "Dog"
                  },


                    { 
                      id:"pet3",
                      name:"Lil Bit",
                      img:"https://storage.needpix.com/rsynced_images/dog-2471271_1280.jpg",
                      color:"green",
                      specialSkill:"Eating",
                      typeOfPet: "Dog"
                    },


                     {
                        id:"pet4",
                        name:"Leo",
                        img:"https://storage.needpix.com/rsynced_images/dog-2471271_1280.jpg",
                        color:"blue",
                        specialSkill:"Walking While Dead",
                        typeOfPet: "Cat"
                      },
];


const printToDom = (stringToPrint,divId) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML += stringToPrint;
};

 const petsBuilder = () => {
       let petString = " ";
       for(let i = 0;i<pets.length;i++){
       petString += `<div class="card" style="width: 18rem;" id="${pets[i].id}">`;
       petString += `<div id="name"<h5>${pets[i].name}</h5></div>`;
       petString += `<img src="${pets[i].img}" class="card-img-top" alt="picture"></<img>`;
       petString += `<div class="card-body">`;
       petString += `<p class="card-text">Special Skill: ${pets[i].specialSkill}</p></div>`;
       petString += `<h5 class="pet-type">${pets[i].typeOfPet}</h5>`;
       petString += `</div>`;
   }
     printToDom(petString,"pet-cards");
   }
   petsBuilder();

