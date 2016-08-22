import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
	constructor(){
		super();
		this.state = {red:0};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
		});
	}
	render(){
		return (
			<div>
				<NumInput
					ref="red"
					min={0}
					max={255}
					step={1}
					val={+this.state.red}
					label="Red"
					update={this.update}
				/>
				<NumInput
					ref="red"
					min={0}
					max={255}
					step={1}
					val={+this.state.red}
					label="Red"
					type="number"
					update={this.update}
				/>
			</div>
		);
	}
}
class NumInput extends React.Component{
	render(){
		console.log(this.props.val)
		let label = this.props.label !== ''?
			<label>	{this.props.label} - {this.props.val}  </label>: '';
		return (
			<div>
				<input ref='inp'
					type = {this.props.type}
					min = {this.props.min}
					max = {this.props.max}
					defaultValue = {this.props.val}
					step = {this.props.step}
					onChange = {this.props.update}
				/>
				{label}
			</div>
		);
	}
}
NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	type: React.PropTypes.oneOf(['number','range']),
	update: React.PropTypes.func.isRequired,
};
NumInput.defaultProps = {
	min: 0,
	max: 25,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
};
export default App;
