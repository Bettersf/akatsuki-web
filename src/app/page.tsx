"use client"

import Team from './components/team'
import Image from 'next/image'
import ScholashipBtn from './component/ScholashipBtn'
import Link from 'next/link'
import assets from './util/images'
import { FaAlignJustify, FaPlus, FaMinus, FaXTwitter } from "react-icons/fa6"
import { useState, useEffect } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import { Pagination, Keyboard, Navigation } from 'swiper/modules'

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [selected, setSelected] = useState("membership");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemClasses = {
    base: "py-0 w-full ",
    title: "text-border-akatsukiRed text-content sm:text-title w-full text-white data-[open=true]:text-border-akatsukiRed text_shadow",
    trigger: "px-2 py-0 rounded-lg h-14 flex justify-between items-center",
    indicator: "text-border-akatsukiRed",
    content: "text-small px-2",
  };

   return (
  <div className="w-full min-h-screen font-ShPinscher bg-transparent relative">
    {/* Background overlay */}
    <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Header */}
      <div className={`w-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'}`}>
        <div className='w-5/6 md:w-2/3 flex justify-between mt-4 h-[40px]'>
          <ScholashipBtn content="Send a Message" url="/contact" />
          <div className='hidden md:flex justify-between gap-6 text-white text-content'>
            <a href="#mint" className='hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200'>
             Mint
             </a>
            <span className="hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200 opacity-50 cursor-not-allowed">
            Casino (TBA)
            </span>
            <Link href="https://x.com/UnleashedFNF" className='hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200'>Twitter</Link>
            <Link href="https://t.me/AkatsukiCalls_Sol" className='hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200'>Telegram</Link>
            <a
            href="/img/Akatsuki-wp.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200"
           >
           Whitepaper
          </a>
          </div>
          <div
            onClick={() => setOpen(!isOpen)}
            className='flex md:hidden justify-center items-center bg-white p-3 rounded-[10px] border-[1px] border-[#FF0000] w-[32] sm:w-[50px] text-black hover:bg-btnYellow cursor-pointer'
          >
            <FaAlignJustify className="w-[16px] h-[16px]" />
          </div>
          {isOpen && (
            <div className='absolute w-full bg-black bg-opacity-90 top-[4.6rem] left-0 p-4 text-white flex md:hidden flex-col gap-4 z-20'>
              <a href="#mint" className='hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200'>
             Mint
             </a>
              <span className="hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200 opacity-50 cursor-not-allowed">
            Casino (TBA)
            </span>
              <Link href="https://x.com/UnleashedFNF" className='text-center hover:bg-[#907848] duration-300'>Twitter</Link>
              <Link href="https://t.me/AkatsukiCalls_Sol" className='text-center hover:bg-[#907848] duration-300'>Telegram</Link>
              <a
            href="/img/Akatsuki-wp.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-4 hover:border-[#FF0000] pb-1 duration-200"
           >
           Whitepaper
          </a>
            </div>
          )}
        </div>
      </div>

      {/* Logo */}
      <div className='pt-[100px] w-full flex justify-center items-center relative z-10 animate-fade-in'>
        <div className='w-full md:w-4/5 flex justify-center'>
          <img
            src='/img/KongzDAObySolKongzV2-noBG.png'
            alt='Akatsuki Logo'
            className='drop-shadow-[0_0_12px_white] glitch-logo'
          />
        </div>
      </div>

      {/* NFT Introduksjon */}
      <div className='w-full flex flex-col justify-between items-center gap-20 relative z-10 mt-12 px-4'>
        <p className='text-white text-content text-center max-w-3xl'>
          Akatsuki Unleashed is an exclusive collection of 10,000 unique NFTs. Owning one of these NFTs grants you access to the private Akatsuki FNF group—an elite "trench group" of seasoned crypto traders. This community offers insights, strategies, and networking opportunities for those looking to elevate their crypto trading to the next level.
        </p>
        <p className='text-border-akatsukiRed text-title text-center max-w-xl'>
         Mint your Akatsuki Unleashed Nft <a href="#mint" className='text-white underline'>Here</a>
        </p>

        {/* Info-boks */}
        <div className='w-full max-w-3xl border-[4px] border-akatsukiRed rounded-[10px] p-[30px] text-white text-content bg-black bg-opacity-40 backdrop-blur'>
          <p className="mb-4 font-bold">Dear Trenchers</p>
          <p className="mb-4">The Akatsuki Unleashed NFT Collection grants exclusive access to the Private Akatsuki FNF Group, an elite "trench group" of crypto traders.</p>
          <p className="mb-4 font-bold">Membership Nfts</p>
          <p className="mb-4">These NFTs unlock membership to a high-caliber, members-only community where top traders share exclusive insights, strategies, and market analysis.</p>
          <p className="mb-4 font-bold">New Art</p>
          <p className="mb-4">Inspired by the iconic Akatsuki, this group offers unparalleled networking and trading opportunities for serious investors.</p>
          <p>Secure your NFT pack to join the trenches and elevate your crypto game!</p>
        </div>
  {/* your mint content */}
</div>

 <div id="mint" className="w-full flex justify-center px-4 mt-10">
  <div className="relative w-full max-w-3xl border-[4px] border-akatsukiRed rounded-[10px] overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-[url('/img/12.png')] bg-cover bg-center z-0"></div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

    {/* Content */}
    <div className="relative z-20 p-6 text-white backdrop-blur-lg flex flex-col items-center gap-6">
      <h3 className="text-3xl sm:text-4xl font-bold text-center">Mint Akatsuki Unleashed NFTs</h3>

      <p className="text-sm text-white opacity-70 mt-1">Select collection</p>

      {/* Selection buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setSelected("membership")}
          className={`px-6 py-2 text-sm sm:text-base font-bold rounded-lg transition-all duration-200 ${
            selected === "membership"
              ? "bg-white text-black shadow"
              : "border border-red-600 text-white hover:bg-red-900"
          }`}
        >
          Akatsuki NFT
        </button>
        <button
          onClick={() => setSelected("1/1")}
          className={`px-6 py-2 text-sm sm:text-base font-bold rounded-lg transition-all duration-200 ${
            selected === "1/1"
              ? "bg-white text-black shadow"
              : "border border-red-600 text-white hover:bg-red-900"
          }`}
        >
          1/1 Legendary
        </button>
      </div>

      {/* Image */}
      <div className="rounded-lg p-1">
        <img
          src={selected === "membership" ? "/img/og.png" : "/img/legendary.png"}
          alt={selected === "membership" ? "Akatsuki NFT" : "Legendary NFT"}
          className="w-[550px] rounded-md shadow-lg border-4 border-red-900"
        />
      </div>

      {/* Mint button */}
      <a
        href={
          selected === "membership"
            ? "https://launchmynft.io/sol/16225"
            : "https://launchmynft.io/sol/16223"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[550px]"
      >
        <button className="w-full py-4 mt-4 bg-red-700 hover:bg-red-900 text-white text-lg font-bold rounded-xl shadow-lg">
          {selected === "membership" ? "Mint Akatsuki Unleashed" : "Mint 1/1 Legendary"}
        </button>
      </a>

      <span className="animate-pulse text-lg sm:text-xl font-bold text-white">
        Mint is Live
      </span>

      <div className="text-center text-sm text-white opacity-80">
        Requirement: {selected === "membership" ? "0.3 SOL" : "1 SOL"}
      </div>
    </div>
  </div>
</div>

       {/* Legg til bildet her */}
        <div className="w-full flex justify-center my-8">
          <img src='/img/unleasheds.gif' alt="Static banner" className="max-w-full rounded-lg shadow-lg" />
        </div>
        {/* Rarity */}
        <div className='w-full max-w-4xl border-[4px] border-akatsukiRed rounded-[10px] p-6 flex flex-col items-center gap-6 text-white bg-black bg-opacity-40 backdrop-blur'>
          <h2 className='text-[38px] text_shadow'>RARITY</h2>
          <p className='text-center'>Each NFT is algorithmically generated by combining 96+ unique traits across categories.</p>

          <div className='flex flex-col md:flex-row gap-4 w-full'>
            <div className='flex-1'>
              <p className='text-title mb-2'>Type</p>
              <table className='w-full'>
                <tbody>
                  <tr className="odd:bg-red-900"><td className='p-1'>10,000</td><td>Total Akatsuki Unleashed</td></tr>
                  <tr className="odd:bg-red-900"><td className='p-1'>10</td><td>1/1 Legendary Akatsukis</td></tr>
                </tbody>
              </table>
            </div>
            <div className='flex-1'>
              <p className='text-title mb-2'>Variation</p>
              <table className='w-full'>
                <tbody>
                  <tr className="odd:bg-red-900"><td className='p-1'>Bodies</td><td>Clothing</td></tr>
                  <tr className="odd:bg-red-900"><td className='p-1'>Eyes</td><td>Hats</td></tr>
                  <tr className="odd:bg-red-900"><td className='p-1'>Hair</td><td>Mouth</td></tr>
                  <tr className="odd:bg-red-900"><td className='p-1'>Hair Back Layers</td><td>Background</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Swiper - NFT Showcase */}
        <h2 className='text-[38px] text-border-White text_shadow'>Gallery</h2>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          grabCursor={true}
          keyboard={{ enabled: true }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Keyboard, Navigation, Pagination]}
          className="mySwiper w-full max-w-5xl"
        >
          {assets.map((val, index) => (
            <SwiperSlide key={val.url}>
              <div className='img_wraper relative'>
                <img src={val.url} alt={val.title} className='rounded-[15px] border-6 border-akatsukiRed pink_shadow' />
                <div className='absolute w-full flex justify-center items-center bottom-[-25px]'>
                  <button className='pink_shadow text-white rounded-[10px] border-[4px] border-akatsukiRed px-4 bg-bgColor text-[18px] sm:text-[38px]'>
                    {val.title}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Legg til bildet her */}
        <div className="w-full flex justify-center my-8">
          <img src='https://amaranth-reasonable-bison-352.mypinata.cloud/ipfs/bafybeigoql64dbyt2rfbnkewczgu7kl6zrljsvdns3r7rxyf3aswiskf7a' alt="Static banner" className="max-w-full rounded-lg shadow-lg" />
        </div>

        <Team />

        {/* FAQ */}
        <div className='w-full sm:w-2/3'>
          <h2 className='text-[45px] text-border-akatsukiRed text_shadow mb-4'>FAQ</h2>
          <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 w-full"
            variant="shadow"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="how can i join Akatsuki Unleashed"
              title="HOW CAN I JOIN AkATSUKI UNLEASHED"
              indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
              className='border-b-4 border-akatsukiRed'
            >
              <p className='text-content text-white'>
                You can acquire a Akatsuki Nft on <Link href="https://magiceden.io/marketplace/" className='text-border-akatsukiRed underline'>Magic Eden</Link>, <Link href="https://solsea.io" className='text-akatsukiRed underline'>SolSea</Link>, or join via <Link href="/contact" className='text-border-akatsukiRed underline'>Apply Membership</Link>.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              title="WHAT IS THE Akatsuki Unleashed telegram channel?"
              indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
              className='border-b-4 border-akatsukiRed'
            >
              <p className='text-content text-white'>The Akatsuki Unleashed Telegram channel is a Private elite "trench group" of crypto traders</p>
            </AccordionItem>
            <AccordionItem
              key="3"
              title="WHAT'S NEXT"
              indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
              className='border-b-4 border-akatsukiRed'
            >
              <p className='text-content text-white'>Watch Itatchis <Link href="https://x.com/UnleashedFNF" className='text-border-akatsukiRed underline'>Twitter</Link> for upcoming plans.</p>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer */}
        <div className='flex flex-col justify-center items-center gap-1 py-6'>
          <ScholashipBtn content="JOIN THE GANG" url="https://magiceden.io/marketplace/" />
          <Link href="http://creativecommons.org/publicdomain/zero/1.0/" className='mt-6'>
            <img src='https://licensebuttons.net/p/zero/1.0/88x31.png' alt='cc0' />
          </Link>
          <p className='text-White text-sm text-center max-w-md'>
            The Akatsuki Unleashed Team has waived all copyright and related or neighboring rights to Akatsuki nfts.
          </p>
        </div>
      </div>
      <div className='fixed bottom-4 right-4 z-50'>
        <iframe
         src="https://open.spotify.com/embed/track/1Ju2lYlvXnvXe3r3QC9sJH"
         width="300"
         height="80"
         frameBorder="0"
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
         loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
