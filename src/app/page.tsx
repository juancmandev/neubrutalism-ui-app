'use client';

import Block from '@/components/Block';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const neubrutalismExamples = [
  {
    title: 'Mozilla: The Super-Official Family Tech Agreement',
    imageSrc: '/firefox_nb.jpg',
    imageAlt: 'Firefox Neubrutal page example',
    link: 'https://www.mozilla.org/en-US/firefox/family/',
  },
  {
    title: 'Gumroad',
    imageSrc: '/gumroad_nb.jpg',
    imageAlt: 'Gumroad Neubrutal page example',
    link: 'https://gumroad.com/',
  },
  {
    title: 'Guiacirugiacardiaca.com',
    imageSrc: '/nb_cirugia.jpg',
    imageAlt: 'Guiacirugiacardiaca.com Neubrutal page example',
    link: 'https://guiacirugiacardiaca.com/',
  },
];

export default function Home() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Your name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Your email is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='flex flex-col gap-[24px] pb-10'>
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
            <h4 className='text-5xl md:text-7xl font-semibold'>Traits</h4>
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
                  <Block className='w-5 h-5 text-lg bg-darkBlue'>N</Block>
                  <Block className='w-5 h-5 text-lg bg-softPink rotate-12'>
                    E
                  </Block>
                  <Block className='w-5 h-5 text-lg bg-yellow'>U</Block>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                  <Block className='w-5 h-5 text-lg bg-grass rotate-12'>
                    B
                  </Block>
                  <Block className='w-5 h-5 text-lg bg-purple -rotate-6'>
                    R
                  </Block>
                  <Block className='w-5 h-5 text-lg bg-sky rotate-2'>U</Block>
                  <Block className='w-5 h-5 text-lg bg-orange -rotate-12'>
                    T
                  </Block>
                  <Block className='w-5 h-5 text-lg bg-softYellow'>A</Block>
                  <Block className='w-5 h-5 text-lg bg-limon rotate-12'>
                    L
                  </Block>
                  <Block className='w-5 h-5 text-lg bg-pink'>I</Block>
                  <Block className='w-5 h-5 text-lg bg-grass rotate-12'>
                    S
                  </Block>
                  <Block className='w-5 h-5 text-lg bg-softPurple -rotate-6'>
                    M
                  </Block>
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

      <InView threshold={0.4} rootMargin='0px'>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className={`min-h-screen ${inView ? 'onView' : 'notOnView'}`}>
            <h4 className='flex items-center font-semibold text-3xl'>
              Neu
              <Block className='ml-1 mr-2 w-7 h-7 bg-pink rotate-6'>B</Block>
              rutalism examples
            </h4>
            <ul className='py-5 flex flex-col lg:flex-row gap-8'>
              {neubrutalismExamples.map((example) => (
                <li key={example.title} className='w-max'>
                  <a
                    className='group outline-none'
                    href={example.link}
                    target='_blank'>
                    <Card
                      title={example.title}
                      imageSrc={example.imageSrc}
                      imageAlt={example.imageAlt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </InView>

      <section className='max-w-[340px] flex flex-col gap-4'>
        <h1 className='flex items-center gap-2 text-2xl font-semibold'>
          <Block className='bg-purple w-7 h-7'>I</Block> want to use it!
        </h1>
        <p>
          Subscribe to the newsletter to get the latest updates about this new
          and <strong>B</strong>rutal design system!
        </p>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
          <section>
            <input
              id='name'
              required
              type='text'
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder='Your name'
              className='w-full px-4 py-2 text-lg bg-white border-2 border-black focus:border-pink outline-none'
            />
          </section>
          <section>
            <input
              id='email'
              required
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder='Your email'
              className='w-full px-4 py-2 text-lg bg-white border-2 border-black focus:border-softPurple outline-none'
            />
          </section>
          <Button type='submit' className='w-full bg-orange'>
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
}
