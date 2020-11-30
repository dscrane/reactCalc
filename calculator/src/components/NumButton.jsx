import React from 'react';

const numButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'grey',
  border: '1px dotted blue'
}

export const NumButton = (props) => {
  const displayLabel = (
    <div>
      {props.label}
    </div>
  )
  if(props.label === '\uFF23' || props.label === '0' ) {
    return (
      <div style={{...numButtonStyle, width: 'calc(50% - 2px)'}}>
        {displayLabel}
      </div>
    )
  } else {
    return (
       <div style={{...numButtonStyle, width: 'calc(25% - 2px)'}}>
         {displayLabel}
       </div>
    )

  }

}
