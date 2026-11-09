let main = document.querySelector("main");

const ui = [
    {
        "groundcolor": "#88b9daff",
        "page": [
            {"type": "btn", "text": "hello", "bcolor": "#ffffff"},
            {"type": "url", "text": "google)", "url": "https://www.google.com/", "bcolor": "#ffffff"},
            {"type": "txt", "text": "any text", "bcolor": "#ffffff"},
            {"type": "next", "text": "next", "bcolor": "#0000ff", "color": "#fff"},
            {"type": "answers", "answers" : [1, 2, 3], "true": 1}
        ]
    }
];

const quiz = [
    {
        "name": "Текст вопроса",
        "answers": ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        "true": 1
    },
    {
        "name": "Текст вопроса",
        "answers": ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        "true": 1
    },
    {
        "name": "Текст вопроса",
        "answers": ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        "true": 1
    },
    {
        "name": "Текст вопроса",
        "answers": ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        "true": 1
    }
] // не хочу так :(

let val = 0;
page_render(val);


function page_render(id) {
    document.querySelector("body").style.backgroundColor = ui[id].groundcolor;
    ui[id].page.forEach((ell, j) => {
        let type = ell.type;
        let stl = `style="background-color: ${ell.bcolor}; color: ${ell.color};"`;
        if(type == "btn") {
            main.innerHTML += `<button ${stl}>${ell.text}</button>`;
        } else if(type == "url") {
            main.innerHTML += `<a ${stl} href="${ell.url}">${ell.text}</a>`;
        } else if(type == "txt") {
            main.innerHTML += `<div ${stl}>${ell.text}</div>`;
        } else if(type == "next") {
            main.innerHTML += `<button ${stl}>${ell.text}</button>`;
        }
    })
    val++;
}