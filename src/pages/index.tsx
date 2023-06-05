import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { accCtx } from '@/context/account.context'
import { useRouter } from 'next/router'
import { clientContext } from '@/context/client.context'
import { UserInfo } from '@/components/userInformation.component'
import { contactContext } from '@/context/contact.context'
import { RenderContacts } from '@/components/renderContacts.component'
import { modalContext } from '@/context/modal.context'
import { ClientUpdateForm } from '@/components/clientUpdate.component'
import { DeleteClientTemplate } from '@/components/clientDelete.component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { token, setToken } = accCtx()
  const { allContacts, listContacts } = contactContext() 
  const { user, retrieveClientInformation } = clientContext()
  const { modalContent, setModalContent } = modalContext()

  const router = useRouter()

  useEffect(() => {
    const checkToken = window.localStorage.getItem("@token")
    if (checkToken){
      retrieveClientInformation()
      setToken(checkToken)
      listContacts()
    }else {
      router.push("/login")
    }
  }, [])

  function logout (){
    window.localStorage.removeItem("@token")
    router.push("/login")
  }

  return (
    <div className='flex flex-col min-h-screen gap-12 px-4'>
      <button className='absolute top-0 right-2 border border-red-300 bg-red-400 rounded py-1 px-3' onClick={() => logout()}>Logout</button>
      <section className='flex flex-col gap-3'>
        <h2>User information</h2>
        <UserInfo full_name={user.full_name} email={user.email} phone={user.phone}></UserInfo>
        <button onClick={() => setModalContent(<ClientUpdateForm></ClientUpdateForm>)} className='border border-green-400 bg-green-300 rounded'>Editar usuário</button>
        <button onClick={() => setModalContent(<DeleteClientTemplate></DeleteClientTemplate>)} className='border border-red-400 bg-red-300 rounded'>Deletar Conta</button>
      </section>
      <section className='flex flex-col gap-3'>
        <h2>Contacts</h2>
        <RenderContacts list={allContacts}></RenderContacts>
      </section>
    </div>
  )
}
