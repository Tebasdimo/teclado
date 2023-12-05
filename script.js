const keyboard = document.getElementById('keyboard');
const textInput = document.getElementById('textInput');

// Define your keyboard keys
const keys = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

// Create and append keys to the keyboard
keys.forEach(key => {
  const keyElement = document.createElement('div');
  keyElement.classList.add('key');
  keyElement.textContent = key;
  keyElement.addEventListener('click', () => {
    textInput.value += key;
  });
  keyboard.appendChild(keyElement);
});
