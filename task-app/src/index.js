import React from 'react';
import ReactDom from 'react-dom';
import initialData from "./initial-data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";


class App extends React.Component {
	state = initialData;

	onDragEnd = result => {

	};

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				{this.state.columnOrder.map(columnId => {
				const column = this.state.columns[columnId];
				const steps = column.stepIds.map(stepId => this.state.steps[stepId]);

				return <Column key={column.id} column={column} steps={steps} />;
			})}
			</DragDropContext>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));