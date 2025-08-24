// login button functionality
const logInBtn = document.getElementById("logInBtn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const mobileNumber = 1234567;
    const pinNumber = 1234;
    const mobileNumbervalue = parseInt(document.getElementById("mobile-number").value);
    const pinNumbervalue = parseInt(document.getElementById("pin-number").value);

    if (mobileNumber === mobileNumbervalue && pinNumber === pinNumbervalue) {
      window.location.href = "./pages/home.html"
    } else {
      alert("Invalid Cradentials")
    }

  })