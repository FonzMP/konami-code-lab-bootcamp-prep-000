const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

const div = document.querySelector('#mocha');
div.style.color = "green";

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert('Yay, you did it!');
      index = 0;
    }
  } else {
    console.log("Nope");
    index = 0;
  }
}
