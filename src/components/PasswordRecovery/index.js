import React from 'react';
import { Container, Image, Card, Form, Input, Grid, Button, Icon } from 'semantic-ui-react';

export default class PasswordRecovery extends React.Component {
	render() {
		let logo = require('../../icons/edu-logo.png');
		return (
      <div className='recovery'>
      	<Card.Header>
        	<Grid centered>
        		<Grid.Row>
	        		<img className='logo' src={logo} />
	        		<span className='osu-text-logo'>
	        			<span className='bold'>
				        	OPEN SOURCE <br/>
				        </span>
				        <span className='standard-logo'> 
				        	UNIVERSITY
				        </span>
			        </span>
			      </Grid.Row>
		      </Grid>
	      </Card.Header>
	      <Card.Description>
	      	<span className='welcome'>
	        	Wallet Recovery <br/>
	        </span>
	        <span className='orange'>
	          Enter your seed phrase. This is the 12 word phrase you were given when you first created your wallet
	        </span>
	      </Card.Description>
      	<Card.Content>
      		<Form>
      			<Form.Group inline>
					    <Form.Field inline width='16'>
					    	<label>
					    		<Icon name='user' />
					    	</label>
					      <Input type='text' placeholder='Seed phrase' />
					    </Form.Field>
					  </Form.Group>
						<Form.Button className='orange-button' name='continue'>Continue</Form.Button>
				  </Form>
				   <Button style={{float: 'left'}} className='button' name='signip' onClick={this.props.handleItemClick} >BACK TO SIGN IN</Button>
				   <Button style={{float: 'right'}} className='button' name='signup' onClick={this.props.handleItemClick} >NEW WALLET</Button>
      	</Card.Content>
      </div>
    );
  }
}
