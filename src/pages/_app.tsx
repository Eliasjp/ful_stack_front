import { AccountProvider } from '@/context/account.context'
import { ClientProvider } from '@/context/client.context'
import { ContactProvider } from '@/context/contact.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <ClientProvider>
        <ContactProvider>
          <Component {...pageProps} />
        </ContactProvider>
      </ClientProvider>
    </AccountProvider>

  )
}
