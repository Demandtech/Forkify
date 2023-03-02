import React from 'react'
import styled from 'styled-components';
import Recipe from './Recipe';

export const Recipes = () => {
  return (
    <Wrapper>
       <Recipe />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
grid-area: list;
background: white;
`
export default Recipes