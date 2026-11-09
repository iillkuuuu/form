let main = document.querySelector("main");

const ui = [
    {
        "groundcolor": "#88b9daff",
        "title": "form1",
        "page": [
            {"type": "btn", "text": "hello", "bcolor": "#ffffff"},
            {"type": "url", "text": "google)", "url": "https://www.google.com/", "bcolor": "#ffffff"},
            {"type": "txt", "text": "any text", "bcolor": "#ffffff"},
            {"type": "next", "text": "next", "bcolor": "#0000ff", "color": "#fff"},
            {"type": "quiz", "id": 0}
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
    main.innerHTML = "";

    document.querySelector("body").style.backgroundColor = ui[id].groundcolor;
    if(ui[id].title.length > 0) {
        document.querySelector("title").innerHTML = ui[id].title;
    }

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
            main.innerHTML += `<button ${stl} onclick="page_render(${val})">${ell.text}</button>`;
        } else if(type == "quiz") {
            main.innerHTML += quiz[ell.id].name;
            main.innerHTML += quiz[ell.id].answers;
        }
    })
    val++;
}