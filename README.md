# web_accessible_output
Provides a uniform interface to send speech to the user through Web TTS or Aria, and has components that can help control speech settings.

## Usage
### Basic Speak

	import wao from 'web_accessible_output'
	wao.speak('Hello world')

### Preference Settings and text view

	import React, { Class } from 'react'
	import wao, { SpeechPrefferences, SpeechText } from 'web_accessible_output'
	
	export class SpeechView extends Component {
		constructor(props){
			super(props)
			this.state = {
				text: 'Hello world'
			}
			this.updateText = this.updateText.bind(this)
			this.speak = this.speak.bind(this)
		}
	
		updateText(element){
			this.setState({ text: element.target.value })
		}
	
		speak(){
			wao.speak(this.state.text)
		}
	
		render(){
			return(
				<div>
					<label for="txt">Type text to be spoken</label>
					<textarea id="txt" onChange={this.updateText}>{this.state.text</textarea>
					<button onClick={this.speak}>Speak Text</button>
					<SpeechPrefferences />
					<SpeechText   />
				</div>
			)
		}
	}

# API
## wao.speak

`wao.speak` sends text to be spoken through the user's chosen method of speech, either Web TTS, or aria-live region.

### Arguments

* text: string to be spoken

## setOutput
`wao.setOutput` will switch between web TTS and screen aria live regions/screen reader for output. If no arguments are passed, it will toggle between the two settings, otherwise the passed argument will determine the output method.

### Arguments

* setting: string, one of 'tts', 'screenReader'. This will explicitly set the output method.

## SpeechPrefferences
`wao.SpeechPrefferences` is a component that allows the user to adjust if they are using screen reader or web TTS, if they are using web TTS, they can change the voice, speed, pitch, and any other settings the web speech API allows.

### Props
None

## SpeechText
`wao.SpeechText` simply shows what the speech method is saying in text.

