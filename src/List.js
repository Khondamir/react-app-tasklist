import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Define our button
const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;


const UnorderedList = props => {

	const listItems = props.characterData.map((listItem, index) => {
		const url = 'info/'

		return (
			<div className="flex-container" key={index}>
				<div className="allC">
					<Link  to={{pathname:`${url}${index}`, item: {listItem} }}><p className="names">{listItem.fullName}</p></Link>
					<Button theme={{ main: "royalblue" }} onClick={() => props.removeCharacter(index)}> Remove </Button>
				</div>
			</div>
	  )
	})

	return <div>{listItems}</div>
}


const List = props => {
	const {characterData, removeCharacter} = props

	return (
		<UnorderedList characterData={characterData} removeCharacter={removeCharacter} />
	)
}


export default List