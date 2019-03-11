import React from 'react';
import PropTypes from 'prop-types';

class LibraryView extends React.Component {
  componentWillMount() {
    this.props.fetchList();
  }

  _onCreate = () => {
    this.props.changeView();
  };

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this._onCreate}>Create book</button>
        <table className="table mt-1">
          <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">author</th>
            <th scope="col">price</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.items.map(({id, title, author, price}) => (
              <tr key={id}>
                <th scope="row">3</th>
                <td>{title}</td>
                <td>{author}</td>
                <td>{price}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

LibraryView.propTypes = {
  fetchList: PropTypes.func,
  changeView: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
  }))
};

export default LibraryView;