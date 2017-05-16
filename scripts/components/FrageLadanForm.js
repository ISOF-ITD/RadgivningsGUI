import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';

export default class FrageLadanForm extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;

		this.searchStringValueChangeHandler = this.searchStringValueChangeHandler.bind(this);
		this.searchStringKeyDownHandler = this.searchStringKeyDownHandler.bind(this);
		this.search = this.search.bind(this);

		this.state = {
			searchStringValue: '',
		};
	}

	searchStringValueChangeHandler(event) {
		this.setState({
			searchStringValue: event.target.value
		});
	}

	componentDidMount() {

	}

	componentWillReceiveProps(props) {

	}

	searchStringKeyDownHandler(event){
		if (event.keyCode == 13) {
			this.search()
		}
	}

	search() {
		hashHistory.push('sok/'+this.state.searchStringValue);
	}

	render() {
		return (
			<div>
				<h2 className="header">Frågelådan</h2>
				<p className="ingress">Skriv in ord eller fras:<br/><br/></p>
				<label><input className="sokfalt" type="text" value={this.state.searchStringValue} onChange={this.searchStringValueChangeHandler} onKeyDown={this.searchStringKeyDownHandler} /></label>

				<a className="button button-primary" onClick={this.search}>Sök</a>
			</div>
		);
	}
}