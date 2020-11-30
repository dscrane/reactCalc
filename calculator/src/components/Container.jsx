import React from 'react';
import { Display } from './Display';
import { NumPad } from './NumPad'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  padding: '.25% 0 .25% 0',
  background: 'blue',
  height: '600px',
  width: '450px',
}

export const Container = () => {

  return (
    <div style={containerStyle}>
      <Display />
      <NumPad />
    </div>
  )
}
