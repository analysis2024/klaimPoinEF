const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const messages = [
    "menganalisis hp.....",
    "menghapus semua data di device hp anda...",
    "Mereset semua data anda...",
    "pemilik device Ab******@gmail.com...",
    "Pasword : ********...",
    "No HP.+62-877-5029-4711....",
    "instagram : abu**za***1000....",
    "Menghapus Semua Akun Dan Aplikasi di device anda....",
    "System succes",
    "Operation complete. Have a nice day :)"
];

let messageIndex = 0;

function typeText(text, callback) {
    let i = 0;
    const interval = setInterval(() => {
        inputElement.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(callback, 500);
        }
    }, 50);
}

function printMessage(message) {
    const line = document.createElement('div');
    line.textContent = `> ${message}`;
    outputElement.appendChild(line);
    outputElement.scrollTop = outputElement.scrollHeight;
}

function hackerEffect() {
    if (messageIndex < messages.length) {
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 1500);
    } else {
        typeText("Goodbye...", () => {});
    }
}

document.addEventListener('DOMContentLoaded', () => {
    hackerEffect();
});