import React from 'react'

import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="React Avançado Logo" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS, Styled Components.
      </S.Description>
      <S.Illustration src="/img/hero.svg" alt="Um astronauta na lua" />
    </S.Wrapper>
  )
}

export default Main
