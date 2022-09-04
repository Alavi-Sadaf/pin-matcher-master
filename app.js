var btn = document.querySelectorAll(".button");
var inp = document.getElementById("dialed-numbers");
var rndm = document.getElementById("generated-numbers");

function printOutput(num) {
  if (num == "") {
    document.getElementById("dialed-numbers").innerText = num;
  } else {
    document.getElementById("dialed-numbers").innerText = getFormattedNumber(num)
  }
}

function disable(x) {
  x.disabled = true;
  setTimeout(() => {
    x.disabled = false;
    console.log('Button Activated')
  }, 5000)
  let timeSecond = 5;
  const timeH = document.getElementById('timer');

  displayTime(5);

  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);

  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `Wait ${(min < 10) ? '0' : ''}${min}:${(sec < 10) ? '0' : ''}${sec}`;
  }

  function endCount() {
    timeH.innerText = 'Generate Pin';
  }
}
const generateBtn = document.getElementById("generate-btn").addEventListener("click", function () {
  const generatedNumber = (Math.floor(Math.random() * 9000) + 999);
  document.getElementById("generated-numbers").value = generatedNumber;
});

// code for number buttons
btn.forEach(val => {
  val.addEventListener("click", () => {
    inp.value += val.innerText;
  })
})

// code for clear button
var clearBtn = document.getElementById("clear").addEventListener("click", function () {
  inp.value = inp.innerText = "";
});

// code for backspace button
var backspace = document.getElementById("backspace").addEventListener("click", function () {
  inp.value = inp.value.slice(0, -1);
  console.log("clicked");
});

// submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    const displayPinField = document.getElementById('generated-numbers');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('dialed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('matched');
    const pinFailureMessage = document.getElementById('unmatched');

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        tryLeft("tryleft")
    }
})

// Disable button (Optional)
function disableBtn(id) {
  let button = document.getElementById(id);
  button.style.cursor = "not-allowed";
  button.setAttribute('disabled', 'true');
  button.title = "Please Reload Page";
}

// Try Left 
function tryLeft(id) {
  var tryAgain = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML -= 1;
  if (tryAgain == "1") {
      disableBtn('submit-btn');
  }
}