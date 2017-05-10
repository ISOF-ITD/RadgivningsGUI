import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';
import FragaSvarItem from './FragaSvarItem'

export default class FragaSvarList extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.fetchData(this.props.params.search);
	}

	componentWillReceiveProps(props) {
		this.fetchData(props.params.search);
	}

	fetchData(searchstring) {
		fetch('http://www4-test.sprakochfolkminnen.se/cgi-bin/appnero/firstAPI.py?sok='+searchstring+'&selkat=alla')
				.then(function(response) {
					// Första steget i fetch är att leverera data som json till nästa steg
					return response.json()
				}).then(function(json) {
					// Nu kan vi använda den data som vi hämtat, vi lägger det inn i state objectet
					this.setState({
						data: json
					});
				}.bind(this)).catch(function(ex) {
					console.log('parsing failed', ex)
				});		
	}

	render() {
		var items = this.state.data.map(function(dataItem, index) {
			return <FragaSvarItem key={index} item={dataItem}/>;
		});

		return (
			<div>
				FragaSvarList

				{items}
			</div>
		);
	}
}