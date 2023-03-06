import React from 'react';

function Nav() {
  return (
    <div>
      <header className="p-4 bg-rose-400 text-white">
	<div className="container flex justify-between h-16 mx-auto ">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2 font-bold text-3xl hover:text-rose-200 hover:no-underline">
		IntroWeb
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-rose-200 text-lg hover:no-underline">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/TentangSaya" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-lg hover:text-rose-200 hover:no-underline">About Me</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/Karya" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-lg hover:text-rose-200 hover:no-underline">Portofolio</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/Kontak" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-lg hover:text-rose-200 hover:no-underline">Contact</a>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>



    </div>
  )
}

export default Nav