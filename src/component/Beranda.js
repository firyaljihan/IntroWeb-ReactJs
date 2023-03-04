import React from 'react'
import './Style.css'
class Beranda extends React.Component {
    render() {
        return (
            <section className="section header-bg-img h-100vh clippath_none flex justify-center items-center" id="home">
                <div className='flex flex-col items-center '>
                 <h1 className="text-rose-600 text-5xl px-2 py-3 font-pacifico bg-gray-100 bg-opacity-40">
                  Welcome to IntroWeb
                 </h1><br/>
                 <p className='flex justify-center text-align:center text-base  '>
                 "Hidup jarang memberi kita kesempatan untuk mengenal seseorang yang 
                 dapat memengaruhi kita begitu dalam.<br/>
                 Saya beruntung memiliki kesempatan untuk bertemu denganmu!
                 Selamat datang di hidupku!"
                 </p>
                </div>
            </section>
        )
    }
}

export default Beranda;