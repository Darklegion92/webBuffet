import getSeoTitle from '@/util/getSeoTitle'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>{getSeoTitle('home')}</title>
      </Head>
    </>
  )
}
export default Home