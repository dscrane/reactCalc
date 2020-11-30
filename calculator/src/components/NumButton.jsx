import React from 'react';

const numButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#919191',
  borderRadius: '2%',
  boxShadow: '1px 1px 1.5px #A9A9A9',
  margin: '2px',
}

export const NumButton = (props) => {
  const displayLabel = (
    <div>
      {props.label}
    </div>
  )
  if(props.label === '\uFF23' || props.label === '0' ) {
    return (
      <div className='numpad__button numpad__button-wide'>
        {displayLabel}
      </div>
    )
  } else {
    return (
       <div className='numpad__button numpad__button-narrow'>
         {displayLabel}
       </div>
    )

  }

}
