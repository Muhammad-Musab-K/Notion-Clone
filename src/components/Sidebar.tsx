import React from 'react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,

    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

function Sidebar() {
    return (
        <>
            <div className=' hidden md:inline'>
                <div className='min-h-screen bg-blue-950 flex flex-col gap-3 p-6 '>
                    <Button className='bg-white' >Documents</Button>
                    <Button className='bg-white' >Documents</Button>
                    <Button className='bg-white' >Documents</Button>
                    <Button className='bg-white' >Documents</Button>
                    <Button className='bg-white' >Documents</Button>
                    <Button className='bg-white' >Documents</Button>
                </div>
            </div>
            <div className='md:hidden p-4'>
                <Sheet >
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent className="bg-white" side='left'>
                        <div className='flex flex-col gap-3 p-6 '>
                            <Button className='bg-red-100' >Documents</Button>
                            <Button className='bg-red-100' >Documents</Button>
                            <Button className='bg-red-100' >Documents</Button>
                            <Button className='bg-red-100' >Documents</Button>
                            <Button className='bg-red-100' >Documents</Button>
                            <Button className='bg-red-100' >Documents</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </>
    )
}

export default Sidebar
