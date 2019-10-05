var todoList=document.getElementById("todoList");
function addElement()
{
  var newTask = document.getElementById('newInput').value;
  var li = document.createElement('li');
  li.className='list-group-item';
  var text = document.createTextNode(newTask);
  li.appendChild(text);
  var delButton = document.createElement('button');
  delButton.className='delButton';
  var trash = document.createTextNode('X');
  delButton.appendChild(trash);
  li.appendChild(delButton);
  todoList.appendChild(li);
}

document.getElementById('todoList').onclick = function(e){
    var i=0;
    if(e.target.classList.contains('delButton')){
        var li = e.target.parentElement;
        todoList.removeChild(li);
    }
    else{
      var list = document.querySelector('ul');
      list.addEventListener('click', function(ev) {
      ev.preventDefault();
      if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
     }
     }, false);
      }
  }
