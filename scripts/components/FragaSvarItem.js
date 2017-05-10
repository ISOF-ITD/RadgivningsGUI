import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';

export default class FragaSvarItem extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;

		this.titleClick = this.titleClick.bind(this);

		this.state = {
			data: {},
			open: false
		};
	}

	componentDidMount() {
		this.setState({
			data: this.props.item
		})
	}

	componentWillReceiveProps(props) {
		this.setState({
			data: props.item
		})
	}

	titleClick(){
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		return (
			<div>
				FragaSvarItem

				<div onClick={this.titleClick} dangerouslySetInnerHTML={{ __html: this.state.data.question}}></div>
				<div style={{display: this.state.open ? 'block': 'none'}} dangerouslySetInnerHTML={{ __html: this.state.data.answer}}></div>
			</div>
		);
	}
}