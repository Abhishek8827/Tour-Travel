let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

// for book now form 
const form = document.getElementById('book_form');
const alert = document.querySelector(".alert");

const firebaseConfig = {

    apiKey: "AIzaSyCzK_l1XJSPEycrbfI24X3F23Mp8KCr_3Q",

    authDomain: "travel-wings-83309.firebaseapp.com",

    databaseURL: "https://travel-wings-83309-default-rtdb.firebaseio.com",

    projectId: "travel-wings-83309",

    storageBucket: "travel-wings-83309.firebasestorage.app",

    messagingSenderId: "643507942042",

    appId: "1:643507942042:web:d157c87853ddeab4ec6523",

    measurementId: "G-5CDXCL0JCG"

  };


  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const ref = database.ref("messages")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const destination = document.getElementById('destination').value;

    // console.log(name,email,phone);

    ref.push({
        email:email,
        name:name,
        phone:phone,
        destination:destination
    })
    alert.style.display="block"

    setTimeout(()=>{
alert.style.display="none"
    },2000)
    form.reset()
})