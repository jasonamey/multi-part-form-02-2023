import GlobalStyles from '@/styles/global-style'
import type { AppProps } from 'next/app'
import { Ubuntu } from '@next/font/google'
import FormDataProvider from '@/context/FormDataProvider'
import StepNumberProvider from '@/context/StepNumberProvider'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <FormDataProvider>
        <StepNumberProvider>
          <main className={ubuntu.className} style={{ position: 'relative' }}>
            <Component {...pageProps} />
          </main>
        </StepNumberProvider>
      </FormDataProvider>
    </>
  )
}
