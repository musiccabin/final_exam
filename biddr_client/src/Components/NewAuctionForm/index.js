import React from 'react';

import { Auction } from '../../api';
import FormError from '../FormError';

export default class NewAuctionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newAuctionData: {
        item:'',
        description:'',
        ends_at:'',
        reserve_price: ''
      },
      errors: [],
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    // computed property name
    const newData = {[event.target.name]: event.target.value};
    this.setState({
      newAuctionData: {
        // get the key values of this.state.newQuestionData
        ...this.state.newAuctionData,
        ...newData,
      }
    })

    // if newData looked like = {tag_names: 'value', body: 'value}

    // this.setState({
    //   title: this.state.newQuestionData.title,
    //   body: this.state.newQuestionData.body,
    //   tag_names: this.state.newQuestionData.tag_names,
    //   tag_names: newData.tag_names,
    //   body: newData.body,
    // })
  }

  handleSubmit(event) {
    event.preventDefault();
    Auction.create(this.state.newAuctionData).then(data => {
      if(!data.id) {
        this.setState({
          errors: data.errors
        });
      } else {
        this.props.history.push(`/auctions/${data.id}`);
      }
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <FormError errors={this.state.errors} forField='item'/>
          <label htmlFor='item'>Item</label>
          <input 
            type='text' 
            name='item' 
            value={this.state.newAuctionData.item}
            onChange={this.handleChange}
          /> 
        </div>
        <div>
          <FormError errors={this.state.errors} forField='description'/>
          <label htmlFor='description'>Description</label>
          <input 
            type='text' 
            name='description' 
            value={this.state.newAuctionData.description}
            onChange={this.handleChange}
          /> 
        </div>
        <div>
          <FormError errors={this.state.errors} forField='reserve_price'/>
          <label htmlFor='reserve_price'>Reserve Price</label>
          <input 
            type='number' 
            name='reserve_price' 
            value={this.state.newAuctionData.reservePrice}
            onChange={this.handleChange}
          /> 
        </div>
        <div>
          <FormError errors={this.state.errors} forField='ends_at'/>
          <label htmlFor='ends_at'>Ends At</label>
          <input 
            type='date' 
            name='ends_at' 
            value={this.state.newAuctionData.endsAt}
            onChange={this.handleChange}
          /> 
        </div>
        <input type='submit' value='Create Auction'/>
      </form>
    );
  }
}