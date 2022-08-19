var myQuestions = [
	{
		question: "1)São sequências de fatos brutos representando eventos e ocorrências.",
		answers: {
			a: 'Dados',
			b: 'Informação',
			c: 'Sistemas',
		},
		correctAnswer: 'a'
	},
	{
		question: "2)Se refere a dados moldados em um formato útil e significativo.",
		answers: {
			a: 'Dados',
			b: 'Informação',
			c: 'Sistemas',
		},
		correctAnswer: 'b'
	},
	{
		question: "3)Um conjunto de partes inter-relacionadas que trabalham para atingir um objetivo comum.",
		answers: {
			a: 'Dados',
			b: 'Informação',
			c: 'Sistemas',
		},
		correctAnswer: 'c'
	},
	{
		question: "4)É necessário para um profissional de TI estar em dia com as tecnologias lançadas a cada dia?",
		answers: {
			a: 'Sim',
			b: 'Não',
		},
		correctAnswer: 'a'
	},
	{
		question: "5)Dentre as afirmações abaixo, qual delas está correta?",
		answers: {
			a: 'O profissional de TI precisa conhecer somente algumas tecnologias que movem o mercado.',
			b: 'O profissional de TI não precisa ser ágil, calma é uma melhor opção.',
			c: 'O profissional de TI necessita ter sede de conhecimento, para manter o passo com o mercado de trabalho.',
			d: 'O profissional de TI não precisa ser necessariamente organizado, contanto que ele entregue o que foi pedido.',
			e: 'Nenhuma alternativa está correta.',
		},
		correctAnswer: 'c'
	}
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('resultado');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		let output = [];
		let answers;

	
		for(let i = 0; i < questions.length; i++){
			
		
			answers = [];

			
			for(letter in questions[i].answers){

			
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
				
						+ questions[i].answers[letter]
					+ '</label> </br>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>' + 
				'<div class="answers">' + answers.join('') + '</div>'
			);
		}


		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		let answerContainers = quizContainer.querySelectorAll('.answers');
	
		
		let userAnswer = '';
		let numCorrect = 0;
		

		for(let i = 0; i < questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer === questions[i].correctAnswer){
				
				numCorrect++;
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;

			if(numCorrect === 5){
				window.alert('Você acertou todas as questôes! Parabéns!!')
			}
		}


	showQuestions(questions, quizContainer);


	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);