// coding with HSL
const h1 = document.querySelector('h1');
h1.remove();


const olElement = document.createElement('ol');
document.body.appendChild(olElement);

//for-loops
for (let i = 0; i < 5; i++) {
    const liElement = document.createElement('li');
    liElement.innerText = 'Rad' + (i + 1);
    olElement.appendChild(liElement);

    liElement.style.border = `${2 * i + 5}px solid white`;
    liElement.style.padding = `${2 * i + 5}px`;
    liElement.style.height = `${10 * i + 20}px`;
    liElement.style.color = 'darkviolet';
    liElement.style.fontSize = `${10 * i + 20}px`;
    liElement.style.textAlign = 'center';
    liElement.style.listStyle = 'none';
}

const liList = document.querySelectorAll('li');
for (let i = 0; i < liList.length; i++) {

    //hue (from 120 to 150)
    const hue = 120 + (15 * i);
    console.log(i, hue);

    // saturation (0- 100%)
    const saturation = i * 100 / (liList.length - 1);
    console.log(i, saturation);

    liList[i].style.backgroundColor = `hsl(${hue}, ${150 - saturation}%, 50%`;

}


// Dom:en - to create main and  add it to body
const main = document.createElement('main');
document.body.appendChild(main);

// Dom:en - to decotate main 
main.style.display = 'flex';
main.style.justifyContent = 'space-evenly';
main.style.border = '1px solid black';
main.style.padding = '30px';


//uppgift1- if-else 
//to create html-elemnt - article
const article1 = document.createElement('article');
main.appendChild(article1);
article1.style.border = '10px solid violet';

for (let i = 0; i < 10; i++) {
    //to create html-elemnt - h1
    const el = document.createElement('h1');
    article1.appendChild(el);
    el.innerText = [i];

    //if-loops
    if (i === 4) {
        el.style.backgroundColor = "darkviolet";
        el.style.color = "white";
    }

    else if (i % 2 == 1) {
        el.style.backgroundColor = "white";
        el.style.color = "black";

    }
    else {
        el.style.backgroundColor = "grey";
        el.style.color = 'white';

    }

    // styling
    el.style.margin = '0';
    el.style.textAlign = 'left';
    el.style.width = " 200px"
    el.style.fontSize = `30px`;
}


//uppgift2- if else
//to create html-elemnt - article
const article2 = document.createElement('article');
main.appendChild(article2);
article2.style.border = '10px solid violet';

//for-loops
for (let i = 9; i > -1; i--) {
    //to create html-elemnt - h1
    const el = document.createElement('h1');
    article2.appendChild(el);
    el.innerText = [i];

    // if-loops
    if (i === 8) {
        el.style.backgroundColor = "darkviolet";
        el.style.color = "white";
    }

    else if (i % 2 == 1) {
        el.style.backgroundColor = "white";
        el.style.color = "black";

    }
    else {
        el.style.backgroundColor = "grey";
        el.style.color = 'white';

    }

    //styling 
    el.style.margin = '0';
    el.style.textAlign = 'center';
    el.style.width = '200px';
    el.style.fontSize = `30px`;
}


//upppgift3 arrays & if else

// arrays
const number = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']

//to create html-elemnt - article
const article3 = document.createElement('article')
main.appendChild(article3);
article3.style.border = '10px solid violet';

//for- loops
for (let i = 0; i < number.length; i++) {
    //to create html-elemnt - h1
    const el = document.createElement('h1');
    article3.appendChild(el);
    el.innerText = number[i];

    // if-statements
    if (number[i] === 'sex') {
        el.style.backgroundColor = "darkviolet";
        el.style.color = "black";

    }
    else if (i % 2 == 1) {
        el.style.backgroundColor = "white";
        el.style.color = "black";

    }
    else {
        el.style.backgroundColor = "grey";
        el.style.color = 'white';
    }
    // styling
    el.style.margin = '0'
    el.style.textAlign = 'right';
    el.style.width = '200px';
    el.style.fontSize = `30px`;

}
