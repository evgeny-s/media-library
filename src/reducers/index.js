import {combineReducers} from 'redux';

import books from './booksReducer';
import common from './commonReducer';

export default combineReducers({books, common});