import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ja from 'react-intl/locale-data/ja'

import { locale, defaultLocale, messages, defaultMessage } from './views/locales'
import { configureStore, history } from './state/store'
import App from './views/App.jsx'

const { store, persistor } = configureStore()
addLocaleData([...en, ...ja])

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
        defaultMessage={defaultMessage}
      >
        <App history={history} />
      </IntlProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
