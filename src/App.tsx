
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import NotFound from "@/pages/NotFound"
import { useEffect } from "react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5000
    }
  }
})

function App() {
  useEffect(() => {
    // Otimização de performance
    const preloadImages = () => {
      try {
        const images = document.querySelectorAll('img[loading="lazy"]');
        if ('loading' in HTMLImageElement.prototype) {
          images.forEach(img => {
            if (img instanceof HTMLImageElement && img.dataset.src) {
              img.src = img.dataset.src;
            }
          });
        }
      } catch (error) {
        console.warn('Erro ao pré-carregar imagens:', error);
      }
    };

    // Detectar quando o navegador está ocioso para carregar recursos não críticos
    try {
      if ('requestIdleCallback' in window) {
        const idleCallbackId = requestIdleCallback(preloadImages);
        return () => cancelIdleCallback(idleCallbackId);
      } else {
        const timeoutId = setTimeout(preloadImages, 1000);
        return () => clearTimeout(timeoutId);
      }
    } catch (error) {
      console.warn('Erro ao configurar carregamento preguiçoso:', error);
      preloadImages();
    }
  }, []);

  // Prevenir modificações não autorizadas nas APIs do navegador
  useEffect(() => {
    const preventCredentialModification = () => {
      try {
        Object.defineProperty(window.navigator, 'credentials', {
          get() {
            return Object.freeze({ ...navigator.credentials });
          },
          configurable: false
        });
      } catch (error) {
        console.warn('Não foi possível proteger as credenciais:', error);
      }
    };

    if (process.env.NODE_ENV === 'production') {
      preventCredentialModification();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="app-container">
          <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
