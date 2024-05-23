const profile = document.getElementById("profile");
profile.addEventListener("click", () => {
    window.open("profile.html", "_blank");
});

const createProfile = document.getElementById("createProfile");
createProfile.addEventListener("submit", function(event) {

    event.preventDefault();

    const yesOption = document.getElementById("yesOption");
    const noOption = document.getElementById("noOption");

    (yesOption.checked) ? (document.getElementById("sendInformation").style.display = "block",
                           createProfile.style.display = "none") :
    (noOption.checked) ? (document.getElementById("profile").style.display = "block",
                          document.getElementById("profile").textContent = "👉🏽 Click here to see an exemplo 👈🏽")
    : alert("Select an option!");
});

const sendInformation = document.getElementById("sendInformation");
sendInformation.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const nickname = document.getElementById("nickname");
    const biografy = document.getElementById("biografy");

    (validName(name) && validNickname(nickname)) ?
    (document.getElementById("addAphoto").style.display = "block", createProfile.style.display = "none"): null;
});

function validName(HTMLElement) {
    const regex = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ\\s]+$');
    let isValid = false;
    (HTMLElement.value === "") ? alert("Name is required!") :
    (regex.test(HTMLElement.value) === false) ? alert("Name cannot contain numbers or special caracters!"): isValid = true;
    return isValid;
}

function validNickname(HTMLElement) {
    const regex = new RegExp('^[A-Za-z0-9@_.\\s]+$');
    const onlyNumbers = new RegExp('^[0-9@_.\\s]+$');
    let isValid = false;
    (HTMLElement.value === "") ? alert("Nickname is required!") :
    (onlyNumbers.test(HTMLElement.value) === true) ? alert("Nickname cannot contain only numbers! (or @_.)") :
    (regex.test(HTMLElement.value) === false) ? alert("Nickname cannot contain special caracters! (besides @_.)"): isValid = true;
    return isValid;
}