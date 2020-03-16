import React from "react";
import Container from "react-bootstrap/Container";
import Step from "./step"
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Droppable } from "react-beautiful-dnd";
import CardDeck from "react-bootstrap/CardDeck";

export default class Column extends React.Component {

	render() {
		return (
			<Container className="my-5">
				<div className="taskCard">
					<h2>{this.props.column.title}</h2>
					<br/>
					<Droppable droppableId={this.props.column.id}>
						{provided => (
							<p
								innerRef={provided.innerRef}
								{...provided.droppableProps}
							>
								{this.props.steps.map((step, index) => (
									<Step key={step.id} step={step} index={index} />
								))}
								{provided.placeholder}
							</p>
						)}
					</Droppable>
				</div>
			</Container>
		);
	}
}