import React from 'react';
import { NumButton } from './NumButton';

const labels = ['\uFF23', '\uFF05', '\uFF0F', '7', '8', '9', '\uFF0A', '4', '5', '6', '\uFF0D', '1', '2', '3', '\uFF0D', '0', '\uFF0E', '\uFF1D']

const numPadStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // justifyContent: 'space-between',
  // alignItems: 'center',
  width: '98%',
  flex: '9',
  background: 'pink'
}

export const NumPad = () => {
  const buttons = labels.map(label => {
    return <NumButton label={label} />
  })
  return (
    <div style={numPadStyle}>
      {buttons}
    </div>
  )
}
