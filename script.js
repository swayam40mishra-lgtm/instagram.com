function togglePlaceOfBirth() {

    const field = document.getElementById("placeOfBirth");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClosed = document.getElementById("eyeClosed");

    if (field.type === "password") {

        field.type = "text";

        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";

    } else {

        field.type = "password";

        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
    }
}
