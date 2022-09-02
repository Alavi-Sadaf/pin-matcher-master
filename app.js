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
    timeH.innerHTML = `
  ${(min < 10) ? '0' : ''}${min}:${(sec < 10) ? '0' : ''}${sec}
  `;
  }

  function endCount() {
    timeH.innerHTML = '00:00';
  }
}
const generateBtn = document.getElementById("generate-btn").addEventListener("click", function () {
  const generatedNumber = (Math.floor(Math.random() * 9000) + 999);
  document.getElementById("generated-number").value = generatedNumber;
});