import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
	constructor() {
		super();
		this.state = {value: 0};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({value: this.state.value +1});
	}
	// called once before mount
	componentWillMount(){
		console.log("mounting!");
	}
	render(){
		console.log("rendering!");
		return <button onClick={this.update}> {this.state.value} </button>;
	}
	// called once after mount
	componentDidMount(){
		console.log("component mounted!");
	}
	// when component is removed
	componentWillUnmount(){
		console.log("component removed!");
	}
}
class Wrapper extends React.Component{
	constructor(){
		super();
	}
	mount(){
		ReactDOM.render(<App />, document.getElementById("btn"));
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById("btn"));
	}
	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}> Mount </button>
				<button onClick={this.unmount.bind(this)}> UnMount </button>
				<div id = "btn"> </div>
			</div>
		);
	}
}
export default Wrapper;
