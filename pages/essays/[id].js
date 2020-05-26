import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Essay({ id, randomForEachRequest }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ID of 'params': {id}</p>
        <p>Value only random for each request: {randomForEachRequest}</p>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  /**
   * This is how it works for server-side rendering for each incoming request.
   */
  return {
    props: {
      id: params.id,
      randomForEachRequest: Math.random(),
    },
  }
}
