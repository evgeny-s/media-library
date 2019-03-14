import React from 'react';
import PropTypes from 'prop-types';

import InputWithLabel from './InputWithLabel';

const fields = [
  'Title', 'Author', 'Image', 'Description', 'Pages', 'Price',
];

function Form({changeView, submitForm, errorText, ...rest}) {
  return (
    <div>
      <button className="btn btn-primary" onClick={changeView}>{'<'} Back</button>
      <div className='mt-1'>
        <div>{errorText}</div>
        <form>
          {
            fields.map((value, index) => (
              <InputWithLabel
                key={index}
                label={value}
                value={rest[`new${value}`]}
                onChange={rest.onInputChanged.bind(null, value)}
              />
            ))
          }
          <div className='text-right'>
            <button onClick={submitForm} type="button" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  changeView: PropTypes.func,
  submitForm: PropTypes.func,
  newTitle: PropTypes.string,
  newDescription: PropTypes.string,
  newAuthor: PropTypes.string,
  newImage: PropTypes.string,
  newPages: PropTypes.string,
  newPrice: PropTypes.string,
  errorText: PropTypes.string,
};

export default Form;