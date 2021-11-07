import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import Image from 'next/image'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(true);

    useScrollPosition(({ prevPos, currPos }) => {
        const visible = currPos.y > prevPos.y;
        setShowMenu(visible);
    }, []);

    return (
        <header className={`fixed top-0 z-10 bg-white bg-opacity-50 w-full flex justify-between duration-300
        ${showMenu ? "" : "translate-y-[-100%]"}`}>
            <div className="h-[80px] overflow-hidden">
                <Image className="translate-y-[-10px]" height={100} width={200} objectFit="contain" src="/logo.png" alt="logo" />
            </div>
            <div className="flex gap-[30px] mr-[20px] mt-[30px] text-[18px] font-bold text-[#008c8d]">
                <h4>ABOUT</h4>
                <h4>SKILLS</h4>
                <h4>VALUES</h4>
                <h4>FUTURE</h4>
            </div>
        </header>
    )
}