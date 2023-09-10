document.addEventListener('DOMContentLoaded', () => {

    //let counter = 0;
    if(!localStorage.getItem('counter')){
        localStorage.setItem('counter', 0)
    }

    const click = new Audio('./images/click.mp3');
    const rst = new Audio('./images/reset.mp3');
    
    //Tasbeeh
    document.querySelector('#count').onclick = () => {

        let counter = localStorage.getItem('counter');
        counter++;
        document.querySelector('h1').innerHTML = counter;
        localStorage.setItem('counter', counter);

        click.play();
    };

    document.querySelector('h1').innerHTML = localStorage.getItem('counter');

    document.querySelector('#reset').onclick = () => {
        let c2 = localStorage.setItem('counter', 0);
        c2 = 0;

        document.querySelector('h1').innerHTML = c2;


        rst.play();
    };

//const child = document.querySelector('.child');
//const bdy = document.querySelector('.box');

  //  child.onclick = ()=> {

  //      bdy.style.backgroundcolor = 'black';

  //  };

//console.log(child);


    const chAnge = document.querySelector('#chAnge');
    const p = document.querySelector('p');
    const h2 = document.querySelector('h2');

    chAnge.onclick = () => {
        const main = document.querySelector('.main');
       // document.querySelector('.main').style.backgroundColor = 'green';
        if (chAnge.innerHTML === 'Light Mode', main.style.backgroundColor === 'darkslategray', chAnge.style.color === 'white', chAnge.style.borderColor === 'white', p.style.color === 'bisque', h2.style.color === 'wheat') {
            chAnge.innerHTML = 'Dark Mode', main.style.backgroundColor = 'antiquewhite', chAnge.style.color = 'black', chAnge.style.borderColor = 'black', chAnge.style.fontWeight = '800', p.style.color = 'black', h2.style.color = 'black'
        } else {
            chAnge.innerHTML = 'Light Mode', main.style.backgroundColor = 'darkslategray', chAnge.style.color = 'white', chAnge.style.borderColor = 'white', p.style.color = 'bisque', h2.style.color = 'wheat'
        }


    }


});