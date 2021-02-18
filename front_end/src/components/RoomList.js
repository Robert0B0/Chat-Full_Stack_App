import React, { Component } from "react";

export default class RoomList extends Component {
	render() {
		return (
			<div className="rooms-list">
				{this.props.rooms.map((room) => {
					return (
						<li key={room.id} className="room">
							<a onClick={this.props.enterRoom(room.id)} href="#">
								{room.naming}
							</a>
						</li>
					);
				})}
			</div>
		);
	}
}
