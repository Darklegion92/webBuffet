import getSeoTitle from '@/util/getSeoTitle'
import Head from 'next/head'
import HomePage from '@/pages/home'

const Home = () => {
  return (
    <>
      <Head>
        <title>{getSeoTitle('Inicio')}</title>
      </Head>
      <HomePage />
    </>
  )
}
export default Home