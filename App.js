import React from "react";
class App extends React.Component {
	render() {
		return <Button> <Heart/> React <Heart/> </Button>;
	}
}
class Button extends React.Component {
	render() {
		return <button> {this.props.children} </button>;
	}
}
//stateless Component
const Heart = () => <span className = "glyphicon glyphicon-heart"> **</span>;

export default App;
