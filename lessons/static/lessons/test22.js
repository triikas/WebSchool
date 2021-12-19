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
	new Question('... — это тег для создания горизонтальной линии.',
	[
		new Answer('s', 0),
		new Answer('em', 0),
		new Answer('wbr', 0),
		new Answer('hr', 1)
	]),

	new Question('Какой адрес не имеет ошибок?',
	[
		new Answer('https:/wolo/users', 0),
		new Answer('http:/www.balca/home', 0),
		new Answer('https://morg.site.net', 1),
		new Answer('http//www.toi.org', 0)
	]),

	new Question('Тег <b>aside</b> используют для...',
	[
		new Answer('Оформления второстепенного содержимого страницы', 1),
		new Answer('Тематического группирования содержимого страницы', 0),
		new Answer('Группировки других элементов страницы', 0),
		new Answer('Создания раздела страницы, содержащего ссылки на другие страницы или на разделы этой же страницы', 0)
	]),

	new Question('... — это тег для создания ячеек в строках.',
	[
		new Answer('thead', 0),
		new Answer('th', 0),
		new Answer('td', 1),
		new Answer('tr', 0)
	]),

	new Question('Какой вид тега <b>input</b> создаёт флажки? (это те, среди которых можно выбирать несколько вариантов)',
	[
		new Answer('submit', 0),
		new Answer('radio', 0),
		new Answer('checkbox', 1),
		new Answer('tel', 0)
	]),

	new Question('Бессмысленный и крайне сложный вопрос: Сколько существует атрибутов, которые используются только в теге <b>input</b>?',
	[
		new Answer('11', 0),
		new Answer('3', 0),
		new Answer('5', 0),
		new Answer('31', 1)
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
