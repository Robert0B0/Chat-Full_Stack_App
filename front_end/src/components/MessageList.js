import React, { Component } from "react";
import Message from "./Message";

export default class MessageList extends Component {
	render() {
		return (
			<div className="message-list">
				{this.props.messages.map((message, index) => {
					return (
						<Message
							key={index}
							username={message.user}
							message={message.text}
						/>
					);
				})}
			</div>
		);
	}
}
