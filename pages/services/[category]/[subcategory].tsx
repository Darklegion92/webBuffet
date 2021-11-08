import getSeoTitle from '@/util/getSeoTitle'
import Head from 'next/head'
import ServicesPage from '@/pages/services'
import { useRouter } from 'next/router'

const Subservice = () => {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <Head>
        <title>{getSeoTitle(category as string)}</title>
      </Head>
      <ServicesPage />
    </>
  )
}
export default Subservice