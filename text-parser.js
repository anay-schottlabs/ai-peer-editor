textBox = document.querySelector("#text-box");
parsedText = document.querySelector("#parsed-text");

textBox.addEventListener("input", () => parsedText.innerHTML = textBox.value.split(" "));
