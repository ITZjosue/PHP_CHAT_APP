const searchBar = document.querySelector('.users .search input'),
searchBtn = document.querySelector('.users .search button'),
userList = document.querySelector('.users .users-list');

searchBtn.onclick = ()=>{
    searchBar.classList.toggle('show');
    searchBar.focus();
    searchBtn.classList.toggle('active');
}

searchBar.onkeyup = ()=>{

    let searchTerm = searchBar.value;

    if(searchTerm !== ''){
        searchBar.classList.add('filtrar');
    }else{
        searchBar.classList.remove('filtrar');
    }
    

    let xhr = new XMLHttpRequest(); //Creating XML object
    xhr.open('POST','php/search.php',true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                userList.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
}

setInterval(()=>{
    let xhr = new XMLHttpRequest(); //Creating XML object
    xhr.open('GET','php/users.php',true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                if(!searchBar.classList.contains('filtrar')){
                    userList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
},500);