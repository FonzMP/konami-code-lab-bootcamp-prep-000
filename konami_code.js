const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);
  for (let i = 0; i < code.length; i++)
  if (key === code[i]) {
    if(i === code.length) {
      alert("Hurray!");
      index = 0;
      return
    }
  } else {
    console.log(key + ' was incorrect');
    index = 0;
  }
}

const bodyVar = document.body;
bodyVar.addEventListener('keydown', init);
