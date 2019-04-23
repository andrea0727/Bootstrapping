//llama los objectos seleccionados
let about = document.getElementById('about');
let resume = document.getElementById('resume');
let works = document.getElementById('works');
let blog = document.getElementById('blog');
let contact = document.getElementById('contact');
let linkAbout = document.getElementById('linkAbout');
let linkResume = document.getElementById('linkResume');
let linkWorks = document.getElementById('linWorks');
let linkBlog = document.getElementById('linkBlog');
let linkContact = document.getElementById('linkContact');
function eliminar(){
    about.classList.remove('mostrarcaja');
    resume.classList.remove('mostrarcaja');
    works.classList.remove('mostrarcaja');
    blog.classList.remove('mostrarcaja');
    contact.classList.remove('mostrarcaja');
}
linkAbout.addEventListener('click',function(){
    eliminar();
    about.classList.add('mostrarcaja');
    
})
linkResume.addEventListener('click',function(){
    eliminar();
    resume.classList.add('mostrarcaja');
    
})
linkWorks.addEventListener('click',function(){
    eliminar();
    works.classList.add('mostrarcaja');
    
})
linkBlog.addEventListener('click',function(){
    eliminar();
    blog.classList.add('mostrarcaja');
    
})
linkContact.addEventListener('click',function(){
    eliminar();
    contact.classList.add('mostrarcaja');
})
    fetch('https://randomuser.me/api/').then ((val) => {
return val.json();
    }).then ((val) =>{
        let name = document.getElementById('name');
        let email = document.getElementById('profesion');
        let userImage = document.getElementById('userImage');
        let nameVal=val.results[0].name;
        let emailVal=val.results[0].email;
        let userImageVal=val.results[0].picture;
        name.innerHTML=`${nameVal.tittle} ${nameVal.firts} ${nameVal.last}`;
        email.innerHTML=`${emailVal}`;
        userImage.src=`${userImageVal.large}`;
        console.log(val);
    })

    fetch ("pepitout1",{
method:"POST",
mode: "cors",
cache: "no-cache",
credentials: "same-origin",
headers: {
   "Content-Type": "aplication/json", 
},
redirect:"follow",
referrer: "no-referrer",
body: JSON.stringify(data),
    }) .then((val)=>{
    }).catch((val)=>{
    })
    