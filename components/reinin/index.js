import ReininPair from './reininPair'
import {useStore} from './../../stores/index'
import {useObserver} from 'mobx-react-lite'

const Reinin = () => {
  const store = useStore()
  return useObserver(() => (
    <>
      <header className={'appHeader'}>Типировщик</header>
      <section className={'raininPairs'}>
        {
          store.reininPairs && store.reininPairs.data.map((pair, pairNum) => (
            <ReininPair pair={pair} key={pairNum}/>
          ))
        }
      </section>
      <style jsx>{`
        .appHeader {
          text-align: center;
          font-size: 25px;
          font-weight: bold;
          margin-top: 20px;
        }
        .raininPairs {
          margin: 15px;
        }
      `}</style>
      <style jsx global>{
        `
      * {
        font-family: helvetica;
        font-size: 16px;
      }
      `}
      </style>
    </>
  ))
}

export default Reinin
