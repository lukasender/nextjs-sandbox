import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function SSGExample({ randomAtBuildTime }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Static Site Generation Example</p>
        <p>Value only random at build time: {randomAtBuildTime}</p>
        <p className={utilStyles.lightText}>
          Hint: don't view this example in development mode (`yarn dev`). In
          development mode, even static site generation is processed for each
          request.
        </p>
        <p className={utilStyles.lightText}>
          To verify this, run `yarn build`, then `yarn start`. Then visit this
          page again.
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  /**
   * This is how it works for pre-rendering and pre-generating static sites on
   * build time.
   *
   * Note: with `yarn dev`, even static sites are rendered for each request. So
   * don't be fooled by it, thinking this would also work for processing
   * request-by-request.
   */
  return {
    props: {
      randomAtBuildTime: Math.random(),
    },
  }
}
