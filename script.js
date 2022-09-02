function disable(x) {
  x.disabled = true;
  setTimeout(()=>{
    x.disabled = false;
    console.log('Button Activated')}, 5000)
}
const generateBtn = document.getElementById("generate-btn").addEventListener("click", function () {
  const generatedNumber = (Math.floor(Math.random() * 9000) + 999);
document.getElementById("generated-number").value = generatedNumber;
});

