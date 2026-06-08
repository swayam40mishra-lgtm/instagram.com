function togglePassword() {

    const passwordField = document.getElementById("password");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClosed = document.getElementById("eyeClosed");

    if (!passwordField) {
        console.error("Password field not found");
        return;
    }

    const isHidden = passwordField.type === "password";

    passwordField.type = isHidden ? "text" : "password";

    if (eyeOpen && eyeClosed) {
        eyeOpen.style.display = isHidden ? "block" : "none";
        eyeClosed.style.display = isHidden ? "none" : "block";
    }
}
