'use client';
import { Code2 } from 'lucide-react';
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
import Yonu from '@/assets/yonu.jpg'
import Fintrack from '@/assets/fintrack.jpg'
import Weather from '@/assets/dakar_details.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600 animate-pulse" />
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">Portfolio</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='container max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
        
        {/* Hero Section */}
        <section className='py-8 md:py-12'>
          <div className='text-center'>
            <Image 
              src={Me} 
              alt='Ndeye Fatou Faye' 
              width={200} 
              height={200} 
              className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-6' 
            />
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl py-4 md:py-6'>
              Ndeye Fatou Faye
            </h1>
            <p className='text-blue-600 py-2 md:py-3 font-bold text-base md:text-lg'>
              Student in Computer Science | Aspiring Software Engineer & Full-Stack Developer
            </p>
            <div className='max-w-4xl mx-auto'>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed px-4'>
                During my three years in computer science at ESMT, I've gained strong programming skills. 
                I know several languages including Java, Python, and JavaScript, and frameworks such as 
                Next.js, React, Django, and Tailwind CSS.
              </p>
            </div>
          </div>
        </section>

        {/* Programming Languages Section */}
        <section className='py-8 md:py-12'>
          <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-center mb-8 text-gray-800'>
            Programming Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Java}
                alt="Java"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Python}
                alt="Python"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Js}
                alt="JavaScript"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className='py-8 md:py-12'>
          <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 text-gray-800'>
            Frameworks
          </h2>
          <p className='text-center text-sm md:text-base text-gray-600 mb-8 px-4'>
            Here are the frameworks I've learned and the projects I've built with them
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Next}
                alt="Next.js"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={React}
                alt="React"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Tailwind}
                alt="Tailwind CSS"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Flutter}
                alt="Flutter"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white rounded-3xl overflow-hidden">
              <Image
                src={Django}
                alt="Django"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className='py-8 md:py-12'>
          <h2 className='text-center font-bold text-xl md:text-2xl lg:text-3xl mb-8 text-gray-800'>
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project 1 - Yoonu Santé */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <Image 
                  src={Yonu} 
                  className='w-full h-48 md:h-56 lg:h-64 object-cover' 
                  alt="Yoonu santé app" 
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">React</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Django</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Yoonu Santé</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A mobile application designed to inform people about cancer vaccines in Senegal, promoting health awareness and prevention.
                </p>
              </div>
            </div>

            {/* Project 2 - Fintrack */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <Image 
                  src={Fintrack} 
                  className='w-full h-48 md:h-56 lg:h-64 object-cover' 
                  alt="Fintrack app" 
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold">Android</span>
                  <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold">Java</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Fintrack</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A mobile application to help people manage their budget effectively and track their expenses.
                </p>
              </div>
            </div>

            {/* Project 3 - Weather App */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <Image 
                  src={Weather} 
                  className='w-full h-48 md:h-56 lg:h-64 object-cover' 
                  alt="Weather app" 
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">Flutter</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-semibold">Dart</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Weather App</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A weather application providing real-time weather information for countries around the world.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12 md:mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-slate-800">
              Contact Me
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              I'd love to connect! Feel free to reach out to me for collaboration, opportunities, or just to say hello.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
              <a
                href="mailto:fayefatou1904@gmail.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-base md:text-lg font-medium"
              >
                <span>📧</span>
                fayefatou1904@gmail.com
              </a>
              
              <a
                href="https://github.com/fatou1904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-base md:text-lg font-medium"
              >
                <span>🔗</span>
                GitHub Profile
              </a>
            </div>

            <div className="mt-8 pt-6 border-t text-slate-500 text-sm">
              <p>© 2024 Ndeye Fatou Faye - Portfolio built with Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}