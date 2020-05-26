import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function SSRExample({ randomForEachRequest }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Server-Side Rendered Example</p>
        <p>Value only random for each request: {randomForEachRequest}</p>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(_context) {
  /**
   * This is how it works for server-side rendering for each incoming request.
   */
  return {
    props: {
      randomForEachRequest: Math.random(),
    },
  }
}
