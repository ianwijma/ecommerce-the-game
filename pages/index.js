import Head from 'next/head'
import { Inter } from '@next/font/google'
import dynamic from "next/dynamic";
import Link from "next/link";
const ShoppingPanel = dynamic(() => import('@/components/panels/ShoppingPanel'));
const GamePanel = dynamic(() => import('@/components/panels/GamePanel'));

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce The Game</title>
      </Head>
      <main>
          <div className='w-screen h-screen flex overflow-hidden portrait:flex-col'>
              <Link href='/shop' className='w-1/2 h-full relative group portrait:w-full portrait:h-1/2' >
                  <div className='absolute w-full h-full flex justify-center items-center bg-white/20 backdrop-blur transition-all group-hover:backdrop-blur-0'>
                      <h2 className='text-white text-2xl transition-all group-hover:text-3xl'>Great Shopping Experience</h2>
                  </div>
                  <ShoppingPanel className='w-full h-full' />
              </Link>
              <Link href='/game' className='w-1/2 h-full relative group portrait:w-full portrait:h-1/2'>
                  <div className='absolute w-full h-full flex justify-center items-center bg-white/20 backdrop-blur transition-all group-hover:backdrop-blur-0'>
                      <h2 className='text-white text-2xl transition-all group-hover:text-3xl'>New Shopping Experience</h2>
                  </div>
                  <GamePanel className='w-full h-full' />
              </Link>
          </div>
      </main>
    </>
  )
}
