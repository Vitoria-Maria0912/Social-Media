/**
 * Creates all the necessaries constants 
 */
const profile = document.getElementById("profile");
const btnShowProfile = document.getElementById("showProfile");
const btnHideProfile = document.getElementById("hideProfile");
const btnCreateProfile = document.getElementById("createProfile");
const sendInformation = document.getElementById("sendInformation");
const addAphoto = document.getElementById("addAphoto");
const putTheImage = document.getElementById("putTheImage");
const congratulations = document.getElementById("congratulations");

const follow = document.getElementById("follow");
const unfollow = document.getElementById("unfollow");

/**
 * Shows the profile (if the form wasn't answered yet, the default)
 */
btnShowProfile.addEventListener("click", () => {
    btnShowProfile.style.display = "none";
    btnHideProfile.style.display = "block";
    profile.style.display = "block";
});

/**
 * Hides the profile (if the form wasn't answered yet, the default)
 */
btnHideProfile.addEventListener("click", () => {
    btnHideProfile.style.display = "none";
    btnShowProfile.style.display = "block";
    profile.style.display = "none";
});

function show_hideProfile(){
    (profile.style.display === "block") ? btnHideProfile.style.display = "block" : btnShowProfile.style.display = "block"
}

/**
 * Form who asks if the user want to create a profile
 */
btnCreateProfile.addEventListener("submit", function(event) {

    event.preventDefault();

    const yesOption = document.getElementById("yesOption");
    const noOption = document.getElementById("noOption");

    (yesOption.checked) ? (sendInformation.style.display = "block", show_hideProfile(),
                           btnCreateProfile.style.display = "none") :
    (noOption.checked) ? (btnShowProfile.style.display = "block")
    : alert("Select an option!");
});

/**
 * Send the information (name, nickname and biografy) to create a new profile
 */
sendInformation.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const nickname = document.getElementById("nickname");
    const biografy = document.getElementById("biografy");

    let changedProfile = {
        name: name.value,
        nickname: "@" + nickname.value,
        biografy: biografy.value
    };

    (validName(name) && validNickname(nickname)) ? (sendInformation.style.display = "none", 
                                                    addAphoto.style.display = "block", 
                                                    btnShowProfile.textContent = "👉🏽 Click here to see how it's turning out 👈🏽",
                                                    show_hideProfile(),
                                                    setInformations(changedProfile)
                                                ): null;
});

/**
 * Updates the profile informations
 * @param Profile with name, nickname and biografy 
 */
function setInformations(Profile){
    document.getElementById("profileName").textContent = Profile.name;
    document.getElementById("profileNickname").textContent = Profile.nickname;
    document.getElementById("profileBiografy").textContent = Profile.biografy;
}

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
addAphoto.addEventListener("submit", function(event) {

    event.preventDefault();
    
    const yesOption = document.getElementById("yes");
    const noOption = document.getElementById("no");

    (yesOption.checked) ? (addAphoto.style.display = "none", putTheImage.style.display = "block") :
    (noOption.checked) ? (addAphoto.style.display = "none", show_hideProfile(),
                          btnShowProfile.textContent = "👉🏽 Click here to see the result 👈🏽",
                          congratulations.style.display = "block") :
    alert("Select an option!");
});

/**
 * Add a profile photo 
 */
putTheImage.addEventListener("submit", function(event) {

    event.preventDefault();

    const linkImage = document.getElementById("image");

    (verifiedLikability(linkImage)) ? (putTheImage.style.display = "none", congratulations.style.display = "block",
                                       sendInformation.style.display = "none", show_hideProfile(),
                                       btnShowProfile.textContent = "👉🏽 Click here to see the result 👈🏽",
                                       document.getElementById("profilePicture").src = linkImage.value)
                                       : null;
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

/**
 * Increments following one by ony
 */
follow.addEventListener("click", () => {
    let following = Number(document.getElementById("following").textContent);
    document.getElementById("following").textContent = following + 1;
});

/**
 * Decrements following one by ony
 */
unfollow.addEventListener("click", () => {
    let unfollowing = Number(document.getElementById("following").textContent);
    document.getElementById("following").textContent = unfollowing - 1;
});