import {observable} from "mobx"

const ReininPair = () => {
  const pair = observable({
    data: [],
    activeSign: '',
    setActiveSign: (newSign) => {
      pair.activeSign = newSign
    },
    initialize: (initData) => {
      pair.data = initData
    }
  })

  return pair
}

const ReininPairs = () => {
  const pairs = observable({
    data: [],
    initialise: (data) => {
      data.pairs.forEach(pair => {
        const currentPair = ReininPair()
        currentPair.initialize(pair.options)
        pairs.data.push(currentPair)
      })
    }
  })
  return pairs
}

export default ReininPairs