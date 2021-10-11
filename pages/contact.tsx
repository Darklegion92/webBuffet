import getSeoTitle from '@/util/getSeoTitle'
import Head from 'next/head'
import ContactPage from '@/pages/contact'

const Home = () => {
  return (
    <>
      <Head>
        <title>{getSeoTitle('Contactenos')}</title>
      </Head>
      <ContactPage />
    </>
  )
}
export default Home