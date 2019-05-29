import {useState} from 'react'
import cn from 'classnames'

const ReininPair = ({pair}) => {
  const [currentPair, setData]  = useState(pair)

  const setActivePair = (pairName) => {
    console.log(pairName)
    setData({...pair, active: pairName})
  }

  console.log(pair, currentPair)

  return (
    <div className={'reininPair'}>
      <div
        className={'reininOption'}
        onClick={() => setActivePair(pair.options[0])}>
        {pair.options[0]}
      </div>
      <div
        className={cn(
          'highlight',
          {
            'leftHighlight': currentPair.active === currentPair.options[0],
            'rightHighlight': currentPair.active === currentPair.options[1]
          }
            )}
      />
      <div className={'nullOption'} onClick={() => setActivePair()} />
      <div
        className={'reininOption'}
        onClick={() => setActivePair(pair.options[1])}>
        {pair.options[1]}
      </div>
      <style jsx>{`
      .reininPair {
          display: flex;
          padding: 10px 5px;
          border-bottom: 1px solid lightgrey;
          position: relative;
      }
      .reininPair:last-child {
        border-bottom: none;
      }
      .reininOption {
        flex: 0 0 calc(50% - 20px);
        height: 40px;
        line-height: 40px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .reininOption:first-child {
        text-align: right;
        padding-right: 5px;
      }
      .reininOption:last-child {
        padding-left: 5px;
      }
      .nullOption {
        flex: 0 0 40px;
        height: 40px;
      }
      .active {
        background: antiquewhite;
      }
      .highlight {
        position: absolute;
        left: calc(50% - 15px);
        right: calc(50% - 25px);
        top: 10px;
        bottom: 10px;
        background: aliceblue;
        z-index: -1;
        transition: all .25s ease-out;
      }
      .leftHighlight {
        left: 0;
        right: calc(50% + 15px);
      }
      .rightHighlight {
        left: calc(50% + 25px);
        right: 0;
      }`}
      </style>
    </div>
  )
}

export default ReininPair
