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


	createMarkup() {
		var html = this.state.data.answer;
//		alert('Hej ' + html) ;
		if (this.state.data.videofile !== undefined)
			html = html + '<br>Video ' +  this.state.data.videofile;
			html = html + '<video autoplay id="glossvideo-3" preload="metadata" controls muted style="max-width: 600px;">' + 
			'<source src="http://frigg.sprakochfolkminnen.se/media/' + this.state.data.videofile + '" type="video/mp4">' +
			 '</video>'

//		return {__html: this.state.data.answer}; 
		return {__html: html}; 
	}

	render() {
		return (
			<div className="list">

				<div className="fraga" onClick={this.titleClick} dangerouslySetInnerHTML={{ __html: this.state.data.question}}></div>
				<div className="svar" style={{display: this.state.open ? 'block': 'none'}} dangerouslySetInnerHTML={this.createMarkup()}></div>
			</div>
		);
	}
}