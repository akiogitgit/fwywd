import { useInView } from 'react-intersection-observer';

export const FadeInHigh = ({ children }) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[150%]"} delay-300 duration-[1s]`}
        >
            {children}
        </div>
    )
}