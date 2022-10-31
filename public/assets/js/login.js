//affirmation and journal entries
// const loginAttempts = 3; 
// const inputValidation = () => {
//     const username = document.getElementById("username").vaue;
//     const userPass = document.getElementById("userPass").value;
//     if (username == "Reset" && userPass == "apple")
// }


 function initModal(element){
  
    const modal = document.createElement('div')
    modal.classList.add('modal')
  const child = document.createElement('div')
    child.classList.add('child')
    child.innerHTML = element
   modal.appendChild(child)
    document.body.appendChild(modal)
  }