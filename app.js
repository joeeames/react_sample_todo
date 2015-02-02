  var App = React.createClass({
  	render: function() {
  		return (
        <TodoList todoList={[
          {id:1, text: "Do something", done: false},
          {id:2, text: "Do something else", done: true},
          {id:3, text: "Don't do something", done: false},
        ]} />
  		)
  	}
  });

  React.render(<App />, document.body);
