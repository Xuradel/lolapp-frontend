import React, { useState } from 'react'
import MenuItem from './MenuItem';
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const UserMenu = (name, setName) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate()
    const toggleOpen = () => {
        setIsOpen((value) => !value);
    }

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
        name.name.setName('')
        navigate('/login')
    }

    return (
        <div className="relative">
            <div onClick={toggleOpen} className="p-4 md:py-3 md:px-2 border-[1px]
                border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer
                hover:shadow-md transition">
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    {name ? 'Welcome ' + name.name.name : 'Welcome'}
                </div>
                <div className='hidden md:block'>
                    <AiOutlineUser />
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw]
        md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            {name.name.name ? (
                                <>
                                    <MenuItem label='Scrims' onClick={() => navigate('/scout')} />
                                    <MenuItem label='Competitive' onClick={() => { }} />
                                    <MenuItem label='Scouting' onClick={() => { }} />
                                    <MenuItem label='Statistics' onClick={() => { }} />
                                    <MenuItem label='XD' onClick={() => { }} />
                                    <hr />
                                    <MenuItem label='Logout' onClick={logout} />
                                </>
                            ) : (
                                <>
                                    <MenuItem label='Login' onClick={() => navigate('/login')} />
                                    <MenuItem label='Sign up' onClick={() => navigate('/register')} />
                                </>
                            )}
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default UserMenu
