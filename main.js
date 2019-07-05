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
                        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
                        color:"blue",
                        specialSkill:"Walking While Dead",
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
                        img:"https://vignette.wikia.nocookie.net/muppet/images/9/95/Dinosaurs-EarlSinclair.jpg/revision/latest/scale-to-width-down/280?cb=20141129001953",
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

