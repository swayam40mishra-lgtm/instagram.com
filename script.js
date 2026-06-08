function togglePassword() {

    const field = document.getElementById("password");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClosed = document.getElementById("eyeClosed");

    if (!field) {
        console.error("Password field not found");
        return;
    }

    if (field.type === "password") {

        field.type = "text";

        if (eyeOpen) eyeOpen.style.display = "block";
        if (eyeClosed) eyeClosed.style.display = "none";

    } else {

        field.type = "password";

        if (eyeOpen) eyeOpen.style.display = "none";
        if (eyeClosed) eyeClosed.style.display = "block";
    }
}
