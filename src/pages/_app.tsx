import { Modal } from '@/components/modal.component'
import { AccountProvider } from '@/context/account.context'
import { ClientProvider } from '@/context/client.context'
import { ContactProvider } from '@/context/contact.context'
import { ModalProvider } from '@/context/modal.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <AccountProvider>
        <ClientProvider>
          <ContactProvider>
              <Component {...pageProps} />
              <Modal />
          </ContactProvider>
        </ClientProvider>
      </AccountProvider>
    </ModalProvider>

  )
}
