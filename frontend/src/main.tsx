import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostsPage from './pages/PostsPage.tsx';
import UsersPage from './pages/UsersPage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  },
  {
    children: [
      {
        path: "/posts",
        element: <PostsPage/>,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
    ],
  },
], {future: {
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_skipActionErrorRevalidation: true,
  v7_relativeSplatPath: true,
},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{
    v7_startTransition: true,
  }}
/>
    </QueryClientProvider>
  </StrictMode>,
)
