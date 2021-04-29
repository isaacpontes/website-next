import '../sass/globals.scss';
import Layout from '../components/Layout';
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from "../_locale";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}

export default MyApp
