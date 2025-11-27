
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'; 
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
  <BrowserRouter>
 <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </GoogleOAuthProvider>
)
