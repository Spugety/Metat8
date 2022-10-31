//affirmation and journal entries
// const loginAttempts = 3; 
// const inputValidation = () => {
//     const username = document.getElementById("username").vaue;
//     const userPass = document.getElementById("userPass").value;
//     if (username == "Reset" && userPass == "apple")
// }
const signupButtonClick = document.getElementById('signupButton');
const submitLogin = document.getElementById("submitLogin");
const submitBtn = document.getElementById("submitLogin");


signupButtonClick.addEventListener('click', createAccount);
submitLogin.addEventListener('click', initMotivate);

function createAccount() {

}

function initMotivate() {
  const userid = document.getElementById("userid").value.trim();
  const passid = document.getElementById("passid").value.trim();

  console.log(userid);
  console.log(passid);
  
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
        if(response.ok) {
            window.location.replace("/dashboard");
        // If there's an error, log the error
        }
      })
      .catch(err => {
        console.log(err);
      });
}