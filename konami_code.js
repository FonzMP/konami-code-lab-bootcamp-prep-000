const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

document.body.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);
  return key
})

function init() {
  // Write your JavaScript code inside the init() function

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");
    }
  } else {
    index = 0;
  }
}
