import React, { useState } from 'react'
import styles from './App.module.sass'
import uuid from 'uuid'
import { Heading, Pane, SearchInput } from 'evergreen-ui'
import FruitCard from './FruitCard'

const fruits = ['Apples', 'Bananas', 'Oranges', 'Lime', 'Pears', 'Raspberries']
const initFruits = fruits.map(name => ({
  id: uuid.v4(),
  name
}))

function App () {
  const [fruits, setFruits] = useState(initFruits)

  const handleInput = e => {
    const re = new RegExp(e.target.value, 'i')

    setFruits(
      initFruits
        .filter(({ name }) => name.match(re))
        .map(({ id, name }) => ({
          id,
          name: name.replace(re, '<mark>$&</mark>')
        }))
    )
  }

  return (
    <main className={styles.app}>
      <Heading size={700} marginBottom='default'>
        The fruits roster app
      </Heading>

      <SearchInput
        placeholder='Filter cards'
        width='100%'
        onInput={handleInput}
        border='none'
        style={{ boxShadow: 'none' }}
      />

      <Pane display='flex' flexWrap='wrap' style={{ margin: '0 -12px' }}>
        {fruits.map(({ id, name }) => (
          <FruitCard id={id} name={name} />
        ))}
      </Pane>
    </main>
  )
}

export default App
