import React, { Component } from 'react';

import AuctionDetails from '../AuctionDetails';
import BidList from '../BidList';
import NewBidForm from '../NewBidForm';
import {User} from '../../api';

import { Auction } from '../../api';

export default class AuctionShowPage extends Component {
  constructor(props) {

    // When using constructor in a class-based component
    // you must always call the `Component` class's constructor
    // with super(props);
    super(props);

    this.state = {
      auctionData: {
        bids: []
      },
      currentUser: null
    }
  }

  // getCurrentUser = () => {
  //   User.current().then((user) => {
  //     if(user) {
  //       const newData = {currentUser: user};
  //       this.setState({
  //         ...this.state,
  //         ...newData
  //       })
  //     }
  //     // } else {
  //     //   if (window.location.pathname === '/sign_in') {
  //     //     return
  //     //   } else {
  //     //     console.log('No Session');
  //     //     window.location = '/sign_in'
  //     //   }
  //     // }
  //   })
  // }

  // createBid(params) {
  //   this.setState({
  //     bids: [...this.state.bids, params]
  //   });
  // }

  componentDidMount() {
    Auction.one(this.props.match.params.id).then(auction => {
      this.setState({
        auctionData: auction,
      });
    });

    // this.getCurrentUser();
  }

  render() {
    if(!this.state.auctionData) {
      return(
        <main className='page'>
          <h2>Auction Does not exist!</h2>
        </main>
      );
    }
    return (
      <main>
        <AuctionDetails
          item={this.state.auctionData.item} 
          description={this.state.auctionData.description}
          reservePrice={this.state.auctionData.reserve_price}
          endsAt={this.state.auctionData.ends_at}
          bids={this.state.auctionData.bids}
        />
        <NewBidForm onCreateBid={(params) => {this.createBid(params)}} user={this.state.currentUser} auction={this.state.auctionData}/>
        <BidList
          bids={this.state.auctionData.bids}
        />
      </main>
    );
  }
}