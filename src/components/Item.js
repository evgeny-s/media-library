import React from 'react';
import PropTypes from 'prop-types';
import withBackButton from "../hocs/withBackButton";

const styles = {
  img: {
    maxWidth: '200px',
    maxHeight: '200px',
    width: 'auto',
  }
};

function Item({title, description, author, image, pages, price, changeView}) {
  return (
    <div>
      <div className="card mt-1">
        <div className="card-body">
          <img style={styles.img} className="card-img-top" src={image}/>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
          <p className="card-text">{author}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{pages}</p>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  onBackClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  pages: PropTypes.string,
  price: PropTypes.string
};

export default withBackButton(Item);
export {Item};