import Image from 'next/image';
import { FadeIn } from '../components/FadeIn';

import logo_white from "../public/logo_white.png"
import twitter from "../public/twitter.png"
import facebook from "../public/facebook.png"

export const Footer = () => {
    return (
        <footer className="py-[40px] flex flex-col items-center justify-center w-full bg-black text-white">
            <FadeIn>
                <h4 className="hidden lg:block text-[14px] tracking-wider font-mono">CREATED BY
                    <span className="ml-[20px] text-[20px] tracking-wide font-black">
                        田中 明雄
                    </span>
                </h4>
            </FadeIn>

            <div className="block lg:hidden text-[14px] text-center space-y-6">
                <FadeIn>
                    <h4>お問い合わせ 　 助成金について</h4>
                </FadeIn>
                <FadeIn>
                    <h4>特定商取引法に基づく表記 　 プライバシーポリシー</h4>
                </FadeIn>
            </div>
            <FadeIn>
                <div className="mb-[30px]">
                    <Image src="/logo-white.png" width="100" height="200" objectFit="contain" loading="eager" alt="logo_white" />
                </div>
            </FadeIn>
            <FadeIn>
                <div className="flex gap-[20px] scale-75">
                    <Image className="hover:animate-pulse duration-300" src={twitter} objectFit="contain" loading="eager" placeholder="blur" alt="logo_white" />
                    <Image className="hover:animate-pulse" src={facebook} objectFit="contain" loading="eager" placeholder="blur" alt="logo_white" />
                </div>
            </FadeIn>
            <FadeIn>
                <h4 className="mt-[25px] text-[14px] font-mono tracking-widest">&copy;2021 KIKAGAKU</h4>
            </FadeIn>
        </footer>
    )
}