import React from 'react';
import PropTypes from 'prop-types';

import InputWithLabel from './InputWithLabel';
import withBackButton from "../hocs/withBackButton";
import fields from '../consts/formFields';

function Form({submitForm, errorText, editItemId, ...rest}) {
  return (
    <div>
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
            <button onClick={submitForm} type="button" className="btn btn-success">{editItemId ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  onBackClick: PropTypes.func,
  submitForm: PropTypes.func,
  newTitle: PropTypes.string,
  newDescription: PropTypes.string,
  newAuthor: PropTypes.string,
  newImage: PropTypes.string,
  newPages: PropTypes.string,
  newPrice: PropTypes.string,
  errorText: PropTypes.string,
  editItemId: PropTypes.number,
};

export default withBackButton(Form);
export {Form};