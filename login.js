let match = "error";

function loginSubmit() {
    const errorDiv = document.getElementById("errorDiv");

    let inputName = document.getElementById("loginName").value;
    let inputPass = document.getElementById("loginPass").value;
    // console.log(inputName);
    // console.log(inputPass)
    
    // tryLogin(inputName, inputPass);

    $.getJSON("../login.json", function(loginData) {
        for (let i = 0; i < loginData.length; i++) {
            if (loginData[i]["Username"] == inputName && loginData[i]["Password"] == inputPass) {
                //console.log("returning match");
                match = "matched";
            } 
        }    
        if (match == "matched") {
            //console.log("login successul!");
            errorDiv.innerHTML = ""
    
            let loginErrora = document.createElement("a");
            loginErrora.setAttribute("style", "color: green");
                let loginErrorText = document.createTextNode("Login Successful!");
                loginErrora.appendChild(loginErrorText);
            errorDiv.appendChild(loginErrora);
    
            window.location.href = "../home.html";
        } else {
            //console.log("FAILED");
            errorDiv.innerHTML = ""
    
            let loginErrora = document.createElement("a");
            loginErrora.setAttribute("style", "color: orangered");
                let loginErrorText = document.createTextNode("Your Username or Password is incorrect. Please Try Again.");
                loginErrora.appendChild(loginErrorText);
            errorDiv.appendChild(loginErrora);
        }    
    }); // end of getJSON
    //console.log("final: " + match);
}