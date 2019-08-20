import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Auction } from '../../api';

export default class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auctions: [],
    };
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions,
      });
    });
  }

  createAuction(params) {
    this.setState({
      auctions: [...this.state.auctions, params]
    });
  }

  render() {
      console.log(this.props.user)
    return(
      <main className='page'>
        <h2>Auctions</h2>
        <ul>
          {this.state.auctions.map((auction) => {
            const { id, item, created_at } = auction;
            return(
              <li 
                key={id}
                style={{listStyle: 'none'}}
              >
                <Link to={`/auctions/${id}`} >
                  {item}
                </Link>
                <p>posted on: {`${created_at}`}</p>
              </li>
            )
          })}
        </ul>
      </main>
    );
  }
}