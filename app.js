
const ul=document.createElement('ul');
ul.style.listStyleType="none";
ul.style.paddingTop="0px";
const ul2=document.createElement('ul');
ul2.style.listStyleType="none";
ul2.style.paddingTop="0px";
document.querySelector('#queue').append(ul2);
document.querySelector('#stack').append(ul);

document.querySelector('#btn').addEventListener('click',function(e){
e.preventDefault();

var s=document.createElement('h1');
s.style.color="red";
s.style.marginTop="0px";
var s2=document.createElement('h1');
s2.style.color="red";
s2.style.marginTop="0px";

var li=document.createElement('li');
var li2=document.createElement('li');
var t=document.querySelector('#txt');
if(t.value===''){alert("invalid input");}
else{
s.innerText=t.value;
s.style.border="thick solid black";
s2.innerText=t.value;
s2.style.border="thick solid black";

li.append(s);
li2.append(s2);
ul.append(li);
ul2.append(li2);
}
t.value='';
}
)

document.querySelector('#pop').addEventListener('click',function(e){
    e.preventDefault();
    ul.lastChild.remove();
   ul2.firstChild.remove(); })


