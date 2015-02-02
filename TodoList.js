var TodoList = React.createClass({
  getInitialState: function() {
    return { list: this.props.todoList} // have I just created two sources of truth?  see http://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html
  },
  itemMarkedDone: function(item) {
    item.done = !item.done;
    this.setState({list:this.state.list});  // WTF?!
  },
  
  render: function() {
    var listItems = this.props.todoList.map(function(item) {
      return (
        <TodoItem item={item} markedDone={this.itemMarkedDone} />
      )
    }.bind(this));
    return (
      <ul>
        {listItems}  
      </ul>
    )
  }
});

var TodoItem = React.createClass({
  handleChecked: function() {
    this.props.markedDone(this.props.item);
  },
  render: function() {
    return (
        <li>
          <input type="checkbox" onChange={this.handleChecked} checked={this.props.item.done}  />
          {this.props.item.text}
        </li>
      )
  }
})