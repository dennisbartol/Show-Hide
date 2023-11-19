const buttonEye = document.querySelector(".js-button-eye-dark");
const input = document.querySelector(".js-input-dark");
buttonEye.addEventListener("click", function () {
    const visible = input.dataset.visible == "true";
    input.dataset.visible = visible ? "false" : "true";
    input.setAttribute("type", visible ? "password" : "text");
});
const buttonEyeLight = document.querySelector(".js-button-eye-light");
const inputLight = document.querySelector(".js-input-light");
buttonEyeLight.addEventListener("click", function () {
    const visible = inputLight.dataset.visible == "true";
    inputLight.dataset.visible = visible ? "false" : "true";
    inputLight.setAttribute("type", visible ? "password" : "text");
});