import React from 'react';
import PropTypes from 'prop-types';

class LibraryView extends React.Component {
  componentWillMount() {
    this.props.fetchList();
  }

  _onCreate = () => {
    this.props.editItem(null);
    this.props.changeToEditView();
  };

  _onEdit = (id) => {
    this.props.editItem(id);
    this.props.changeToEditView();
  };

  _onShow = (id) => {
    this.props.showItem(id);
    this.props.changeToShowView();
  };

  _onDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      this.props.deleteItem(id);
    }
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
            <th scope="col" className='text-center'>actions</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.items.map(({id, title, author, price}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>{price}</td>
                <td className='text-center'>
                  <div className='btn-group'>
                    <button className='btn btn-danger' onClick={this._onDelete.bind(null, id)}>Delete</button>
                    <button className='btn btn-warning' onClick={this._onEdit.bind(null, id)}>Edit</button>
                    <button className='btn btn-primary' onClick={this._onShow.bind(null, id)}>Show</button>
                  </div>
                </td>
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
  changeToEditView: PropTypes.func,
  changeToShowView: PropTypes.func,
  showItem: PropTypes.func,
  editItem: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
  }))
};

export default LibraryView;