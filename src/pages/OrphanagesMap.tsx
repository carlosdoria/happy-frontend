import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/marker.svg'
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import * as S from '../styles/orphanateMap'

export default function OrphanagesMap () {

  interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('/orphanages').then(res => {
      setOrphanages(res.data)
    })
  }, []);

  return (
    <S.Container>
      <S.SideBar>
        <header>
          <img src={mapMarkerImg} alt='Happy'/>

          <S.Title>Escolha um orfanato no mapa!</S.Title>
          <S.Text>Muitas crianças estão esperando a sua visita :D</S.Text>
        </header>

        <S.Location>
          <strong>Maceió</strong>
          <span>Alagoas</span>
        </S.Location>
      </S.SideBar>

      <Map
        center={[-9.6542866,-35.7079124]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {orphanages.map(orphanage => (
          <Marker
          key={orphanage.id}
          icon={mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color='#fff' />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to='/orphanages/create'>
        <S.Link>
          <FiPlus size={32} color='#fff' />
        </S.Link>
      </Link>
    </S.Container>
  )
}
