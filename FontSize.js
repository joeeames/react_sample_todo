
  var FontSize = React.createClass({
    getInitialState: function() {
      return {
        size: "100%",
        name: 'Joe'
      }
    },
    handleChange: function() {
      console.log('changed', this.refs.size.getDOMNode().value.toString());
      // this.state.size = this.refs.size.getDOMNode().value.toString() + "%";
      // this.setState(this.state);
      this.setState({size: this.refs.size.getDOMNode().value.toString() + "%"});

    },
    render: function() {
      console.log(this.state.size);
      return (
        <div>
          {this.state.name}
          <h1 style={{fontSize: this.state.size}}>Here is some text</h1>
          <input type="text" ref="size" onChange={this.handleChange} /> 
        </div>
      )
    }
  })