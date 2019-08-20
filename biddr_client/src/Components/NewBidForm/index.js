import React from 'react';

// import { Auction } from '../../api';
import { Bid } from '../../api';
// import FormError from '../FormError';

export default class NewBidForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newBidData: {
        price: '',
        // user: null,
        auction_id: null
      },
      errors: [],
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    // computed property name
    this.setState({
      newBidData: {
        // get the key values of this.state.newQuestionData
        price: event.target.value,
        // user: this.props.user,
        auction_id: this.props.auction.id
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    Bid.create(this.state.newBidData).then(data => {
      if(!data.auction) {
        this.setState({
          errors: data.errors
        });
      } else {
        this.props.history.push(`/auctions/${data.auction.id}`);
      }
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
            type='number' 
            name='price' 
            value={this.state.newBidData.price}
            onChange={this.handleChange}
          /> 
        </div>
        <input type='submit' value='Bid'/>
      </form>
    );
  }
}