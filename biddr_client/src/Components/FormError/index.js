import React from 'react';

export default function FormError(props) {
  const { errors = [], forField } = props;
  // [
  //   {field: 'body', message: 'string'},
  //   {field: 'title', message: 'string'}
  // ]
  let filteredErrors = errors;
  if (forField) {
    filteredErrors = errors.filter(error => error.field === forField);
  }

  return(
    <ul className='form-error'>
      {filteredErrors.map((error, index) => {
        return(
          <li key={index}>
            {error.message}
          </li>
        )
      })}
    </ul>
  )
}