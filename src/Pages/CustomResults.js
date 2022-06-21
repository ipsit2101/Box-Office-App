import React from 'react'
import { FlexGrid } from '../My Components/styled';

const CustomResults = ( {text} ) => {
  return (
    <FlexGrid style = { {
        marginTop: '140px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '40px',
        color: '#5F5F5F',
    } }>
        {text}
    </FlexGrid>
  )
}

export default CustomResults;
