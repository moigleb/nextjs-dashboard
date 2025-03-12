import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const lusitanaNormal = Lusitana({
  weight: '400',
});
const lusitanaBold = Lusitana({
  weight: '700',
});

export { inter, lusitanaNormal, lusitanaBold };
