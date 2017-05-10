import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';
import FrageLadanForm from './FrageLadanForm';

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
				<FrageLadanForm/>

				{main}

			</div>
		);
	}
}