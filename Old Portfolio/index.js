// function goToExternalLink() {
//   window.location.href =
//     "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
// }

// Function for Validate Name
function validateName() {
  var name = document.getElementById("full_Name").value;
  var nameError = document.getElementById("fullName-Error");

  if (name.length === 0) {
    nameError.innerHTML = "Full Name can't be blank";
    document.getElementById("full_Name").style.border = "2px solid red";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name with space";
    document.getElementById("full_Name").style.border = "2px solid red";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  document.getElementById("full_Name").style.border = ""; // Remove Border
  return true;
}

// Function for Validate Phone No.
function validatePhoneNo() {
  var PhoneNo = document.getElementById("phoneNo").value;
  var phoneNoError = document.getElementById("phoneNo-Error");

  if (PhoneNo.length === 0) {
    phoneNoError.innerHTML = "Mobile No. can't blank";
    document.getElementById("phoneNo").style.border = "2px solid red";
    return false;
  }

  if (PhoneNo.length !== 10) {
    phoneNoError.innerHTML = "Mobile No. only 10 digits";
    document.getElementById("phoneNo").style.border = "2px solid red";
    return false;
  }

  if (!PhoneNo.match(/^[0-9]{10}$/)) {
    phoneNoError.innerHTML = "Mobile No. can't blank";
    document.getElementById("phoneNo").style.border = "2px solid red";
    return false;
  }

  phoneNoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  document.getElementById("phoneNo").style.border = ""; // Remove Border
  return true;
}

// Function for Validate Email id
function validateEmail() {
  var Emailid = document.getElementById("email").value;
  var emailError = document.getElementById("email-Error");

  if (Emailid.length === 0) {
    emailError.innerHTML = "Email Address can't blank";
    document.getElementById("email").style.border = "2px solid red";
    return false;
  }

  if (!Emailid.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invaild";
    document.getElementById("email").style.border = "2px solid red";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  document.getElementById("email").style.border = ""; // Remove Border
  return true;
}

function validateSubject() {
  var Subject = document.getElementById("subject").value;
  var subjectError = document.getElementById("subject-Error");

  if (Subject.length === 0) {
    subjectError.innerHTML = "Email Subject can't blank";
    document.getElementById("subject").style.border = "2px solid red";
    return false;
  }

  if (!Subject.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    subjectError.innerHTML = "Write a subject with space";
    document.getElementById("subject").style.border = "2px solid red";
    return false;
  }

  subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  document.getElementById("subject").style.border = ""; // Remove Border
  return true;
}

// Function for Validate Message
function validateMessage() {
  var Message = document.getElementById("message").value;
  var messageError = document.getElementById("message-Error");
  var required = 30;
  var left = required - Message.length;

  if (left > 0) {
    messageError.innerHTML = left + " More characters required";
    document.getElementById("message").style.border = "2px solid red";
    return false;
  }

  // if (Message.length === 0) {
  //   messageError.innerHTML = "Message can't blank";
  //   document.getElementById("message").style.border = "2px solid red";
  //   return false;
  // }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  document.getElementById("message").style.border = ""; // Remove Border
  return true;
}

console.log("click st validate");
function validateForm() {
  var submitError = document.getElementById("submit-Error");
  var isValid = true;

  console.log("check all validate st");
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhoneNo() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 2000);
    // return false; // Added return statement
    return false; // Corrected return statement
  } else {
    return isValid;
  }
}

console.log("click submit");
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      console.log("fetch variable st");

      // let Params = {
      //   fullName: document.getElementById("full_Name").value,
      //   email: document.getElementById("email").value,
      //   phone: document.getElementById("phoneNo").value,
      //   message: document.getElementById("message").value,
      //   subject: document.getElementById("subject").value,
      // };

      // var Valid = true;

      console.log("fetch variable end");

      const serviceID = "service_6am7j1y";
      const templateID = "template_4g5fjhk";

      console.log("send form st");

      emailjs.sendForm(serviceID, templateID, this).then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully:", response);
        },
        function (error) {
          console.log("Failed to send email:", error);
          alert("Failed to send email:", error);
        }
      );

      console.log("send form end");
      console.log("check all validate end");
      console.log("click end");
      // return Valid;
    }
  });

//  (response) => {
//         // console.log("Email sent successfully:", response);
//         if (response === "OK") {
//           Swal.fire({
//             title: "Good job!",
//             text: "You clicked the button!",
//             icon: "success",
//           });
//         }
//         alert("Email sent successfully:", response);
//       },
//       (error) => {
//         console.log("Failed to send email:", error);
//         alert("Failed to send email:", error);
//       }
//     );
