
import { AuthProvider } from './context/AuthProvider'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import AppRouter from './router/AppRouter'

const queryClient= new QueryClient()

function App() {
 

  return (
    // <AuthProvider>
     
    // </AuthProvider>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
     
  )
}

export default App
