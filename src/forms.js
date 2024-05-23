/**
 * Shows the profile (if the form wasn't answered the default)
 */
const profile = document.getElementById("profile");
profile.addEventListener("click", () => {
    window.open("profile.html", "_blank");
});

/**
 * Form who asks if the user want to create a profile
 */
const createProfile = document.getElementById("createProfile");
createProfile.addEventListener("submit", function(event) {

    event.preventDefault();

    const yesOption = document.getElementById("yesOption");
    const noOption = document.getElementById("noOption");

    (yesOption.checked) ? (document.getElementById("sendInformation").style.display = "block",
                           createProfile.style.display = "none") :
    (noOption.checked) ? (document.getElementById("profile").style.display = "block",
                          document.getElementById("profile").textContent = "👉🏽 Click here to see an example 👈🏽")
    : alert("Select an option!");
});

/**
 * Send the information (name, nickname and biografy) to create a new profile
 */
const sendInformation = document.getElementById("sendInformation");
sendInformation.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const nickname = document.getElementById("nickname");
    const biografy = document.getElementById("biografy");

    (validName(name) && validNickname(nickname)) ? (document.getElementById("addAphoto").style.display = "block",
                                                    document.getElementById("profile").style.display = "block", 
                                                    document.getElementById("profile").textContent = "👉🏽 Click here to see a preview 👈🏽"): null;
});

/**
 * Verified if the attribute name isn't empty, composed by numbers or special caracters.
 * @param name 
 * @returns if the name is valid or not
 */
function validName(HTMLElement) {
    const regex = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ\\s]+$');
    let isValid = false;
    (HTMLElement.value === "") ? alert("Name is required!") :
    (regex.test(HTMLElement.value) === false) ? alert("Name cannot contain numbers or special caracters!"): isValid = true;
    return isValid;
};

/**
 * Verified if the attribute nickname isn't empty, composed only by numbers or special caracters.
 * @param nickname 
 * @returns if the nickname is valid or not
 */
function validNickname(HTMLElement) {
    const regex = new RegExp('^[A-Za-z0-9@_.\\s]+$');
    const onlyNumbers = new RegExp('^[0-9@_.\\s]+$');
    let isValid = false;
    (HTMLElement.value === "") ? alert("Nickname is required!") :
    (onlyNumbers.test(HTMLElement.value) === true) ? alert("Nickname cannot contain only numbers! (or @_.)") :
    (regex.test(HTMLElement.value) === false) ? alert("Nickname cannot contain special caracters! (besides @_.)"): isValid = true;
    return isValid;
}

/**
 * Form who asks if the user want to add a photo to profile
 */
const addAphoto = document.getElementById("addAphoto");
addAphoto.addEventListener("submit", function(event) {

    event.preventDefault();
    
    const yesOption = document.getElementById("yes");
    const noOption = document.getElementById("no");

    (yesOption.checked) ? (document.getElementById("putTheImage").style.display = "block") :
    (noOption.checked) ? null
    : alert("Select an option!");
});

const putTheImage = document.getElementById("putTheImage");
putTheImage.addEventListener("submit", function(event) {

    event.preventDefault();

    const linkImage = document.getElementById("image");

    (verifiedLikability(linkImage)) ? document.getElementById("congratulations").style.display = "block": null;
});

/**
 * Verified if the link to the picture is valid.
 * @param link 
 * @returns if the link is valid or not
 */
function verifiedLikability(link) {
    let isValid = false;
    (link.value === "") ? alert("Link is required!") : isValid = true;
    return isValid;
}