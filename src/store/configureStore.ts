import { createStore, applyMiddleware, compose, Store } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer, RootState } from './reducers'

const configureStore = (preloadedState?: any, initialState?: RootState): Store<RootState> => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger())
    )
  );

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store;
}

export default configureStore