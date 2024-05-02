document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('click', () => {
        const addTextInput = document.getElementById('addText').value;
        const bgColorInput = document.getElementById('bgColor').value;

        const outputDiv = document.getElementById('output');
        const newSentence = document.createElement('p');
        newSentence.textContent = addTextInput;
        newSentence.style.backgroundColor = bgColorInput;

        outputDiv.appendChild(newSentence);
    });
});
