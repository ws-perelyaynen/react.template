import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './flashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';
import '../flashMessages/flashMessages.css';


class FlashMessagesList extends Component {
	render() {
		const messages = this.props.messages.map(message =>
			<FlashMessage key={message.id} message={message} deleteFlashMessage={ this.props.deleteFlashMessage }/>
		);
		return (
			<div className="flash-messages-list">
				{messages}
			</div>
		);
	}
}

FlashMessagesList.propTypes = {
	messages: PropTypes.array.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		messages: state.flashMessages
	}
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);