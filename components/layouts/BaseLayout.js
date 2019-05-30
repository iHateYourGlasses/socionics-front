import {StoreProvider} from './../../stores/index'

function BaseLayout(props) {
  return (
    <StoreProvider>
      {props.children}
    </StoreProvider>
  )
}

export default BaseLayout