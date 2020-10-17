import React from 'react';

import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import * as S from '../styles/landing'

import logoImg from '../images/Logo.svg'

export default function Landing () {
    return (
      <S.Container>
        <S.Wrapper>
          <S.Image src={logoImg} />

          <main>
            <S.Title>Leve felicidade para o mundo</S.Title>
            <S.Text>Visite orfanatos e mude o dia de muitas crianças</S.Text>
          </main>

          <S.Location>
            <strong>Maceió</strong>
            <span>Alagoas</span>
          </S.Location>

          <Link to='/app'>
            <S.Link>
              <FiArrowRight size={26} color='rgba(0,0,0,0.6)'/>
            </S.Link>
          </Link>

        </S.Wrapper>
      </S.Container>
    )
  }
