'use client';

import Block from '@/components/Block';
import Button from '@/components/Button';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

export default function Home() {
  return (
    <div className='flex flex-col gap-[100px]'>
      <InView threshold={0.5} rootMargin='20px'>
        {({ inView, ref }) => (
          <section
            id='home'
            ref={ref}
            className={`w-full min-h-[calc(100vh-136px)] py-20 h-full flex flex-col-reverse lg:flex-row gap-6 justify-between items-center ${
              inView ? 'onView' : 'notOnView'
            }`}>
            <div className='flex flex-col justify-center gap-8 max-w-[600px]'>
              <h2 className='mt-2 text-4xl font-bold'>
                Punch your users in their eyes with this{' '}
                <span className='text-pink'>Neubrutalist Design System</span>
              </h2>
              <h2 className='text-2xl font-semibold'>What is Neubrutalism?</h2>
              <p className='max-w-[500px] font-medium text-lg'>
                <strong>Ugly</strong> on purpose, Neubrutalism is a design
                movement that started in 2016. It is a reaction to the clean and
                minimalist design that dominated the web in the 2010s.
              </p>
              <Button className='bg-pink w-max'>Get Started</Button>
            </div>

            <div>
              <Image
                width={250}
                height={50}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src='/speech_dialog.png'
                alt='Speech Dialog image saying "hey!"'
              />
            </div>
          </section>
        )}
      </InView>

      <InView threshold={1} rootMargin='0px'>
        {({ inView, ref }) => (
          <section className={`${inView ? 'onView' : 'notOnView'}`} ref={ref}>
            <h4 className='text-5xl md:text-9xl font-semibold'>Traits</h4>
          </section>
        )}
      </InView>

      <InView threshold={0.8} rootMargin='20px'>
        {({ inView, ref }) => (
          <section
            id='ugli(ish)'
            ref={ref}
            className={`min-h-screen flex flex-col justify-center ${
              inView ? 'onView' : 'notOnView'
            }`}>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-2'>
              <div className='max-w-[400px] h-full flex flex-col justify-between'>
                <h5 className='text-2xl font-medium'>Ugly(ish)</h5>
                <p className='text-lg'>
                  Whether you love or hate this style, it{' '}
                  <strong>adds variety</strong> to the modern minimal style that
                  has been popular for many years. Neubrutalism favors imagery
                  that looks <strong>‘a bit off’</strong>—whether through
                  unusual color or design choices. Ultimately, it catches the
                  eye by standing out from modern web design trends that have
                  come before.
                </p>
              </div>
              <div className='max-w-[500px] h-[250px]'>
                <header className='w-full h-10 flex items-center px-4 gap-2 bg-pink rounded-t border-4 border-black'>
                  <div className='w-5 h-5 border-4 border-black rounded-full' />
                  <div className='w-5 h-5 border-4 border-black rounded-full' />
                  <div className='w-5 h-5 border-4 border-black rounded-full' />
                </header>
                <div className='px-5 pt-12 w-full h-full flex flex-col gap-4 bg-white rounded-b border-4 border-black border-t-0'>
                  <h1 className='font-bold text-5xl'>Look at me!</h1>
                  <p className='text-xl'>
                    do not hesitate trying <strong>new things</strong>!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      <InView threshold={0.8} rootMargin='20px'>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className={`min-h-screen flex flex-col justify-center ${
              inView ? 'onView' : 'notOnView'
            }`}>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>
              <div className='max-w-[400px] h-full flex flex-col justify-between'>
                <h5 className='text-2xl font-medium'>Clashing colors</h5>
                <p className='text-lg'>
                  This is a website trend not afraid to stand out—colors are
                  often clashing but muted. It certainly{' '}
                  <strong>doesn’t follow</strong> the ‘less is more’ philosophy.
                </p>
              </div>
              <div className='self-center flex gap-5 md:gap-3'>
                <div className='self-center flex flex-col md:flex-row gap-3'>
                  <Block className='bg-darkBlue'>N</Block>
                  <Block className='bg-softPink rotate-12'>E</Block>
                  <Block className='bg-yellow'>U</Block>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                  <Block className='bg-grass rotate-12'>B</Block>
                  <Block className='bg-purple -rotate-6'>R</Block>
                  <Block className='bg-sky rotate-2'>U</Block>
                  <Block className='bg-orange -rotate-12'>T</Block>
                  <Block className='bg-softYellow'>A</Block>
                  <Block className='bg-limon rotate-12'>L</Block>
                  <Block className='bg-pink'>I</Block>
                  <Block className='bg-grass rotate-12'>S</Block>
                  <Block className='bg-softPurple -rotate-6'>M</Block>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      <InView threshold={0.8} rootMargin='20px'>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className={`min-h-screen flex flex-col justify-center ${
              inView ? 'onView' : 'notOnView'
            }`}>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>
              <div className='max-w-[400px] h-full flex flex-col justify-between'>
                <h5 className='text-2xl font-medium'>No gradients</h5>
                <p className='text-lg'>
                  This has been a huge trend over the past years, but
                  neubrutalism favors flat colors in an almost pop-art style.
                </p>
              </div>
              <div className='flex gap-5'>
                <Block className='bg-orange w-[100px] h-[100px] text-7xl font-semibold'>
                  !
                </Block>
                <Block className='bg-pink w-[100px] h-[100px] text-7xl font-semibold rotate-6'>
                  ?
                </Block>
              </div>
            </div>
          </section>
        )}
      </InView>
    </div>
  );
}
