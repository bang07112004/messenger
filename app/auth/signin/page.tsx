import {getProviders, getSession, useSession} from 'next-auth/react'

import chat from '../../../public/assets/chat.png'
import Header from '../../Header';
import SignInComponent from './SignInComponent';
type Props = {}

async function SignInPage({}: Props) {
    const providers = await getProviders();
    const session = await getSession();
  return (
    <div className='grid justify-center'>
        <Header session={session} />
        <div>
            <img src={chat.src} alt="Profile Picture" width={700} height={700} className='rounded-full mx-2 object-cover' />
        </div>
        <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage