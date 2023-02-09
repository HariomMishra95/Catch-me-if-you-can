import "./styles.css";
var box = document.getElementById("target-div");
var maxwidth = window.innerWidth;
var maxheight = window.innerHeight;
box.addEventListener("mouseover", function () {
  var curr = box.getBoundingClientRect();
  console.log("mouse over fired");
  var pos = getPos(curr.height, curr.width);

  box.style.top = pos.y + "px";
  box.style.left = pos.x + "px";

  console.log("reched end of the event");
});

function getPos(currX, currY) {
  console.log("getpos fired");
  var maxX = Math.random() * maxwidth + 1 - currX;
  var maxY = Math.random() * maxheight + 1 - currY;

  if (maxX < 0) {
    maxX = 0;
  }
  if (maxY < 0) {
    maxY = 0;
  }
  return {
    x: maxX,
    y: maxY
  };
}
