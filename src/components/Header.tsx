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
                <NextLink
                  className='text-lg outline-none hover:underline focus:underline'
                  href={route.href}>
                  {route.text}
                </NextLink>
              </li>
            ))}
          </ul>
        </section>
        <a
          href='https://github.com/juancmandev/neubrutalism-ui-app'
          target='_blank'
          className='h-full flex font-bold items-center px-5 border-x-2 border-black transition-colors bg-black text-white hover:bg-white hover:text-black hover:underline outline-none focus:bg-white focus:text-black focus:underline'>
          Contribute
        </a>
      </nav>
    </header>
  );
}
