import React from "react";
import { Draggable } from "react-beautiful-dnd";
import './styles/task.css'

export default class Step extends React.Component {
	render() {
		return (
			<Draggable draggableId={this.props.step.id} index={this.props.index}>
				{provided => (
					<div
						innerRef={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className="steps"
					>
						{this.props.step.content}
					</div>
					)}
			</Draggable>
		);
	}
}