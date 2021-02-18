import React from "react";
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import RoomList from "./components/RoomList";
import SendMessageFrom from "./components/SendMessageForm";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			joinableRooms: [],
			joinedRooms: [],
		};
		this.fetchData = this.fetchData.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.enterIntoRoom = this.enterIntoRoom.bind(this);
	}

	getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		console.log("Fetching messages");

		fetch("http://127.0.0.1:8000/api/message-list/")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					messages: data,
				});
			});

		fetch("http://127.0.0.1:8000/api/room-list/")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					joinableRooms: data,
				});
			});
	}

	sendMessage(text, user) {
		let csrftoken = this.getCookie("csrftoken");
		let url = "http://127.0.0.1:8000/api/message-create/";
		fetch(url, {
			method: "POST",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
				"X-CSRFToken": csrftoken,
			},
			body: JSON.stringify({ user: user, text: text }),
		})
			.then((response) => {
				this.fetchMessages();
			})
			.catch(function (error) {
				console.log("ERROR: ", error);
			});
	}

	enterIntoRoom() {}

	render() {
		return (
			<div className="app">
				<RoomList
					enterRoom={this.enterIntoRoom}
					rooms={this.state.joinableRooms}
				/>
				<MessageList messages={this.state.messages} />
				<SendMessageFrom sendMessage={this.sendMessage} />
				<NewRoomForm />
			</div>
		);
	}
}

export default App;
