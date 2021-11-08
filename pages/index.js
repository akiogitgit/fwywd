import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { FadeIn } from '../components/FadeIn';
import { SlideInLeft } from '../components/SlideInLeft';
import { SlideInRight } from '../components/SlideInRight';
import { FadeInHigh } from '../components/FadeInHigh';

import logo from "../public/logo.png"
import hero from "../public/hero.png"
//import bg_about from "../public/bg-about.png"
import about_1 from "../public/about-1.png"
import about_2 from "../public/about-2.png"
import about_3 from "../public/about-3.png"
//import bg_skills from "../public/bg-skills.png"
import skill from "../public/skill.png"
import value1 from "../public/value1.png"
import value2 from "../public/value2.png"
import value3 from "../public/value3.png"
import bg_future from "../public/bg-future.png"
import future from "../public/future.png"
import { Footer } from '../components/Footer';


export default function Home() {
  const [showHeader, setShowHeader] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const visible = currPos.y > prevPos.y;
    setShowHeader(visible);
  }, []);

  return (
    <div className="overflow-hidden text-[#262c3a]">
      <Head>
        <title>fwywd</title>
        <link rel="icon" href="/logo_white.png" />
      </Head>

      <header className={`fixed top-0 z-10 bg-white bg-opacity-75 w-full flex flex-col sm:flex-row sm:justify-between duration-300
        ${showHeader ? "" : "translate-y-[-100%]"}`}>
        <a href="#top" className="m-auto sm:m-0 h-[80px] w-[200px] z-20 scale-[70%] sm:scale-[100%]">
          <Image className="translate-y-[-5px]" src={logo} loading="eager" placeholder="blur" alt="logo" />
        </a>
        <div className="flex gap-[30px] justify-center mr-[20px] sm:mt-[30px] pb-[10px] text-[18px] font-bold text-[#008c8d]">
          <a href="#about" className="nub-hover">ABOUT
            <p className="w-0 h-[1px] bg-[#008c8d] duration-300"></p>
          </a>
          <a href="#skills" className="nub-hover">SKILLS
            <p className="w-0 h-[1px] bg-[#abc2c2] duration-300"></p>
          </a>
          <a href="#values" className="nub-hover">VALUES
            <p className="w-0 h-[1px] bg-[#008c8d] duration-300"></p>
          </a>
          <a href="#future" className="nub-hover">FUTURE
            <p className="w-0 h-[1px] bg-[#008c8d] duration-300"></p>
          </a>
        </div>

        <style jsx>{`
          .nub-hover:hover p{
            width:100%;
          }
          `}</style>
      </header>

      <main id="top" className="pt-[120px] sm:pt-[80px]">
        <section className="bg-[#6bc2c3] flex flex-col lg:flex-row justify-center items-center lg:justify-between pt-[38px] pb-[27px] px-[60px]">
          <div className="flex items-center lg:ml-[] text-white">
            <div className="text-[100px] text-center lg:text-left font-black tracking-widest leading-[65px]">
              <SlideInLeft>
                <h2 className="text-[40px] lg:text-[50px]">
                  ポートフォリオ
                </h2>
              </SlideInLeft>
              <FadeInHigh>
                <h4 className="text-[30px] text-[#c5eaea] tracking-wider">
                  fwywd 一次試験
                </h4>
              </FadeInHigh>
            </div>
          </div>
          <SlideInRight>
            <Image src={hero} objectFit="contain" placeholder="blur" loading="eager" alt="hero" />
          </SlideInRight>
        </section>
        {/* <Image className="absolute top-[0px] z-[-1]" height="1000" width="1440" src="/bg-about.png" /> */}


        <section id="about" className="relativea pb-[100px] grid place-items-center" style={{ backgroundImage: "url('/bg-about.png')", backgroundSize: "cover", backgroundPosition: "center center" }}>
          {/* <div className="absolute top-0 xl:top-[-30px] z-[-1] hidden lg:block origin-left lg:scale-x-[200%]">
            <Image src={bg_about} placeholder="blur" loading="eager" />
          </div> */}
          <FadeIn>
            <h3 className="pt-[50px] text-[30px] font-black tracking-wider">
              私たちについて
              <span className="ml-[20px] text-[#008c8d] text-[20px]">
                ABOUT
              </span>
            </h3>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-[40px] lg:gap-[60px] py-[40px]">
            <FadeIn>
              <div className="flex flex-col text-center w-[300px]">
                <Image src={about_1} objectFit="contain" placeholder="blur" loading="eager" alt="about-1" />
                <h4 className="text-[#008c8d] text-[25px] font-bold py-[20px]">趣味</h4>
                <p>趣味は筋トレです。ここ数か月筋トレを週６で行っており、一回の時間が１時間程度行っています。</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col text-center w-[300px]">
                <Image src={about_2} objectFit="contain" placeholder="blur" loading="eager" alt="about-1" />
                <h4 className="text-[#008c8d] text-[25px] font-bold py-[20px]">好きな食べ物</h4>
                <p>好きな食べ物は鶏肉です。鶏肉の中でもタンパク質の量が多い、ささみ、鶏むね肉が好きです。</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col text-center w-[300px]">
                <Image src={about_3} objectFit="contain" placeholder="blur" loading="eager" alt="about-1" />
                <h4 className="text-[#008c8d] text-[25px] font-bold py-[20px]">性格</h4>
                <p>継続力があり、集中力が高いです。一度自分で決めたことは、必ずやり通します。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>


        <section id="skills" className="relative pb-[120px] flex flex-col justify-center items-center translate-y-[-100px]" style={{ backgroundImage: "url('/bg-skills.png')", backgroundSize: "cover" }}>
          {/* <div className="absolute top-[0px] z-[-1] origin-top scale-[500%] sm:scale-[400%] md:scale-[300%] lg:scale-100 lg:scale-x-[200%] ">
            <Image src={bg_skills} objectFit="contain" placeholder="blur" loading="eager" alt="bg-skill" />
          </div> */}
          <SlideInRight>
            <h3 className="flex flex-col lg:flex-row text-center text-[30px] font-bold tracking-widest translate-y-[100px] lg:translate-y-[80px] lg:translate-x-[80px]">
              スキル
              <span className="lg:ml-[20px] text-[#008c8d] text-[20px] tracking-wide ">
                SKILLS
              </span>
            </h3>
          </SlideInRight>

          <div className="flex flex-col justify-center items-center lg:flex-row gap-[30px]">
            <SlideInLeft>
              <div className="mt-[165px] grid place-items-center mx-20 lg:mx-0 ">
                <Image src={skill} objectFit="contain" placeholder="blur" loading="eager" alt="skill" />
              </div>
            </SlideInLeft>

            <div className="grid place-items-center mt-[120px] w-[90%] lg:w-[550px]">
              <SlideInRight>
                <p className="mx-20 lg:mx-0 text-[17px] mb-[15px]">
                  基本情報技術者試験　Python3エンジニア認定基礎試験　C言語:半年 Python:半年 HTML、CSS、
                  JavaScript:２カ月 JavaScript(React、Next.js、Gatsby、Node) Tailwind css
                  ChakraUI Bootstrap TypeScript git Linux<br /><br />
                  触ったことがある(jQuery、SQL、Firebase、WordPress、Photopea、illustrator、GraphQL)
                </p>
              </SlideInRight>

              <SlideInRight>
                <div className="grid place-items-center w-[500px] h-[290px]">
                  <div className="flex flex-col justify-center gap-[30px] ml-[10px] lg:ml-0 scale-[80%] lg:scale-100 bg-white p-[20px] text-[#008c8d] text-[20px]">
                    <div>
                      <h4>
                        フロント
                      </h4>
                      <div className="flex">
                        <div className="relative w-[400px] h-[20px] bg-[#c5eaea] rounded-xl">
                          <div className="absolute top-0 left-0 w-[360px] h-[20px] bg-[#2bb9ba] rounded-l-xl"></div>
                        </div>
                        <h4 className="ml-[20px] translate-y-[-5px]">90%</h4>
                      </div>
                    </div>

                    <div>
                      <h4>
                        サーバー
                      </h4>
                      <div className="flex">
                        <div className="relative w-[400px] h-[20px] bg-[#c5eaea] rounded-xl">
                          <div className="absolute top-0 left-0 w-[30px] h-[20px] bg-[#2bb9ba] rounded-l-xl"></div>
                        </div>
                        <h4 className="ml-[20px] translate-y-[-5px]">10%</h4>
                      </div>
                    </div>

                    <div>
                      <h4>
                        データベース
                      </h4>
                      <div className="flex">
                        <div className="relative w-[400px] h-[20px] bg-[#c5eaea] rounded-xl">
                          <div className="absolute top-0 left-0 w-[8px] h-[20px] bg-[#2bb9ba] rounded-l-xl"></div>
                        </div>
                        <h4 className="ml-[20px] translate-y-[-5px]">2%</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>


        <section id="values" className="mt-[150px] grid place-items-center">
          <FadeIn>
            <h2 className="flex flex-col lg:flex-row text-center text-[30px] font-bold tracking-widest">
              価値観
              <span className="lg:ml-[20px] text-[20px] text-[#008c8d] tracking-wider">
                VALUES
              </span>
            </h2>
          </FadeIn>
          <div className="mt-[40px] flex flex-col lg:flex-row text-center bg-white rounded-xl">
            <FadeIn>
              <div className="my-[30px]">
                <div className="flex flex-col w-[350px] lg:border-r-2 border-[#c5eaea]">
                  <Image src={value1} objectFit="contain" placeholder="blur" loading="eager" alt="value1" />
                  <h3 className="text-[18px] font-bold mt-[30px] mb-[15px]">
                    価値観01
                  </h3>
                  <p className="mx-[40px]">
                    お金について。今は学生なので、大人になった時との価値観が異なると思います。
                    また、時間の価値も異なり、大人になると自分の時間が取れなくなると思います。
                    なので、学生の時に稼いだお金は、学生のうちにある程度使いたいと思っています。
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="my-[30px]">
                <div className="flex flex-col w-[350px] lg:border-r-2 border-[#c5eaea]">
                  <Image src={value2} objectFit="contain" placeholder="blur" loading="eager" alt="value2" />
                  <h3 className="text-[18px] font-bold mt-[30px] mb-[15px]">
                    価値観02
                  </h3>
                  <p className="mx-[40px]">
                    食事について。私は食事に関して美味しいもの(甘すぎるもの、味が濃いもの)を
                    食べたいという意欲があまりなく、２口だけでいいと思うようになりました。
                    なぜなら今この瞬間の幸せよりも、今後の自分の体のほうが大事だからと思うようになったからです。
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="my-[30px]">
                <div className="flex flex-col w-[350px]">
                  <Image src={value3} objectFit="contain" placeholder="blur" loading="eager" alt="value3" />
                  <h3 className="text-[18px] font-bold mt-[30px] mb-[15px]">
                    価値観03
                  </h3>
                  <p className="mx-[40px]">
                    他人のために自分が犠牲になることに価値観を感じていて、他人から褒められるために行動していることが
                    たまにあります。自分自身あまり良い人ではないと
                    わかっていて、だからといってそれを理由に良い人になることを放棄したくないと思っています。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>


        <section id="future" className="relative pb-[50px]">
          <div className="absolute top-[-290px] z-[-1] origin-top scale-[500%] lg:scale-[200%]">
            <Image src={bg_future} objectFit="contain" loading="eager" placeholder="blur" alt="future" />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[40px]">
            <SlideInLeft>
              <div className="ml-[5%] text-center w-[90%] lg:w-[510px]">
                <h2 className="mt-[60px] text-[30px] font-bold text-center lg:text-left tracking-widest">
                  3年後にやりたいこと
                  <span className="ml-[20px] text-[20px] text-[#008c8d]">
                    FUTURE
                  </span>
                </h2>
                <p className="mt-[30px]">
                  今は大学２年生なので、３年後は大学を卒業しています。なので、就活を無双してみたいです。
                  あとは、色々なすごい人に沢山出会い、その人たちが何をしているかを知りたいです。
                  欲を言えば大企業に入って、人脈を広げたいです。そして、良い旅館で仕事をして、
                  その旅館代よりも稼いで楽しい生活を送りたいです。
                  また、最新のスマホやアイテムを全て買い、時代の流行にいち早く乗っていきたいです。
                  今の友達とも仲がよく、休日に会いに行く関係でいて欲しいです。
                  運動する時間があり、休日に卓球、テニス、バドミントンなどを時折したいです。
                  筋トレや、読書をする習慣がずっと続いて欲しいです。
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="lg:mt-[70px]">
                <Image src={future} objectFit="contain" loading="eager" placeholder="blur" alt="future" />
              </div>
            </SlideInRight>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
