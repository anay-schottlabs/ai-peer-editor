class TextParser
{
    static textBox = document.querySelector("#text-box");
    static parseTextToArray = () => TextParser.textBox.value.split(" ");
}

var parsedText = document.querySelector("#parsed-text");
TextParser.textBox.addEventListener("input", () => parsedText.innerHTML = TextParser.parseTextToArray())
