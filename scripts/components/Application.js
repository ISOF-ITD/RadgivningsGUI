import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';

export default class Application extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;
	}

	componentDidMount() {
		// Här kan vi hämta data från server om det behövs
	}

	render() {
		const {
			main
		} = this.props;
		return (
			<div className="app" style={{width: '100%', maxWidth: 1200, margin: 20}}>
				<p><a href="#/map">Visa example module med en karta</a></p>
				<p><a href="#/form">Visa example module med formulär</a></p>
				<div>
					<h3>Main module area</h3>
					<p>Här under kommer moduler att dyka upp</p>

					<hr/>

					{main}

				</div>
			</div>
		);
	}
}