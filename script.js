document.documentElement
console.log(document.documentElement);


let mycontent = document.querySelector('#content')
let text = document.querySelector('#h2');


const element2 = document.createElement('div');
mycontent.appendChild(element2);
element2.textContent = 'текст внутри контейнера'





const btn = document.createElement('button');
mycontent.appendChild(btn);
btn.textContent = 'Применить'
mycontent.addEventListener('clik', () => {
    console.log(k)

})
