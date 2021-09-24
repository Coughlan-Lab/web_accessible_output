import React, { Component } from 'react'

export function speak() {
	console.log("hello world") 
}

export class SpeakComponent extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		return(
			<div>
				<p>This is in the speak component. Try adding a button here and making the button run a function. look at the onClick attribute of buttons.</p>
			</div>
		)
	}
}