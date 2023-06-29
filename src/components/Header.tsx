import NextLink from './NextLink';

const routes = [
  {
    href: '/',
    text: 'Home',
  },
];

export default function Header() {
  return (
    <header className='w-full'>
      <h1 className='text-center py-3 font-bold text-2xl'>Neubrutalism UI</h1>
      <nav className='px-10 flex justify-between h-20 border-y-4 border-black bg-white'>
        <section className='h-full'>
          <ul className='flex h-full items-center gap-4'>
            {routes.map((route) => (
              <li key={route.href}>
                <NextLink className='text-lg' href={route.href}>
                  {route.text}
                </NextLink>
              </li>
            ))}
          </ul>
        </section>
        <a
          href=''
          target='_blank'
          className='h-full flex font-bold items-center px-5 bg-black text-white'>
          Contribute
        </a>
      </nav>
    </header>
  );
}
