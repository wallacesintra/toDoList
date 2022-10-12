//remove button
const li = document.getElementsByTagName('li');
var i;

for(i=0;i < li.length;i++){
    const ii = document.createElement('i');
    const iNode = document.createTextNode('X');
    ii.classList.add('remove');
    ii.appendChild(iNode);
    li[i].appendChild(ii);
}

const remove = document.getElementsByClassName('remove');
var i;
for (i=0;i<remove.length;i++){
    remove[i].onclick = function() {
        var parent = this.parentElement;
        parent.style.display = 'none';
    }
}

//clear button 
var x;
for(x=0;x < li.length;x++){
    const i = document.createElement('i');
    const iiNode = document.createTextNode('\u2713');
    i.classList.add('cancel');
    i.appendChild(iiNode);
    li[x].appendChild(i);
}
const cancel = document.getElementsByClassName('cancel');
var x;
for (x=0;x<cancel.length;x++){
    cancel[i].onclick = function() {
        var parent = this.parentElement;
        parent.style.textDecoration = 'line-through';
    }
}

//add to list
function addToList(){
    const list = document.createElement('li');
    const inputValue = document.getElementById('Input').value;
    const node = document.createTextNode(inputValue);
    list.appendChild(node);
    if(inputValue === ''){
        alert('no input');
    }else{
        list.classList.add('listStyle');
        const unOrder = document.querySelector('ul');
        unOrder.appendChild(list);
    }
    document.getElementById('Input').value = '';

    const ii = document.createElement('i');
    const iNode = document.createTextNode('X');
    ii.classList.add('remove');
    ii.appendChild(iNode);;
    list.appendChild(ii);

    for (let i=0;i<remove.length;i++){
        remove[i].onclick = function() {
            var parent = this.parentElement;
            parent.style.display = 'none';
        }
    }
    const i = document.createElement('i');
    const iiNode = document.createTextNode('\u2713');
    i.classList.add('cancel');
    i.appendChild(iiNode);
    list.appendChild(i);
     
    for (x=0;x<cancel.length;x++){
        cancel[x].onclick = function() {
            var parent = this.parentElement;
            parent.style.textDecoration = 'line-through';
        }
    }

}
const add = document.getElementById('add');
add.addEventListener('click',addToList);
