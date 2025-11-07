import React from 'react'
import aboutImage from '../assets/about.webp'

const About = () => {
  return (
    <section className='max-7xl mx-auto border-b-2 mt-20' id='about'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>About</h2>
        <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20'>
            <div className='mb-8 lg:mb-0'>
                <img src={aboutImage} alt="About" className='w-full h-auto' />
            </div>
            <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'> Lolor sit amet consectetur adipisicing elit. Dignissimos earum corporis quod veritatis voluptas deserunt vitae sequi neque illum deleniti, nam, maxime voluptatum tempora consequuntur, et eum nulla atque natus distinctio id saepe iste iure unde? Natus in asperiores dignissimos magnam enim, fuga quas ex ad tempora! Fugit, officiis maxime Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam hic aliquam fugiat? Distinctio suscipit voluptas, minus a eum nihil esse exercitationem ea modi! Consectetur provident eos laborum, cumque fugiat saepe.</p>
        </div>
    </section>
  )
}

export default About
