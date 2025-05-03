'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6"

const team = [
  {
    name: "Itatchi",
    img: "/img/team/itatchi.jpg",
    twitter: "https://t.me/AkatsukiCalls_Sol",
  },
  {
    name: "Paradox",
    img: "/img/team/paradox.PNG",
    twitter: "https://twitter.com/",
  },
  {
    name: "Badger",
    img: "/img/team/badger.jpg",
    twitter: "https://twitter.com/",
  },
]

export default function Team() {
  return (
    <section className="w-full flex flex-col items-center gap-8 mt-16">
      <h2 className="text-[38px] text-border-White text_shadow">MEET THE TEAM</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center w-full px-4">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-4 bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-4 box_shadow">
            <div className="relative dashoboard__teamimg w-full">
              <img src={member.img} alt={member.name} className="border-[3px] border-akatsukiRed rounded-md w-full" />
              <p className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 text-white text-content bg-bgColor border border-akatsukiRed px-3 py-1 rounded-md box_shadow">
                {member.name}
              </p>
            </div>
            <Link
              href={member.twitter}
              className="text-borderYellow border border-border-akatsukiRed rounded-lg px-4 py-2 hover:bg-[#907848] hover:text-[#132a3b] text-center flex items-center gap-2"
              target="_blank"
            >
              <FaXTwitter /> FOLLOW {member.name.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
