const signupSectionTitle = document.getElementById("section-title-sign-up")
const loginSectionTitle = document.getElementById("section-title-log-in")
const signupButton = document.getElementById("sign-up-btn")
const loginButton = document.getElementById("log-in-btn")

signupSectionTitle.addEventListener("click", () => {
        const computedStyle = window.getComputedStyle(signupSectionTitle);
        if (computedStyle.backgroundColor === "rgb(211, 211, 211)") {
            signupSectionTitle.style.backgroundColor = "white";
            loginSectionTitle.style.backgroundColor = "lightgrey";
            
        }
    });

loginSectionTitle.addEventListener("click", () => {
        const computedStyle = window.getComputedStyle(loginSectionTitle);
        if (computedStyle.backgroundColor === "rgb(211, 211, 211)") {
            loginSectionTitle.style.backgroundColor = "white";
            signupSectionTitle.style.backgroundColor = "lightgrey";
        }
    });

