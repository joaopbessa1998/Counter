window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.querySelector("#input");
    const counter = document.querySelector(".counter");
    const toggleButton = document.querySelector("#toggle");

    let mode = "characters";

    toggleButton.addEventListener("click", () => {
        if (mode === "characters") {
            mode = "words"
            toggleButton.textContent = "Character counter"
        } else {
            mode = "characters"
            toggleButton.textContent = "Word counter"
        }
        input.dispatchEvent(new Event("input"));
    })

    input.addEventListener("input", () => {
        let count = 0;
        if (mode === "characters") {
            count = input.value.length;
            counter.textContent = `${count} character(s).`;
        } else {
            const words = input.value.trim().split(/\s+/);
            count = input.value.trim() === "" ? 0 : words.length;
            counter.textContent = `${count} word(s).`
        }
    })
})