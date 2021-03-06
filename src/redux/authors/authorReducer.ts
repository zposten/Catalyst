import * as types from './types'
import {InitialState} from '../rootState'
import {AuthorAction} from '../'

export function authorReducer(state = InitialState.authors, action: AuthorAction) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors

    default:
      return state
  }
}