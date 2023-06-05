import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LoginForm } from "../components/LoginForm.component"

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <div className='min-h-screen flex justify-center'>
        <div className='w-fit lg:w-2/5
            h-fit
            px-8 py-20 lg: px-0
            m-auto
            flex flex-col
            items-center gap-8
            border border-gray-500 rounded-2xl
            bg-gray-200'
        >
            <h1 className=''>Login</h1>
            <LoginForm />
        </div>
    </div>
  )
}
