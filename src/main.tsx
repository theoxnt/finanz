import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from "@/components/ui/sonner"
import { StrictMode } from 'react'
import { ThemeProvider } from "@/components/ui/theme-provider";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
        <Toaster />
        </ThemeProvider>
    </StrictMode>
)
