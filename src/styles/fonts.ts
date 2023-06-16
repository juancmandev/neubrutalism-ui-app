import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Extralight.ttf',
      weight: '200',
      style: 'extralight',
    },
    {
      path: './fonts/ClashDisplay-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/ClashDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/ClashDisplay-Semibold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/ClashDisplay-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-clash-display',
});

export default clashDisplay;
