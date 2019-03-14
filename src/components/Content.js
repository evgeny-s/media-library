import React from 'react';
import PropTypes from 'prop-types';

import viewConsts from './../consts/views';
import LibraryView from './../containers/LibraryView';
import Item from './../containers/Item';
import Form from './../containers/Form';

function Content({view}) {
  return (
    <div>
      {view === viewConsts.LIST && <LibraryView />}
      {view === viewConsts.EDIT && <Form />}
      {view === viewConsts.SHOW && <Item />}
    </div>
  );
}

Content.propTypes = {
  view: PropTypes.string,
};

export default Content;