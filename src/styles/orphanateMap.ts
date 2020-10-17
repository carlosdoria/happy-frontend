import styled from 'styled-components';

// import kidsImg from '../images/kids.svg'

export const Container = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, .8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #0089a5;
    font-size: 20px;
    font-weight: bold;

  }

  .map-popup .leaflet-popup-content a {
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #15c3d6;

    border-radius: 12px;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166,0.16); 
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;

export const SideBar = styled.aside`
  height: 100vh;
  width: 440px;

  padding: 80px;

  display: flex;
  flex-direction:column;
  justify-content: space-between;

  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

`;

export const Title = styled.h2`
  margin-top: 64px;

  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
`;

export const Text = styled.p`
  margin-top: 24px;
  line-height: 28px;
`;

export const Location = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  & strong {
    font-weight: 800;
  }
`;

export const Link = styled.div`
  z-index: 10;
  position: absolute;
  right: 40px;
  bottom: 40px;

  height: 64px;
  width: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #15c3d6;
  border-radius: 20px;

  transition: background-color .4s;

  :hover {
    background: #17d6eb;
  }
`;
