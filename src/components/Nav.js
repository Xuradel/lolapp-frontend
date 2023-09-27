import React from 'react'
import Container from './Container'
import UserMenu from './UserMenu'
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Nav = (name, setName) => {

    const navigate = useNavigate()

    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div className='cursor-pointer'
                            onClick={() => {name.name? navigate('/') : navigate('/login')}}>
                            <AiOutlineHome size={40} />
                        </div>
                        <UserMenu name={name} setName={setName}/>
                    </div>
                </Container>
            </div>
            {/* <Categories /> */}
        </div>
    )
}

export default Nav
