

//llama los objectos seleccionados
let about = document.getElementById('about');
let resume = document.getElementById('resume');
let knowledge = document.getElementById('knowledge');
let blog = document.getElementById('blog');
let contact = document.getElementById('contact');
let linkAbout = document.getElementById('linkAbout');
let linkResume = document.getElementById('linkResume');
let linkKnowledge = document.getElementById('linkKnowledge');
let linkBlog = document.getElementById('linkBlog');
let linkContact = document.getElementById('linkContact');


function remove() {
    about.classList.remove('view');
    linkAbout.classList.remove('selected');
    resume.classList.remove('view');
    linkResume.classList.remove('selected');
    knowledge.classList.remove('view');
    linkKnowledge.classList.remove('selected');
    blog.classList.remove('view');
    linkBlog.classList.remove('selected');
    contact.classList.remove('view');
    linkContact.classList.remove('selected');
}

linkAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        linkAbout.classList.add('selected');
    }

});
linkResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        linkResume.classList.add('selected');
    }
})
linkKnowledge.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        knowledge.classList.add('view');
        linkKnowledge.classList.add('selected');
    }
})
linkBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        linkBlog.classList.add('selected');
    }
})
linkContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        linkContact.classList.add('selected');
    }

})

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });