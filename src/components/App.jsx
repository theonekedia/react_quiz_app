import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';
import Result from './quiz/Results.jsx';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is your Name?',
					choices: [
						{
							id: 'a',
							name: 'Goldie'
						},
						{
							id: 'b',
							name: 'Arshad'
						},
						{
							id: 'c',
							name: 'Abhimanyu'
						},
						{
							id: 'd',
							name: 'Murli'
						}
					],
					correct: 'a'
				},
				{
					id: 2,
					text: 'What is your Pet Name?',
					choices: [
						{
							id: 'a',
							name: 'Goldie'
						},
						{
							id: 'b',
							name: 'Arshad'
						},
						{
							id: 'c',
							name: 'Abhimanyu'
						},
						{
							id: 'd',
							name: 'Murli'
						}
					],
					correct: 'b'
				},
				{
					id: 3,
					text: 'What is your Girlfriend Name?',
					choices: [
						{
							id: 'a',
							name: 'Gauri'
						},
						{
							id: 'b',
							name: 'Geetika'
						},
						{
							id: 'c',
							name: 'Geetanjali'
						},
						{
							id: 'd',
							name: 'Gunjan'
						}
					],
					correct: 'b'
				},
				{
					id: 4,
					text: 'What is your Friends Name?',
					choices: [
						{
							id: 'a',
							name: 'Goldie'
						},
						{
							id: 'b',
							name: 'Arshad'
						},
						{
							id: 'c',
							name: 'Abhimanyu'
						},
						{
							id: 'd',
							name: 'Murli'
						}
					],
					correct: 'd'
				},
			],
			score: 0,
			current: 1

		} 
	}

	setCurrent(current){
		this.setState({current})
	}

	setScore(score){
		this.setState({score})
	}

	render(){
		if (this.state.current > this.state.questions.length){
			var scorebox = '';
			var result = <Result {...this.state} />;
		}else{
			var scorebox = <ScoreBox {...this.state} />;
			var result = '';
		}

		return(
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{result}
			</div>
		)
	}
}

App.propTypes = {
	// clientId: React.PropTypes.string,
	// clientSecret: React.PropTypes.string
}
App.defaultProps = {
	// clientId: '4887b7701c6cdf646508',
	// clientSecret: 'd6b239f3a9c3f07d7310300aaff6d78ae11b4528'
}
export default App