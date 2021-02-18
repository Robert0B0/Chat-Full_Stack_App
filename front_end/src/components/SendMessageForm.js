import React, { Component } from "react";

export default class SendMessageForm extends Component {
	constructor() {
		super();
		this.state = {
			message: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			message: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("message: ", this.state.message);
		this.props.sendMessage(this.state.message, "Timmy");
		this.setState({
			message: "",
		});
	}

	render() {
		console.log(this.state.message);
		return (
			<form onSubmit={this.handleSubmit} className="send-message-form">
				<input
					type="text"
					placeholder="Type your message:"
					onChange={this.handleChange}
					value={this.state.message}
				/>
			</form>
		);
	}
}
