import './style.css'
const btn = document.querySelector('.fa-bars');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('showMenu')
})

const section = document.querySelectorAll('.section');
const links = document.querySelectorAll('nav a');

// function activeLink(event){
//     for(let i = 0; i < section.length; i++){
//         for(let j = 0; j < links.length; j++){
//             links[j].className = links[j].className.replace('active', '');
//         }
//         event.currentTarget.className += 'active';
//     }
// }
links.forEach(link => {
    link.addEventListener('click', (event) => {
      for(let i = 0; i < section.length; i++){
        for(let j = 0; j < links.length; j++){
            links[j].className = links[j].className.replace('active', '');
        }
        event.currentTarget.className += 'active';
    }
        nav.classList.toggle('showMenu');
    })
})
