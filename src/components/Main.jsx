import React from 'react'
import gambar from '../../public/man.png'

const Main = () => {
    const projects = [
        {
            id: 1,
            nama: "Project Koperasi (C Leanguage)",
            deskripsi: "ini adalah projek pertama saya(Anggi Permana), dan dibuat dengan sepenuh hati secara maksimal",
            link: "https://github.com/anggipermana111/koperasi-anggi-projekan-bahasa-C",
        },
        {
            id: 2,
            nama: "Project Web Movies (HTML,CSS,JavaScript)",
            deskripsi: "ini adalah projek website pertama saya(Anggi Permana), dan dibuat dengan sepenuh hati secara maksimal",
            link: "https://github.com/anggipermana111/projek-movie",
        }
    ]
    return (
        <main className=' bg-slate-900 pt-32 md:pt-0'>
            {/* Banner section */}
            <section className='sm:grid grid-cols-2 lg:px-12 lg:pt-5'>
                {/* Left */}
                <section className='flex justify-center items-center p-5'>
                    <div className='text-white font-bold text-4xl sm:text-3xl md:text-4xl flex flex-col gap-4'>
                        <div className='text-5xl sm:text-4xl md:text-5xl text-center sm:text-start'>Hallo...</div>
                        <div className='text-center sm:text-start'>I'M <span className='text-blue-700'>Anggi</span> Permana</div>
                        <p className='text-2xl sm:text-xl md:text-2xl text-slate-400 text-center sm:text-start'>
                            a front-end developer who loves intuitive,
                            clean and modern UI design.
                        </p>
                    </div>
                </section>
                {/* Right */}
                <section className='p-14'>
                    <img className='' src={gambar} alt="" />
                </section>
            </section>
            {/* Project Section */}
            <section className='pb-10 pt-4'>
                <h3 className='text-white font-bold text-4xl text-center mb-7'>My <span className='text-blue-700'>Project</span></h3>
                <div className='w-4/5 m-auto flex flex-col gap-3'>
                    {
                        projects.map((project, i) => {
                            return (
                                <a href={project.link} target='_blank'>
                                    <div key={project.id} className='flex items-center gap-6 text-white border rounded-xl px-3'>
                                        <div className='text-7xl md:text-9xl pb-3 text-slate-300/[.3] font-bold'>{i+1}</div>
                                        <div className='flex flex-col'>
                                            <div className='text-xl md:text-3xl font-bold'>{project.nama}</div>
                                            <div className='text-sm md:text-xl text-slate-400'>{project.deskripsi}</div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Main