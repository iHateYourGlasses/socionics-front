import ReininData from '../data/reinin'
import ReininPair from './reininPair'

const App = () => {
  return (
    <div>
      <header className={'appHeader'}>Типировщик</header>
      <section className={'raininPairs'}>
        {
          ReininData.pairs.map((pair, pairNum) => (
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
    </div>
  )
}

export default App
