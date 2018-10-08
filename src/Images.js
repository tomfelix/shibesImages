import React, { Component } from 'react';

const Images = (props) => {
  if (props.isLoading) {
    return (
      <div>Ładowanie...</div>
    )
  } else {
    return (
      props.images.map(image => {
        return (
          <img key={image} src={image} alt={image} />
        )
      })
    )
  }
}

export default Images;
