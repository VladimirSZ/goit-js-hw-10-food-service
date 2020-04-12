import './styles.css';
import items from './menu.json';
import templateItem from './template-item.hbs';
// console.log(templateItem);

const itemsAll = items.map(item => {
    return templateItem(item);
}).join("");
    // console.log(itemsAll);
    const list = document.querySelector(".js-menu");
    list.insertAdjacentHTML("beforeend", itemsAll);
    const input = document.querySelector('.js-switch-input');
    input.addEventListener('change', inputFn);
    const body = document.body;
    
    function inputFn(e){
        console.log(e.target.checked);
        
        if(e.target.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            // localStorage.setItem('theme', 'dark-theme')
            localStorage.setItem('theme', JSON.stringify('dark-theme'))
        }
        
        else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            // localStorage.setItem('theme', 'light-theme')
            localStorage.setItem('theme', JSON.stringify('light-theme'))
        }
    };
    //  const newTheme = localStorage.getItem("theme");
     const newTheme = JSON.parse(localStorage.getItem("theme"));
    //  console.log(newTheme); 
    if (newTheme === "dark-theme") {
        body.classList.add('dark-theme');
        input.checked = true;
    };








