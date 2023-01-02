import {getProviders} from 'next-auth/react'

import chat from '../../../public/assets/chat.png'
import SignInComponent from './SignInComponent';
type Props = {}

async function SignInPage({}: Props) {
    const providers = await getProviders();
  return (
    <div className='grid justify-center'>
        <div>
            <img src={chat.src} alt="Profile Picture" width={700} height={700} className='rounded-full mx-2 object-cover' />
        </div>
        <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage