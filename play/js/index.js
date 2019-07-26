var config = {
	theme: "nox",
	mode: "javascript",
	value: `const updateTodo = ({ data, view }) => {
	const dataNew = {
		...data,
		todo: view.target.value
	};

	return {
		data: dataNew,
		view: (<Todos data={dataNew}/>)
	};
};

const createTodo = ({ data }) => {
	const dataNew = {
		todo: "",
		todos: [...data.todos, data.todo]
	};

	return {
		data: dataNew,
		view: (<Todos data={dataNew}/>)
	};
};

const removeTodo = index => ({ data }) => {
	const dataNew = {
		...data,
		todos: data.todos.filter(
			(todo, todoIndex) =>
				todoIndex !== index
		)
	};

	return {
		data: dataNew,
		view: (<Todos data={dataNew}/>)
	};
};

const Todos = ({ data }) => (
	<div>
		<h1>Todos</h1>
		<input
			type="text"
			placeholder="What needs to be done?"
			value={data.todo}
			@input={updateTodo}
		/>
		<button @click={createTodo}>Create</button>
		<for={todo, index}
			of={data.todos}
			name="ul"
		>
			<li @click={removeTodo(index)}>
				{todo}
			</li>
		</for>
	</div>
);

Moon.use({
	data: Moon.data.driver({
		todo: "",
		todos: ["Learn Moon", "Take a nap", "Go shopping"]
	}),
	view: Moon.view.driver("#root")
});

Moon.run(({ data }) => {
	return {
		view: (<Todos data={data}/>)
	};
});`,
	lineNumbers: true,
	indentWithTabs: true
};

var editor = CodeMirror(document.getElementById("editor"), config);
var result = document.getElementById("result");

function render() {
	result.srcdoc = `
		<!DOCTYPE html>
		<html>
			<head>
				<title>Moon | Playground Result</title>
			</head>
			<body>
				<div id="root"></div>
				<script src="/play/js/lib/moon.js"></script>
				<script>${MoonCompiler.compile(editor.getValue())}</script>
			</body>
		</html>
	`;
}

editor.on("change", render);
render();
