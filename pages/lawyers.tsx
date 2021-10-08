import getSeoTitle from '@/util/getSeoTitle'
import Head from 'next/head'
import LawyersPage from '@/pages/lawyers'

const Home = () => {
  return (
    <>
      <Head>
        <title>{getSeoTitle('Profesionales')}</title>
      </Head>
      <LawyersPage />
    </>
  )
}
export default Home