const form = document.querySelector('.form form'),
continueBtn= form.querySelector('.button input'),
errorTxt = form.querySelector('.error-text');

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
}

continueBtn.onclick =()=>{
    // let's start Ajax
    let xhr = new XMLHttpRequest(); //Creating XML object
    xhr.open('POST','php/login.php',true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                if(data == 'success'){
                    location.href = 'users.php';
                }else{
                    errorTxt.textContent = data;
                    errorTxt.style.display ='block';
                }
            }
        }
    }
    // We have to send the form data trough ajax to php
    let formData = new FormData(form); //Creating new formData Object
    xhr.send(formData); //Sending the form data to php
}