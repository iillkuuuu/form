/*
types:
    btn         -   кнопка
    url         -   ссылка
    next        -   кнопка для перехлда на следующую страницу
    quiz        -   разместить квиз здесь
    img         -   изображение
    video       -   видео
    audio       -   аудио
    input       -   ввод какой либо информации

параметры:
    src         -   путь к файлу / ссылка
    text        -   текст
    input       -   тип ввода

    bcolor      -   фоновый цвет элемента
    color       -   цвет текста элемента
    name        -   класс для input

общие:
    groundcolor -   фоновый цвет
    title       -   заголовок страницы
*/

const main = document.querySelector("main");

const ui = [
  {
    groundcolor: "#88b9daff",
    title: "LOGIN",
    page: [
      { type: "txt", text: "<h1>имя:</h1>" },
      { type: "input", name: "name" },
      { type: "txt", text: "<h1>фамилия:</h1>" },
      { type: "input", name: "surname" },
      { type: "txt", text: "<h1>отчество:</h1>" },
      { type: "input", name: "pat" },
      { type: "next" },
    ],
  },
  {},
  {},
  {},
  {
    page: [
      {
        type: "txt",
        text: "Уважаемый <surname></surname> <name></name> <pat></pat>",
      },
      {
        type: "txt",
        text: "Вы набрали <score></score>/4",
      },
    ],
  },
];

const quiz = [
  {
    name: "Текст вопроса",
    answers: ["Вариант 1", "Вариант 2", "Вариант 3"],
    true: 1,
  },
  {
    name: "Текст вопроса",
    answers: ["Вариант 1", "Вариант 2", "Вариант 3"],
    true: 1,
  },
  {
    name: "Несколько на выбор",
    answers: ["1", "2", "3"],
    true: [0, 1],
  },
];
quizPage = 0;

let how = [];

let data = {};
let isquiz = false;

next(0, false);

function page_render(id = 0) {
  let stl = "";
  main.innerHTML = "";
  let isnext = false;
  isquiz = false;

  if (ui.length > id) {
    document.querySelector("body").style.backgroundColor = ui[id].groundcolor;
    if (!(ui[id].title == undefined || ui[id].title.length <= 0)) {
      document.querySelector("title").innerHTML = ui[id].title;
    }

    if (ui[id].page == undefined || ui[id].page.length <= 0) {
      quiz_func();
      isquiz = true;
      isnext = true;
      next_btn(id);
    } else {
      ui[id].page.forEach((ell) => {
        let type = ell.type;
        if (ell.bcolor || ell.color)
          stl = `style="background-color: ${ell.bcolor}; color: ${ell.color};"`;
        if (type == "btn") {
          main.innerHTML += `<button ${stl} onclick='document.location.href=${ell.src};'>${ell.text || "click"}</button>`;
        } else if (type == "url") {
          main.innerHTML += `<a ${stl} href="${ell.src}">${ell.text || ""}</a>`;
        } else if (type == "txt") {
          main.innerHTML += `<div ${stl}>${ell.text || ""}</div>`;
        } else if (type == "next") {
          next_btn(id, stl || undefined, ell.text || undefined);
          isnext = true;
        } else if (type == "quiz") {
          quiz_func();
          isquiz = true;
        } else if (type == "img") {
          main.innerHTML += `<img ${stl} src=${ell.src}>${ell.text || ""}</img>`;
        } else if (type == "video") {
          main.innerHTML += `<video ${stl} src=${ell.src} controls>${ell.text || ""}</video>`;
        } else if (type == "audio") {
          main.innerHTML += `<audio ${stl} src=${ell.src} controls>${ell.text || ""}</audio>`;
        } else if (type == "input") {
          main.innerHTML += `<input ${stl} class="${ell.name}" type="${ell.input}" onchange="data.${ell.name} = document.querySelector('.${ell.name}').value">${ell.text || ""}</input>`;
        }
      });

      if (isquiz && !isnext) next_btn(id);
    }
  }

  data.score = 0;
  for (let i = 0; i < how.length; i++) {
    data.score += how[i];
  }
  for (let i = 0; i < Object.keys(data).length; i++) {
    document.querySelectorAll(Object.keys(data)[i]).forEach((e) => {
      e.innerHTML += Object.values(data)[i];
    });
  }
}

function quiz_func() {
  let ans = "";
  quiz[quizPage].answers.forEach((ell, i) => {
    ans += `<div class="ans"><input type="${Array.isArray(quiz[quizPage].true) ? "checkbox" : "radio"}" class="answer" id="${i}" name="answer" value="but${i}"><div onclick="document.querySelector('input[name=answer][value=but${i}]').checked = true;">${ell}</div></input></div>`;
  });
  main.innerHTML += `<div class="quiz">${quiz[quizPage].name}<div class="answers">${ans}</div></div>`;
  quizPage++;
}

function next(inp = 0, val = true) {
  if (val && isquiz) {
    if (Array.isArray(quiz[quizPage - 1].true)) {
      how[how.length] = 0;
      document.querySelectorAll('input[name="answer"]:checked').forEach((e) => {
        quiz[quizPage - 1].true.sort;

        let yes = false;
        for (let i = 0; i < quiz[quizPage - 1].true.length; i++) {
          if (quiz[quizPage - 1].true[i] == e.id) {
            how[how.length - 1]++;
            yes = true;
            break;
          }
        }

        if (!yes) how[how.length - 1]--;
      });
    } else {
      how[how.length] =
        document.querySelector('input[name="answer"]:checked').value ==
        "but" + quiz[quizPage - 1].true;
    }
  }
  console.log(how);

  page_render(inp);
}

function next_btn(
  id = 0,
  stl = 'style="background-color: #00f; color: #fff;"',
  txt = "next",
) {
  main.innerHTML += `<button onclick="next(${id + 1});" ${stl}>${txt || "next"}</button>`;
}
