import Router from './routes';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
