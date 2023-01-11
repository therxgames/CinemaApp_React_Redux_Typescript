import { SearchMovie, SearchPerson, SearchTV } from "types/KeywordSearch"

export interface SearchState {
    keyword:  string
    results:  Search
    loading:  boolean
    error:    string | null
}

export enum SearchActionTypes {
    FETCH_SEARCH         = 'FETCH_SEARCH',
    FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS',
    FETCH_SEARCH_ERROR   = 'FETCH_SEARCH_ERROR',
    CHANGE_SEARCH        = 'CHANGE_SEARCH',
    ZEROING_SEARCH       = 'ZEROING_SEARCH',
}

export interface FetchSearchAction {
    type:    SearchActionTypes.FETCH_SEARCH
}

export interface FetchSearchSuccess {
    type:    SearchActionTypes.FETCH_SEARCH_SUCCESS
    payload: Search
}

export interface FetchMoviesError {
    type:    SearchActionTypes.FETCH_SEARCH_ERROR
    payload: string
}

export interface ChangeSearch {
    type:    SearchActionTypes.CHANGE_SEARCH
    payload: string
}

export interface ZeroingSearch {
    type:    SearchActionTypes.ZEROING_SEARCH
}

export type Search = Array<SearchMovie & SearchTV & SearchPerson>;
export type SearchAction = FetchSearchAction | FetchSearchSuccess | FetchMoviesError | ChangeSearch | ZeroingSearch;