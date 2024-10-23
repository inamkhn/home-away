// 'use client'

// import { Amplify } from 'aws-amplify'
// import { generateClient } from 'aws-amplify/api'
// import config from './amplifyconfiguration.json'
// import { useEffect, useState } from 'react'

// export function Wrapper({ children }:{
//   children: React.ReactNode
// }) {
//   const [client, setClient] = useState(null)

//   useEffect(() => {
//     Amplify.configure(config, { ssr: true })
//     const newClient = generateClient()
//     setClient(newClient)
//   }, [])

//   if (!client) return null

//   return children
// }

// export default Wrapper

'use client'
import React from 'react'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

function Wrapper({ children }: { children: React.ReactNode }) {
  Amplify.configure({ ...awsconfig })
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default Wrapper
