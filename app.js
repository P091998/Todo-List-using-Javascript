const btn=document.querySelector('#btn');
const input=document.querySelector('#inp');
const list=document.querySelector('#list');

btn.addEventListener('click',()=>{
    const todoText=inp.value;

    if(todoText==="")
    {
        alert('Please enter something to add to your todo list!!!');
        return;
    }

    const li=document.createElement('li');
    li.innerText=todoText;

    li.style.textAlign='left';

    //adding remove todo event
    li.addEventListener('click',()=>{
        li.remove();
    });

    list.append(li);

    input.value='';
});