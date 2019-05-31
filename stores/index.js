import {createContext, useContext} from 'react'
import {useLocalStore } from 'mobx-react-lite'
import reinin from '../data/reinin'
import ReininPairs from './reininPairs'
import {observable} from "mobx";

export const storeContext = createContext(null)

export const StoreProvider = ({ children }) => {
  return <storeContext.Provider value={useLocalStore(() => globalStore)}>{children}</storeContext.Provider>
}

const createStore = () => {
  const pairs = ReininPairs()
  pairs.initialise(reinin)
  const store = observable({
    reininPairs: pairs
  })
  if( typeof window !== "undefined"){
    window.store = store
  }

  return store
}

const globalStore = createStore()

export const useStore = () => {
  const store = useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}
