import React, {Component} from 'react'
import styled from 'styled-components'

// Define our button
const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  width: 100%;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;


class NewList extends Component {
	initialState = {
		fullName: '',
		position: '',
		task    : '',
		deadline: '',
		imgurl:   '',
	}

	state = this.initialState

	handleChange = event => {
		const {name, value} = event.target

		this.setState({
			[name]: value,
		})
	}

	submitNew = () => {
		this.props.handleNew(this.state)
		this.setState(this.initialState)
	}




	render() {
		const {fullName, position, task, deadline} = this.state;

		return(

			<div className="flex-row-container input-divs">
			  <div>
				<input type="text" name="fullName" id="fullName" value={fullName} placeholder="Fullname" onChange={this.handleChange} />
			  </div>
			  <div>
				<input type="text" name="position" placeholder="Position"  id="position" value={position} onChange={this.handleChange} />
			  </div>
			  <div>	
				<input type="text" name="task" placeholder="Task"  id="task" value={task} onChange={this.handleChange} />
			  </div>
			  <div>	
				<input type="date" name="deadline" placeholder="Deadline"  id="deadline" value={deadline} onChange={this.handleChange} />
			  </div>
			  <div>
			    <input type="file" name="file" id="file" className="inputfile" />
				<label for="file" id="imageFile" name='imageFile' onChange={this.imageUpload}>Choose a file</label>
			  </div>
			  <div className="submit-div-button">	
				<Button  theme={{ main: "royalblue" }} type="button" value="Submit" onClick={this.submitNew} >Submit</Button>
			  </div>
			</div>

		);
	}
}

export default NewList;