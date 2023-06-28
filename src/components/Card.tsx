import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <article className='max-w-[260px] border-2 border-black shadow-md group-hover:border-4 group-focus:border-4 transition-all'>
      <header className='border-b-2 border-black'>
        <Image
          width={260}
          height={50}
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      </header>
      <main className='px-3 py-4 bg-white'>
        <h6 className='font-medium text-lg group-hover:underline group-focus:underline'>
          {props.title}
        </h6>
      </main>
    </article>
  );
}
