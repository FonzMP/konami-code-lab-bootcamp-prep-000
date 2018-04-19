const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = e.which;
  console.log(e.which);
  console.log(e.location);
  console.log(e.detail);
  if (key === parseInt(code[index])) {
    index++;
    if (index === code.length) {
      alert("Hurray, you did it!");
      index = 0;
      return
    }
  } else {
    alert('Code has been reset');
    index = 0;
  }
}

const bodyVar = document.body;
bodyVar.addEventListener('keydown', init);
