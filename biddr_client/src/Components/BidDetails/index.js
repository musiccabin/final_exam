import React from 'react';
import { create } from 'domain';
// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method
// or JSX tags.

 // Your React component's names must be in PascalCase. Those whose
// names do not begin with an upper case letter will interpreted
// as plain HTML tag.
export default function BidDetails(props) {
  const { price, createdAt } = props;
  return (
    <div>
      <p>${price} on {createdAt}</p>
    </div>
  );
}