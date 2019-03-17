import React from 'react';

const withBackButton = (WrappedComponent) => ({onBackClick, ...rest}) => (
  <React.Fragment>
    <button className="btn btn-primary" onClick={onBackClick}>{'<'} Back</button>
    <WrappedComponent {...rest}/>
  </React.Fragment>
);

export default withBackButton;