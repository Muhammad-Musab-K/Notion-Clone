import React from 'react'
import { Button } from './ui/button'

function Sidebar() {
    return (
        <div className='min-h-screen '>
            <div className='bg-amber-200 p-4 md:p-6 hidden md:inline'>
                <p>Sidebar</p>
                <div className='flex flex-col gap-3'>
                    <Button className='bg-red-100' >Documents</Button>
                    <Button className='bg-red-100' >Documents</Button>
                    <Button className='bg-red-100' >Documents</Button>
                    <Button className='bg-red-100' >Documents</Button>
                    <Button className='bg-red-100' >Documents</Button>
                    <Button className='bg-red-100' >Documents</Button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
