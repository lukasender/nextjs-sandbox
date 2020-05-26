import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ id, randomAtBuildTime }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ID of 'params': {id}</p>
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

export async function getStaticPaths() {
  // For each items in this array, a page is generated on build time.
  // Pages are accessible at `/posts/id-1`,  or `/posts/id-2`.
  // Since 'fallback: false', any other page (`/posts/<anyother>`) will result
  // in a 404.
  // If 'fallback: true', then this behaviour will change.
  // The *first* request to `<another>` will try to generate a page. The page is
  // then statically generated and cached. For all subsequent requests, the
  // static page is served.
  const paths = [
    {
      params: {
        id: 'id-1',
      },
    },
    {
      params: {
        id: 'id-2',
      },
    },
  ]
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
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
      id: params.id,
      randomAtBuildTime: Math.random(),
    },
  }
}
