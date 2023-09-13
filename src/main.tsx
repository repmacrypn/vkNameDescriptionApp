/* eslint-disable indent */
import ReactDOM from 'react-dom/client'

import { App } from './components/App'
import { RootProvider } from './components/RootProvider'

import './styles/resourses/nullstyle.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootProvider>
    <App />
  </RootProvider>,
)
