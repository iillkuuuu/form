const main = document.querySelector("main");

const ui = [
    {
        "groundcolor": "#88b9daff",
        "title": "form1",
        "page": [
        ]
    },
    {
        "groundcolor": "#88b9daff",
        "title": "form12",
        "page": [
            {"type": "quiz"},
            {"type": "next", "text": "next", "bcolor": "#0000ff", "color": "#fff"},
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
        "answers": ['Вариант 1', 'Вариант 21', 'Вариант 3'],
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
]
quizPage = 0;

let how = [];

next();


function page_render(id=0) {
    main.innerHTML = "";

    if(ui.length > id) {
        document.querySelector("body").style.backgroundColor = ui[id].groundcolor;
        if(ui[id].title.length > 0) {
            document.querySelector("title").innerHTML = ui[id].title;
        }

        if(ui[id].page == undefined || ui[id].page.length <= 0) {
            quiz_func();
            main.innerHTML += `<button style="background-color: #00f; color: #fff;" onclick="page_render(${id+1})">next</button>`;
        } else {
            ui[id].page.forEach((ell) => {
                let type = ell.type;
                let stl = `style="background-color: ${ell.bcolor}; color: ${ell.color};"`;
                if(type == "btn") {
                    main.innerHTML += `<button ${stl} onclick='document.location.href=${ell.src};'>${ell.text || 'click'}</button>`;
                } else if(type == "url") {
                    main.innerHTML += `<a ${stl} href="${ell.src}">${ell.text || ''}</a>`;
                } else if(type == "txt") {
                    main.innerHTML += `<div ${stl}>${ell.text || ''}</div>`;
                } else if(type == "next") {
                    main.innerHTML += `<button ${stl} onclick="next(${id+1})">${ell.text || ''}</button>`;
                } else if(type == "quiz") {
                    quiz_func();
                }
            })
        }
        
    }

    console.log(how);
}

function quiz_func() {
    let ans = "";
    quiz[quizPage].answers.forEach((ell, i) => {
        ans += `<div><input type="radio" class="answer" name="answer" value="${i}"> ${ell}</div>`;
    });
    main.innerHTML += `<div class="quiz">${quiz[quizPage].name}<div class="answers">${ans}</div></div>`;
    quizPage++;
}

function next(inp=0) {
    if(inp > 0) console.log(document.querySelector('input[name="answer"]:checked').value);

    page_render(inp);
}