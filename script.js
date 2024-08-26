document.getElementById("encryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
});

document.getElementById("copyBtn").addEventListener("click", function() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});
