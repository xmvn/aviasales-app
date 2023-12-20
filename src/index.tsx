import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './Store'
import './index.scss'
import App from './Components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
