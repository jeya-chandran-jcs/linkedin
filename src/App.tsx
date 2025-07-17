
import { AuthProvider } from './context/AuthProvider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import AppRouter from './router/AppRouter'

const queryClient = new QueryClient()

function App() {


  return (

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>


  )
}

export default App
