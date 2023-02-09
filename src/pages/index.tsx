import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  background: green;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Container>hello world</Container>
      </body>
    </div>
  )
}
