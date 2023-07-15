import React from 'react'
import {LuCopyright} from 'react-icons/lu'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center gap-1 py-3 text-white bg-slate-950 border-t'>
        <LuCopyright/>
        <span>Copyright By Anggi Permana 2023</span>
      </footer>
  )
}

export default Footer