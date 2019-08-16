import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Card } from 'evergreen-ui'

function FruitCard ({ id, name }) {
  return (
    <Card
      key={id}
      elevation={1}
      marginTop={24}
      marginRight={12}
      marginLeft={12}
      padding={24}
      height={120}
      display='flex'
      flexBasis='calc(25% - 24px)'
      justifyContent='center'
      alignItems='center'
      backgroundColor='white'
    >
      <Heading size={400} dangerouslySetInnerHTML={{ __html: name }} />
    </Card>
  )
}

FruitCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FruitCard
