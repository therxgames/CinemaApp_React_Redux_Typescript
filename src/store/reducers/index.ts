import { combineReducers } from 'redux';
import { user } from './user';
import { movie } from './movie';
import { movies } from './movies';
import { serial } from './serial';
import { serials } from './serials';
import { search } from './search';

export const rootReducer = combineReducers({
    user,
    movie,
    movies,
    serial,
    serials,
    search
});

export type RootState = ReturnType<typeof rootReducer>;