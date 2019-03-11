import React from 'react';
import PropTypes from 'prop-types';

function Form({changeView}) {
  return (
    <div>
      <button className="btn btn-primary" onClick={changeView}>{'<'} Back</button>
      <div>

      </div>
    </div>
  );
}

Form.propTypes = {
  changeView: PropTypes.func,
};

export default Form;