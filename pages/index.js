import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Example project.</p>
        <p>Evaluating Next.js as a stack.</p>
        <ul>
          <li>
            <Link href="/static-site-generation">
              <a>Static Site Generation</a>
            </Link>
          </li>
          <li>
            <Link href="/server-side-rendered">
              <a>Server-Side Rendered</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
      randomForEachRequest: Math.random(),
    },
  }
}
