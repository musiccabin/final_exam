
import React from 'react';
import BidDetails from '../BidDetails';

export default function BidList(props) {
  let { bids } = props;
  if (!bids) {
    bids = [];
  }
  return(
    <ul
      style={{
        listStyle: 'none',
        paddingLeft: 0,
      }}
    >
      {bids.map((bid) => {
        return(
          <li key={bid.id}>
            <BidDetails
              price={bid.price}
              createdAt={bid.created_at}
            />
          </li>
        )
      })}
    </ul>
  )
}