




const sortedPets = () => {
  const catsBtns = document.getElementById('cats');
  const dogsBtns = document.getElementById('dogs');
  const dinosBtns = document.getElementById('dinos');
  catsBtns.addEventListener('click',sortPets);
  dogsBtns.addEventListener('click',sortPets);
  dinosBtns.addEventListener('click',sortPets);
  };
sortedPets();



