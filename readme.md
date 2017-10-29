# Learn React

First steps to learn react

This repository has training exercises about react.

## Declare functions

const Card = (props) => {
	return (
		<div style={{margin: '1em'}}>
			<img width="75" src={props.avatar_url} />
		  <div style={{display: 'inline-block', marginLeft: 10}}>
			<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
			  {props.name}
			</div>
			<div>{props.company}</div>
		  </div>
		</div>
	);
};


## Declare classes

class App extends React.Component {
	state = {
		cards : []
	};
  
    addNewCard = (cardInfo) => {
		this.setState(prevState => ({
			cards: prevState.cards.concat(cardInfo)
		}))
	};

	render(){
		return (
			<div>
			<Form onSubmit={this.addNewCard} />
			<CardList cards={this.state.cards} />
		  </div>
		);
	}
}

## Work with arrays

props.cards.map(card => 
					<Card key={card.id} {...card} />
				) 


