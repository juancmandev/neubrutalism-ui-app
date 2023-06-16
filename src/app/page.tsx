import Button from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='py-20 flex flex-col gap-[150px]'>
      <section
        id='home'
        className='w-full min-h-[40vh] flex flex-col-reverse lg:flex-row gap-6 justify-between'>
        <div className='flex flex-col justify-between gap-4 max-w-[600px]'>
          <h2 className='mt-2 text-4xl font-bold'>
            Punch your users in their eyes with this{' '}
            <span className='text-pink'>Neubrutalist Design System</span>
          </h2>
          <h2 className='text-2xl font-semibold'>What is Neubrutalism?</h2>
          <p className='max-w-[500px] font-medium text-lg'>
            <strong>Ugly</strong> on purpose, Neubrutalism is a design movement
            that started in 2016. It is a reaction to the clean and minimalist
            design that dominated the web in the 2010s.
          </p>
          <Button className='bg-pink w-max'>Get Started</Button>
        </div>

        <div>
          <Image
            width={250}
            height={50}
            src='/speech_dialog.png'
            alt='Speech Dialog image saying "hey!"'
          />
        </div>
      </section>

      <div className='flex flex-col gap-[200px]'>
        <section>
          <h4 className='mb-10 text-3xl font-semibold'>Traits</h4>
          <div className='w-full flex flex-col lg:flex-row justify-between gap-2'>
            <div className='max-w-[400px] h-full flex flex-col justify-between'>
              <h5 className='text-2xl font-medium'>Ugly(ish)</h5>
              <p className='text-lg'>
                Whether you love or hate this style, it{' '}
                <strong>adds variety</strong> to the modern minimal style that
                has been popular for many years. Neubrutalism favors imagery
                that looks <strong>‘a bit off’</strong>—whether through unusual
                color or design choices. Ultimately, it catches the eye by
                standing out from modern web design trends that have come
                before.
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

        <section>
          <div className='w-full flex flex-col lg:flex-row justify-between gap-2'>
            <div className='max-w-[400px] h-full flex flex-col justify-between'>
              <h5 className='text-2xl font-medium'>Clashing colors</h5>
              <p className='text-lg'>
                This is a website trend not afraid to stand out—colors are often
                clashing but muted. It certainly <strong>doesn’t follow</strong>{' '}
                the ‘less is more’ philosophy.
              </p>
            </div>
            <div className='self-center'>
              <Image
                className='mt-2'
                width={600}
                height={50}
                src='/neubrutalism_letters.png'
                alt='Neubrualism colorful letters'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
