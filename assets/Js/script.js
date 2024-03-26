// for menu bar icon start ==========================================================================================================================================
const menuIcon = document.querySelector("#menu-ico");
const navbar = document.querySelector(".navbar-items");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================================================for menu bar icon End====================================================================================================================================*/

/*===================================================Scroll section active link=========================================================================================================================================*/

const wrapper = document.querySelector(".wrapper");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".NavBar .navbar-items a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".NavBar .navbar-items a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*===================== Scroll sticky nav bar=====================================================================================================================================*/
  const header = document.querySelector(".NavBar");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*=============================================================Remove toggle icon navbar==========================================================================================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*=============================================================Remove toggle icon navbar=====================================================================================*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

/*===============================================================Home section animation start===============================================================================================*/

ScrollReveal().reveal(".content-section h2, #h2-heading", {
  origin: "top",
});

ScrollReveal().reveal(".content-section #btn , #h1-heading", {
  origin: "bottom",
});

ScrollReveal().reveal(".h2-right, .SM-right", {
  origin: "right",
});

ScrollReveal().reveal(".content-section h1, .content-section p", {
  origin: "left",
});

/*============================================================================Home section animation End===============================================================================================*/

/*=====================================================================About Section Animation Start======================================================================================================*/

ScrollReveal().reveal(".About-right h1", {
  origin: "top",
});

ScrollReveal().reveal(" .About-left, .Mail-Box, .Location-Box", {
  origin: "bottom",
});

ScrollReveal().reveal(".About-right h2", {
  origin: "right",
});

ScrollReveal().reveal(".About-right .p-left", {
  origin: "left",
});

/*===================================================================About Section Animation End=========================================================================================================================================*/

/*=====================================================================Education Section Animation Start================================================================================================================================*/

const srtop = ScrollReveal({
  distance: "60px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".Education .container-time-line ", { delay: 400, origin: "top" });

srtop.reveal(".Education .container-time-line .time-line-card", {
  interval: 900,
  origin: "top",
});

srtop.reveal(".Box-time-line #span-left", {
  delay: 900,
  origin: "right",
});

srtop.reveal(".Box-time-line #span-right", {
  delay: 900,
  origin: "left",
});

//==============================GitHub Stats=========================

srtop.reveal(".GitHub-Box .container .GitHub-Box-1, .About-right #btn", {
  delay: 300,
  origin: "left",
});

srtop.reveal(".GitHub-Box .container .GitHub-Box-2 a", {
  interval: 900,
  delay: 300,
  origin: "top",
});

//==============================LinkedIn Profile===============================
srtop.reveal(".LinkedIn-Box .container .LinkedIn-Box-1 .Profile-Box", {
  delay: 400,
  origin: "left",
});

srtop.reveal(".LinkedIn-Box .container .LinkedIn-Box-2", {
  delay: 400,
  origin: "top",
});

/*====================================================================Education Section Animation End======================================================================================================*/
/*=====================================================================Skill Section Animation Start====================================================================================================*/

srtop.reveal(".Skills .skill-container", { delay: 400, origin: "top" });

srtop.reveal(
  ".Skills .skill-container .skill1, .Skill-Box .container .skill1",
  {
    interval: 200,
    delay: 600,
    origin: "top",
  }
);

/*=====================================================================Skill Section Animation End=======================================================================================================*/

/*=====================================================================Project Section Animation Start=======================================================================================================*/

srtop.reveal(".Projects .project-content .card", {
  interval: 200,
  delay: 600,
  origin: "top",
});

srtop.reveal("#project .new-project-content .card", {
  interval: 200,
  delay: 600,
  origin: "left",
});

/*=====================================================================Project Section Animation End=======================================================================================================*/

/*=====================================================================Contact Section Animation Start=======================================================================================================*/

srtop.reveal(
  ".Contact .new-cr .new-cf .Input, .Contact .contact-left, .Contact .new-cl",
  {
    interval: 200,
    delay: 600,
    origin: "top",
  }
);

srtop.reveal(".Contact .contact-right #contactForm .input", {
  interval: 200,
  delay: 600,
  origin: "top",
});

srtop.reveal(
  ".Contact .contact-right #contactForm .btn, .Contact .new-cr .new-cf .new-btn",
  {
    delay: 2000,
    origin: "left",
  }
);

/*=====================================================================Contact Section Animation End=======================================================================================================*/

/*=====================================================================Ending Section Animation start=======================================================================================================*/

srtop.reveal(".Ending .ending-container .Name-info p", {
  delay: 300,
  origin: "left",
});

srtop.reveal(".Ending .ending-container .direct-links a", {
  interval: 300,
  delay: 600,
  origin: "top",
});

srtop.reveal(".Ending .ending-container .contact-info .contact-content p", {
  interval: 300,
  delay: 500,
  origin: "top",
});

srtop.reveal(".Ending .ending-container .contact-info .contact-social-info a", {
  interval: 200,
  delay: 600,
  origin: "top",
});

srtop.reveal(".Ending #line p", {
  delay: 100,
  origin: "left",
});

/*=====================================================================Ending Section Animation End=======================================================================================================*/ // For Dark and light theme icon start=======================================================

const DarkModeIcon = document.querySelector("#darkMode");

DarkModeIcon.onclick = () => {
  DarkModeIcon.classList.toggle("bxs-sun");
  document.body.classList.toggle("darkMode");
};

// For Dark and light theme icon End==========================================================================

// typing master start=========================================================================
const type = new Typed(".auto-typing-1", {
  strings: [
    "Software Developer",
    "Frontend Developer",
    "Junior Engineer",
    "Web-Developer",
    "Fresher",
  ],

  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

var typed = new Typed(".auto-typing-2", {
  strings: [
    "Software Developer",
    "Frontend Developer",
    "Junior Engineer",
    "Web-Developer",
    "Fresher",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

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
    }, 3000);
    // return false; // Added return statement
    return false; // Corrected return statement
  } else {
    return isValid;
  }
}

// notification alert

var popup = document.getElementById("popup");

function openPopup() {
  console.log("call open popup");
  popup.classList.add("openPopup");

  let LineDiv = document.createElement("div");
  LineDiv.classList.add("line");
  popup.appendChild(LineDiv);

  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
}

function closePopup() {
  console.log("call clsoe popup");
  popup.classList.remove("openPopup");
}

function FailedEmail() {
  popup.classList.add("openPopup");
  // let popupIMG = document.getElementById("popupIMG");
  // popupIMG.classList("imgSize");

  document.getElementById("popupIMG").src = "/Images/failedimg.png";

  document.getElementById("h2Msg").innerHTML = "Failed ❌";
  document.getElementById("paramsg").innerHTML =
    "Email failed to send! Please check your internet connection";

  document.getElementById("btnmsg").innerHTML = "Try again 😅";

  let LineDiv = document.createElement("div");
  LineDiv.classList.add("redline");
  popup.appendChild(LineDiv);

  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
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

      // rajyadav form emailjs
      // const serviceID = "service_6am7j1y";
      // const templateID = "template_4g5fjhk";

      // roaming form emailjs
      const serviceID = "service_5wo2wfc";
      const templateID = "template_bfxepvf";

      console.log("send form st");

      emailjs.sendForm(serviceID, templateID, this).then(
        function (response) {
          console.log("Email sent successfully:", response);
          // alert("Email sent successfully:", response);
          openPopup();
        },
        function (error) {
          console.log("Failed to send email:", error);
          // alert("Failed to send email:", error);
          FailedEmail();
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
