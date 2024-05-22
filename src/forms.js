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
    : alert("Select a option!");
});
