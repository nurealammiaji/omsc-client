import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import AuthProvider from '../providers/AuthProvider.jsx';
import AllRoutes from '../routes/AllRoutes.jsx';
import SelectionProvider from '../providers/SelectionProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectionProvider>
      <AuthProvider>
        <RouterProvider router={AllRoutes}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </SelectionProvider>
  </StrictMode>,
)
