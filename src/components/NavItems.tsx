"use client"
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    const isAnyOpen = activeIndex! == null

    const navRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null)
            }
        }
        document.addEventListener("keydown", handler) // handler can also be written as (e) => handler(e ) callback 

        return (
            document.removeEventListener("keydown", handler)
        )
    }, [])


    useOnClickOutside(navRef, () => setActiveIndex(null))

    return (
        <div className='flex gap-4 h-full ' ref={navRef} >
            {PRODUCT_CATEGORIES.map((category, i) => {

                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(i)
                    }
                }

                const isOpen = i === activeIndex

                return (
                    <NavItem category={category} handleOpen={handleOpen} key={category.value} isOpen={isOpen}
                        isAnyOpen={isAnyOpen} />
                )
            })}

        </div>
    )
}

export default NavItems