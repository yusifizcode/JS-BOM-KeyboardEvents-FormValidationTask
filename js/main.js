var nameInput = document.getElementById('nameInput');
var surnameInput = document.getElementById('surnameInput');
var ageInput = document.getElementById('ageInput');
var groupInput = document.getElementById('groupInput');


function checkValue(val,func){
    return func(val);
}

var isValid = true;

nameInput.addEventListener('input',function(){

    if(!checkValue(nameInput.value,x=>x.length>5)){
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'Name must be greated than 5 character';
        isValid = false;
    }
    else{
        nameInput.nextElementSibling.classList.add('d-none');
        isValid = true;
    }
    // console.log(this.value)
})


surnameInput.addEventListener('input',function(){

    if(!checkValue(surnameInput.value,x=>x.length>5)){
        surnameInput.nextElementSibling.classList.remove('d-none');
        surnameInput.nextElementSibling.innerText = 'Surname must be greated than 5 character';
        isValid = false;
    }
    else{
        surnameInput.nextElementSibling.classList.add('d-none');
        isValid = true;
    }
    // console.log(this.value)
})



ageInput.addEventListener('input',function(){

    if(!checkValue(ageInput.value,x=>x>=18)){
        ageInput.nextElementSibling.classList.remove('d-none');
        ageInput.nextElementSibling.innerText = 'Age must be greater or equal to 18!';
        isValid = false;
    }
    else{
        ageInput.nextElementSibling.classList.add('d-none');
        isValid = true;
    }
    // console.log(this.value)
})


groupInput.addEventListener('input',function(){

    if(!checkValue(groupInput.value,x=>x.length>3)){
        groupInput.nextElementSibling.classList.remove('d-none');
        groupInput.nextElementSibling.innerText = 'Group name must be greated than 3 character';
        isValid = false;
    }
    else{
        groupInput.nextElementSibling.classList.add('d-none');
        isValid = true;
    }
    // console.log(this.value)
})


document.getElementById('contact').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log('submitted')
    if(isValid){
        document.querySelector('.notification').classList.remove('d-none');
        document.querySelector('.notification').innerText = 'Your form submited successfully!';
    }
    else{
        document.querySelector('.notification').classList.add('d-none');
    }})