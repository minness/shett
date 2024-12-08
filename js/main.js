var count = document.getElementById("buttonCountNumber");
var char = 0
var text = `счет: ${char}`
count.innerHTML = text

document.getElementById("buttonCountPlus").onclick = function() {
  char++
  console.log(char)
  count.innerHTML = `счет: ${char}`
}



