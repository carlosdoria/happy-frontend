import styled from 'styled-components';

import kidsImg from '../images/kids.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  max-height: 680px;
  width: 100%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: url(${kidsImg}) no-repeat 80% center;
`;

export const Image = styled.img`

`;

export const Title = styled.h1`
  max-width: 350px;
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Text = styled.p`
  max-width: 350px;
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  & strong {
    font-weight: 800;
  }
`;

export const Link = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  height: 80px;
  width: 80px;

  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color .4s;

  :hover {
    background: #96feff;
  }
`;
