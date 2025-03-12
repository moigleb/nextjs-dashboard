import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const lusitanaNormal = Lusitana({
  weight: '400',
  subsets: ['latin'],
});
const lusitanaBold = Lusitana({
  weight: '700',
  subsets: ['latin'],
});

export { inter, lusitanaNormal, lusitanaBold };
