console.log('Adpotion Me');

 const pets = [ 
                 { id:'pet1', 
                 name:'Winston',
                 img:'https://media.defense.gov/2013/Sep/05/2000915544/780/780/0/130826-F-LX370-097.JPG',
                 color:'green',
                 specialSkill:'Jumping',
                 typeOfPet: 'dog'},

                 { id:'pet2',
                 name:'Kobe',
                 img:'https://live.staticflickr.com/5472/9386968830_91cfc48341_b.jpg',
                 color:'green',
                 specialSkill:'Sleeping',
                 typeOfPet: 'dog'},

                 { id:'pet3',
                 name:'Lil Bit',
                 img:'https://storage.needpix.com/rsynced_images/dog-2471271_1280.jpg',
                 color:'green',
                 specialSkill:'Eating',
                 typeOfPet: 'dog'},

                 { id:'pet4',
                 name:'Leo',
                 img:'https://storage.needpix.com/rsynced_images/dog-2471271_1280.jpg',
                 color:'blue',
                 specialSkill:'Walking While Dead',
                 typeOfPet: 'cat'},
                 ];


 const printToDom = (stringToPrint,divId) => {
   const selectedDiv = document.getElementById(divId);
   selectedDiv.innerHTML += stringToPrint;
 };


 const petBuilder = ()=> {
   petString = '';
   for(let i = 0;i<pets[i].length;i++){
    petString +=`<h3>${pets.name}</h3>`; 
   }
 }
 printToDom(petString,'pet-cards');
 petBuilder();




