import React from 'react';
import PropTypes from 'prop-types';

function InputWithLabel({label, value, onChange}) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" onChange={onChange} className="form-control" placeholder={label} value={value}/>
    </div>
  );
}

InputWithLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputWithLabel;