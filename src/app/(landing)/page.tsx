import Block from '@/components/Block';
import Button from '@/components/Button';
import Card from '@/components/Card';
import NewsLetterForm from '@/components/NewsLetterForm';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Neubrutalism UI',
  description: 'Discover a new and brutal design system!',
};

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
  return (
    <div className='flex flex-col gap-5 pb-10'>
      <section
        id='home'
        className='w-full min-h-[calc(100vh-136px)] py-10 h-full flex flex-col-reverse lg:flex-row gap-6 justify-between items-center'>
        <div className='flex flex-col justify-center gap-8 max-w-[600px]'>
          <h2 className='mt-2 text-4xl font-bold'>
            Punch your users in their eyes with this{' '}
            <span className='text-pink'>Neubrutalist Design System</span>
          </h2>
          <h2 className='text-2xl font-semibold'>What is Neubrutalism?</h2>
          <p className='max-w-[500px] font-medium text-lg'>
            Neubrutalist web design often features elements such as{' '}
            <strong>bold typography</strong>, minimalistic layouts, rough or
            unpolished aesthetics, and a focus on functionality over ornamental
            details. It embraces a certain level of imperfection and simplicity,
            challenging traditional design conventions and favoring a more
            straightforward and stripped-down approach.
          </p>
          {/* <Button className='bg-pink w-max'>Get Started</Button> */}
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

      <section>
        <h4 className='text-5xl md:text-7xl font-semibold'>Traits</h4>
      </section>

      <section
        id='ugli(ish)'
        className='min-h-[80vh] flex flex-col justify-center'>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-2'>
          <div className='max-w-[400px] h-full flex flex-col gap-4 justify-between'>
            <h5 className='text-2xl font-medium'>Ugly(ish)</h5>
            <p className='text-lg'>
              {`Neubrutalism often embraces an intentionally "ugly" or unpolished
              aesthetic. It challenges conventional notions of beauty and
              deliberately incorporates elements that might be considered
              visually unappealing or jarring by traditional design standards.`}
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

      <section className='min-h-[80vh] flex flex-col justify-center'>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>
          <div className='max-w-[400px] h-full flex flex-col gap-4 justify-between'>
            <h5 className='text-2xl font-medium'>Clashing colors</h5>
            <p className='text-lg'>
              Neubrutalist designs can evoke a sense of dynamism, energy, and
              even discomfort. It disrupts expectations and draws attention to
              the visual impact of contrasting hues.
            </p>
          </div>
          <div className='self-center flex gap-5 md:gap-3'>
            <div className='self-center flex flex-col md:flex-row gap-3'>
              <Block className='w-5 h-5 text-lg bg-darkBlue'>N</Block>
              <Block className='w-5 h-5 text-lg bg-softPink rotate-12'>E</Block>
              <Block className='w-5 h-5 text-lg bg-yellow'>U</Block>
            </div>
            <div className='flex flex-col md:flex-row gap-3'>
              <Block className='w-5 h-5 text-lg bg-grass rotate-12'>B</Block>
              <Block className='w-5 h-5 text-lg bg-purple -rotate-6'>R</Block>
              <Block className='w-5 h-5 text-lg bg-sky rotate-2'>U</Block>
              <Block className='w-5 h-5 text-lg bg-orange -rotate-12'>T</Block>
              <Block className='w-5 h-5 text-lg bg-softYellow'>A</Block>
              <Block className='w-5 h-5 text-lg bg-limon rotate-12'>L</Block>
              <Block className='w-5 h-5 text-lg bg-pink'>I</Block>
              <Block className='w-5 h-5 text-lg bg-grass rotate-12'>S</Block>
              <Block className='w-5 h-5 text-lg bg-softPurple -rotate-6'>
                M
              </Block>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] flex flex-col justify-center'>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>
          <div className='max-w-[400px] h-full flex flex-col gap-4 justify-between'>
            <h5 className='text-2xl font-medium'>No gradients</h5>
            <p className='text-lg'>
              Neubrutalism reinforces its emphasis on minimalism and
              straightforwardness. This approach aligns with the overall
              objective of challenging traditional design norms and rejecting
              excessive embellishments or decorative elements.
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

      <section className='min-h-[80vh]'>
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

      <section className='flex flex-col gap-4 min-h-[60vh]'>
        <h2 className='font-semibold text-2xl'>Approach of this project</h2>
        <p className='max-w-[500px] text-lg'>
          This project will be a web app where you can preview the components
          and copy the HTML/JSX code with TailwindCSS classes, instead of
          installing a npm library.
        </p>
        <p className='max-w-[500px] text-lg'>More details in the future.</p>
      </section>

      <section className='max-w-[340px] flex flex-col gap-4'>
        <h1 className='flex items-center gap-2 text-2xl font-semibold'>
          <Block className='bg-purple w-7 h-7'>I</Block> want to use it!
        </h1>
        <p>
          Subscribe to the newsletter to get the latest updates about this new
          and Neubrutal design system!
        </p>
        <NewsLetterForm />
      </section>
    </div>
  );
}
