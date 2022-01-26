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
	new Question('Укажите неправильный вариант.',
	[
		new Answer('*{color:red;}', 0),
		new Answer('~div{color:red;}', 1),
		new Answer('.link{color:red;}', 0),
		new Answer('a.link{color:red;}', 0)
	]),

	new Question('Что такое <b>vw</b>?',
	[
		new Answer('Стиль рамки', 0),
		new Answer('Встроенный класс', 0),
		new Answer('Относительная единица измерения', 1),
		new Answer('Абсолютная единица измерения', 0)
	]),

	new Question('Элемент со свойством <b>block:none</b>',
	[
		new Answer('Отображается как блок', 0),
		new Answer('Отображается как строка', 0),
		new Answer('Не отображается', 1),
		new Answer('Отображается, как по умолчанию', 0)
	]),

	new Question('Внешний отступ сверху можно указать с помощью...',
	[
		new Answer('padding', 0),
		new Answer('margin', 1),
		new Answer('padding-top', 0),
		new Answer('margin-top', 1)
	]),

	new Question('#ff0000 — это...',
	[
		new Answer('зелёный', 0),
		new Answer('синий', 0),
		new Answer('красный', 1),
		new Answer('чёрный', 0)
	]),

	new Question('Что такое <b>rel</b>?',
	[
		new Answer('Стиль рамки', 0),
		new Answer('Атрибут тега <b>style</b>', 0),
		new Answer('Единица измерения', 0),
		new Answer('Атрибут тега <b>link</b>', 1)
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
