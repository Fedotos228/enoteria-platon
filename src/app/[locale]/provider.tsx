'use client'

import Loader from '@/components/elements/Loader'
import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

const persistor = persistStore(store)

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClinet}>
      <Provider store={store}>
        <PersistGate
          loading={<Loader />}
          persistor={persistor}
        >
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
