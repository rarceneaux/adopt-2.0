
// Print to Dom Functions
const printToDom = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
  };


  export{printToDom};