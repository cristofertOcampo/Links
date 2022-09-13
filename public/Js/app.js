console.log('Hola estoy aqui soy frontend')

document.addEventListener("click", (e) => {
    if (e.target.dataset.short) {
        const url = `http://localhost:8080/${e.target.dataset.short}`;

        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    }
});