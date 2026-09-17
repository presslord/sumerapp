'use client'

import { useRouter } from "next/navigation";

export default function Head() {
  const router = useRouter();
  return (
  <div className="pb-10">
    <div className="flex justify-between rounded-xl p-4 backdrop-blur-xs shadow-xl items-center pb-2 border text-xl">
      <button className="hover:cursor-pointer hover:scale-105" onClick={() => router.push('/')}>Главная</button>
      <button className="hover:cursor-pointer hover:scale-105" onClick={() => router.push('/first')}>Кадр #1</button>
      <button className="hover:cursor-pointer hover:scale-105" onClick={() => router.push('/second')}>Кадр #2</button>
      <button className="hover:cursor-pointer hover:scale-105" onClick={() => router.push('/third')}>Кадр #3</button>
      </div>
  </div>
  )
}
