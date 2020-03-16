const initialData = {
	steps: {
		'step-1': {id: 'step-1', content: 'Wash your hands'},
		'step-2': {id: 'step-2', content: 'Wash your hands again'},
		'step-3': {id: 'step-3', content: 'Do not eat bats'},
		'step-4': {id: 'step-4', content: 'Do not rub your eyes'},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'No Corona',
			stepIds: ['step-1', 'step-2', 'step-3', 'step-4'],
		},
	},
	columnOrder: ['column-1']
};

export default initialData;