import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
export default MyApp;
