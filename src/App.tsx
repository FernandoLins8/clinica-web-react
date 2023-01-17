import { AuthProvider } from "./contexts/auth"
import { AuthTabs } from "./Pages/AuthTabs"

function App() {
  return (
    <AuthProvider>
      <AuthTabs />
    </AuthProvider>
  )
}

export default App
