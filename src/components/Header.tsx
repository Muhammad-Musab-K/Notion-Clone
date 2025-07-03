'use client'

import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'

function Header() {

    const { user } = useUser()
    return (
        <div className='flex justify-between p-4 bg-blue-950'>
            {user && <h4 className='text-2xl text-white'>{user?.firstName}{user?.lastName}{`'s`} Space</h4>}
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>

        </div>
    )
}

export default Header
