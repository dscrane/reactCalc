import React from 'react';
import { NumButton } from './NumButton'


const numRowStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flex: '1',
  width: '100%',
  background: 'yellow',
  border: '1px solid black'
}

export const NumRow = () => {
  return (
    <div style={numRowStyle}>
      <NumButton />
      <NumButton />
      <NumButton />
      <NumButton />
    </div>
  )
}
