import Header from "./header"
import Head from "next/head";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  description?: string;
  pageTitle?: string;
}

function EmptyLayout(props: LayoutProps){
  const { children, pageTitle, description } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

function Layout(props: LayoutProps) {
  const {children, pageTitle, description} = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export { EmptyLayout, Layout }