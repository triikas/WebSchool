const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz
{
	constructor(type, questions, results)
	{
		this.type = type;

		this.questions = questions;

		this.results = results;

		this.score = 0;

		this.result = 0;

		this.current = 0;
	}

	Click(index)
	{
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	Next()
	{
		this.current++;

		if(this.current >= this.questions.length)
		{
			this.End();
		}
	}

	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
}

class Question
{
	constructor(text, answers)
	{
		this.text = text;
		this.answers = answers;
	}

	Click(index)
	{
		return this.answers[index].value;
	}
}

class Answer
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
}

class Result
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

const results =
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже кое-что знаете", 2),
	new Result("Не идеал, но более чем", 4),
	new Result("Вы освоили тему в совершенстве", 6)
];

const questions =
[
	new Question('Тег <b>а</b> это...',
	[
		new Answer('Элемент списка', 0),
		new Answer('Ссылка', 1),
		new Answer('Тег, присоединяющий css-файл', 0),
		new Answer('Кто б его знал', 0)
	]),

	new Question('Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
	[
		new Answer('title', 1),
		new Answer('header', 0),
		new Answer('html', ),
		new Answer('name', 0)
	]),

	new Question('Что делает тег <b>br</b>?',
	[
		new Answer('Полужирное начертание', 0),
		new Answer('Курсив', 0),
		new Answer('Горизонтальная линия', 0),
		new Answer('Создает принудительный перенос текста', 1)
	]),

	new Question('... — это тег для создания верхнего индекса.',
	[
		new Answer('sub', 0),
		new Answer('wbr', 0),
		new Answer('sup', 1),
		new Answer('s', 0)
	]),

	new Question('<b>em</b> — это еденица измерения или тег?',
	[
		new Answer('Ни то, ни другое', 0),
		new Answer('И то, и другое', 1),
		new Answer('Тег', 0),
		new Answer('Единица измерения', 0)
	]),

	new Question('Что находится в теге <b>html</b>?',
	[
		new Answer('Ничего. Это чисто формальный тег.', 0),
		new Answer('Всё, что есть на странице.', 1),
		new Answer('Технические данные, не отображающиеся на странице.', 0),
		new Answer('Такого тега нет.', 0)
	])
];

const quiz = new Quiz(1, questions, results);

Update();

function Update()
{
	if(quiz.current < quiz.questions.length)
	{
		headElem.innerHTML = quiz.questions[quiz.current].text;

		buttonsElem.innerHTML = "";

		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}


		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	}
	else
	{
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
    document.querySelector('.head__content').style.height = '70vh';
    document.querySelector('.head__content').className = 'pt-5';
    document.querySelector('div.quiz__footer').style.display = 'none';
    document.querySelector('div.quiz__head').className = 'h1 text-light obl text-center my-auto hh1 klon';
		// pagesElem.innerHTML = quiz.results[quiz.result].text;
	}
}

function Init()
{
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}
function Start() {
  document.querySelector('.wrapper').style.display = 'block';
  document.querySelector('div.nach').style.display = 'none';

}
function Click(index)
{
	let correct = quiz.Click(index);

	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct)
		{
			btns[index].className = "button button_wrong";
		}
	}
	else
	{
		btns[index].className = "button button_correct";
	}

	setTimeout(Update, 1000);
}
