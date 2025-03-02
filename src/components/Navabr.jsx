import React from 'react'

const Navabr = () => {
  return (
    <nav className='bg-slate-900 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
        <div className="logo font-bold text-2xl text-white">Vaultify</div>
      <ul>
        <li className="flex gap-4 ">
            <a className="hover:font-semibold" href="/">Home</a>
            <a className="hover:font-semibold" href="/">About</a>
            <a className="hover:font-semibold" href="/">Contact</a>
        </li>
      </ul>
      </div>

    </nav>
  )
}

export default Navabr