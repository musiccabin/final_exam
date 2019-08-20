import React from 'react';
import {ReservePriceMet, CurrentPrice} from '../../helpers';

export default function AuctionDetails(props) {
  const { item, description, reservePrice, endsAt, bids } = props;
  return (
    <div>
      <h2>{item}</h2>
      <p>
        {description}
      </p>
      <p>
        Ends at: {endsAt}
      </p>
      <p>
        <small>{ReservePriceMet(reservePrice, bids)}{CurrentPrice(bids)}</small>
      </p>
    </div>
  );
}