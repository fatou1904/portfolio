'use client';
import { Code2, Palette, Zap, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Me from '@/assets/me.jpg';
import Java from '@/assets/java.png';
import Python from '@/assets/python.jpeg'
import Js from '@/assets/js.png'
import Next from '@/assets/next.png';
import React from '@/assets/react.png'
import Flutter from '@/assets/flutter.png'
import Tailwind from '@/assets/tailwind.png'
import Django from '@/assets/django.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600 animate-pulse" />
              <h1 className="text-2xl font-bold text-slate-900"></h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className='container max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='text-center justify-center'>
          <Image src={Me} alt='moi' width={200} height={200} className='rounded-full  items-center mx-auto mb-1 justify-center' />
          <h1 className=' font-bold text-3xl py-6'>Ndeye Fatou Faye</h1>
          <p className='text-blue-600 py-3 font-bold'>Student in Computer Science | Aspiring Software Engineer & Full-Stack Developer</p>
          <h2>
            During my three years in computer science at ESMT, I've gained strong programming skills. <br/>
            I know several languages including Java, Python, and JavaScript, and frameworks such as Next.js, React, Django, and Tailwind CSS.
          </h2>
        </div>

        <div>
          <h1 className='text-xl font-bold text-center justify-center py-5'>Programming Language</h1>
          <div className="grid grid-cols-3 mt-3 gap-4 mx-auto">
                                <div className="w-48 h-48 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl mx-12 overflow-hidden">
                                  <Image
                                    src={Java}
                                    alt="Java"
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="w-48 h-48 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
                                  <Image
                                    src={Python}
                                    alt="Python"
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="w-48 h-48 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl  overflow-hidden">
                                  <Image
                                    src={Js}
                                    alt="JS"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
          </div>

        </div>

        <div>
          <h1 className='text-xl font-bold text-center justify-center py-5'>Frameworks</h1>
          <p className='text-center'>Here are the frameworks I’ve learned and the projects I’ve built with them</p>
          <div className="grid grid-cols-5 mt-3 gap-4">
                                <div className="w-40 h-40 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg  bg-white  rounded-3xl mx-5 overflow-hidden">
                                  <Image
                                    src={Next}
                                    alt="Java"
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="w-40 h-40 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl mx-2 overflow-hidden">
                                  <Image
                                    src={React}
                                    alt="Python"
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="w-40 h-40 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white  rounded-3xl mx-2 overflow-hidden">
                                  <Image
                                    src={Tailwind}
                                    alt="JS"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                 <div className="w-40 h-40 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg  bg-white rounded-3xl mx-2 overflow-hidden">
                                  <Image
                                    src={Flutter}
                                    alt="JS"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                 <div className="w-40 h-40 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg  bg-white rounded-3xl mx-2 overflow-hidden">
                                  <Image
                                    src={Django}
                                    alt="JS"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
          </div>

        </div>

        <div>
          <h1 className='text-center font-bold text-xl mt-10'>Projects</h1>
          
        </div>
        
      </main>
      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-600">
          {/* Contact Section */}
<section className="container mx-auto px-4 py-8 text-center">
  <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
  <p className="text-lg text-slate-700 mb-4">
    I’d love to connect! Feel free to reach out to me:
  </p>

  <div className="flex flex-col gap-4 items-center">
    <a
      href="mailto:your-email@example.com"
      className="text-blue-600 hover:underline"
    >
      fayefatou1904@gmail.com
    </a>
    
    <a
      href="https://github.com/fatou1904"
      target="_blank"
      className="text-blue-600 hover:underline"
    >
      GitHub
    </a>
  </div>


</section>

          </div>
        </div>
      </footer>
    </div>
  );
}