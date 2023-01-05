import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout';
import {ThemeProvider} from 'next-themes';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';


i18next.use(initReactI18next)
  .init({
    resources: {
      en:{
        translation: {
          webdev: 'Web Dev',
          about: 'About',
          design: 'Design',
          sayHello: 'Say Hello 🙂'
        }
      },
      fr: {
        translation:{
          webdev: 'Web Dev',
          about: 'à propos',
          design: 'Design',
          sayHello: 'Dire bonjour 🙂'
        }
      }
    },
    lng: 'fr',
    fallbackLng: 'en'
  })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
