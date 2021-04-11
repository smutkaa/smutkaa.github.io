var labelType = new Array();
var slotType = new Array();

var btn_check = document.getElementById("check");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  if (!ev.target.classList.contains('slot')) 
  {
  	return;
  }
  var data = ev.dataTransfer.getData("text");
  var el = document.getElementById(data);
  ev.target.appendChild(el);

  labelType.push(el.dataset.type);
  slotType.push(ev.target.dataset.type);
}

btn_check.onclick = function(){ 
  for (var i = 0; i < labelType.length; i++) {
      var el = document.getElementById('slot-'+ slotType[i]);
    if (labelType[i] === slotType[i]) {
        el.classList.remove('default');
        el.classList.add('success');
      } else {
        el.classList.remove('default');
        el.classList.add('error');
      }
  }
};