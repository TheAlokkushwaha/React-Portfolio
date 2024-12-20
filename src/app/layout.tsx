import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/css/card.scss';
import '@/css/globals.scss';
const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: "Alok Kushwaha",
  description: "This is the portfolio of Alok Kushwaha. I am a full stack developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
