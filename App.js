import React from 'react';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			data: [
				{id: 1, name: "sahil solanki"},
				{id: 2, name: "rahul maurya"},
				{id: 3, name: "nikhil"},
				{id: 4, name: "ashish"}
			]
		};
	}
	render(){
		let rows = this.state.data.map(person => {
			return <PersonRow data = {person} />;
		});
		return (
			<table>
				<tbody> {rows} </tbody>
			</table>
		);
	}
}
const PersonRow = (props) => {
	return(
		<tr>
			<td> {props.data.id} </td>
			<td> {props.data.name} </td>
		</tr>
	);
};
export default App ;
