const signupButtonClick = document.getElementById('signupButton');
const submitLogin = document.getElementById("loginForm");
const submitBtn = document.getElementById("submitLogin");


signupButtonClick.addEventListener('submit', createAccount);
submitLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  initMotivate();
  });

function createAccount() {

}

function initMotivate() {
  console.log("TACOCAT")
  const userid = document.getElementById("userid").value.trim();
  const passid = document.getElementById("passid").value.trim();

  fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: userid,
      password: passid,
    }),
    headers: {
      "content-type": "application/json",
    }
  })
    .then((response) => {
      if (response.ok) {
        window.location.replace("/dashboard");
        // If there's an error, log the error
      }
    })
    .catch(err => {
      console.log(err);
    });
}

// const modal = document.getElementById("loginModal");
// const loginClick = document.getElementById("login");
// const loginForm= document.getElementById("loginForm");
// loginForm.addEventListener('submit',(event) =>{
//   event.preventDefault();
// } )
// loginClick.addEventListener('click', initModal);
// window.addEventListener('click', cancelModal);

// function initModal() {
//   modal.style.display = 'block';
// }

// function cancelModal() {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// }