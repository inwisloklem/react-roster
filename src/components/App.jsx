import React from 'react'
import styles from './App.module.sass'
import { Heading, Pane, SearchInput } from 'evergreen-ui'

function App () {
  return (
    <main className={styles.app}>
      <Heading size={700} marginBottom='default'>
        The roster app
      </Heading>

      <SearchInput placeholder='Filter cards' width='100%' />

      <Pane display='flex' justifyContent='space-between'>
        <Pane
          border
          backgroundColor='white'
          padding={24}
          flexBasis='calc(25% - 18px)'
          height={120}
          marginTop={24}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Heading size={400}>Apples</Heading>
        </Pane>

        <Pane
          border
          backgroundColor='white'
          padding={24}
          flexBasis='calc(25% - 18px)'
          width={200}
          height={120}
          marginTop={24}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Heading size={400}>Bananas</Heading>
        </Pane>

        <Pane
          border
          backgroundColor='white'
          padding={24}
          flexBasis='calc(25% - 18px)'
          width={200}
          height={120}
          marginTop={24}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Heading size={400}>Oranges</Heading>
        </Pane>

        <Pane
          border
          backgroundColor='white'
          padding={24}
          flexBasis='calc(25% - 18px)'
          width={200}
          height={120}
          marginTop={24}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Heading size={400}>Pears</Heading>
        </Pane>
      </Pane>
    </main>
  )
}

export default App
