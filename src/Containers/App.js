import React, {Component} from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots: [],
			searchField: ''
		}
	}
	
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	componentDidMount(){
		return(
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(user => this.setState({robots: user}))
		)
	}

	render(){
		const {robots, searchField} = this.state
		const fltrArray = robots.filter(user =>{
			return user.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length ?
			<h1 className="tc">Loading</h1> :
		
		(
			<div className="tc">
				<h1 className=" f1">Find Robots</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={fltrArray}/>
				</Scroll>
			</div>
		)
		
	}
}

export default App;