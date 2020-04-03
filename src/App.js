import React, {Component, Fragment } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import List from './List'
import NewList from './NewList'
import InfoList from './InfoList'

class App extends Component {

	state = {
		characters: [
			{
				fullName: 'Deny Thompson',
				position: 'Manager',
				task    : 'Organiza meeting',
				deadline: '2020-04-07',
				imgurl  : '/research-logo.png'
			},
			{
				fullName: 'Jim Kruts',
				position: 'Teacher',
				task    : 'Prepare homework for students',
				deadline: '2020-05-01',
				imgurl  : '/research-logo.png'
			},
			{
				fullName: 'Kathy Carolina',
				position: 'Accountant',
				task    : 'Get documents ready',
				deadline: '2020-04-08',
				imgurl  : '/research-logo.png'
			},
			{
				fullName: 'Tom Henderson',
				position: 'Assistant Professor',
				task    : 'Research on AI',
				deadline: '2020-06-06',
				imgurl  : '/research-logo.png'
			},

		],
	};

	handleNew = character => {
		this.setState({ characters : [...this.state.characters, character]})
	}

	removeCharacter = index => {
		const {characters} = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index
			}),
		})
	}

	render(){

		const {characters} = this.state
		return (
			<BrowserRouter>
			<Fragment>
			<div className="header"><Link to="/"><a className="logo">Info List</a></Link></div>
			<div className="container">
			<Route exact path="/" render={() => <div><NewList handleNew={this.handleNew} /> <List characterData={characters} removeCharacter={this.removeCharacter} /></div>} />
			<Route path="/info/:infoId" render={
				({match}) => <InfoList infoId={match.params.infoId} listItem={characters.filter((character, i) => {return i == match.params.infoId})} />
			} />
			</div>
			</Fragment>
			</BrowserRouter>

		)
	}
}

export default App