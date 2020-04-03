import React from 'react'

class InfoList extends React.Component{
	constructor(props){

		super(props);		
	}
	render() {
		const items = this.props.listItem[0]
	    return (

	    	<div className="flex-rowimage-container">
	    	<div> <img src={items.imgurl} alt="here is image" className="imageShow"/></div>
	    	<div className="flex-container infoListDiv">
	    	 <div><div>Fullname: </div>{items.fullName}</div>
	    	 <div><div>Position:</div> {items.position}</div>
	    	 <div><div>Task:</div> {items.task}</div>
	    	 <div><div>Deadline:</div> {items.deadline}</div>
	    	</div>
	    	</div>
	    );
	  }
}

export default InfoList