import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

export default function ContactMap({ positions }) {

  return (
    <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[55.754734, 37.583314]} zoom={10} controls={['zoomControl', 'fullscreenControl']}>
      {positions.map((element) => <Marker lat={element.lat} lon={element.lon}>
        <MarkerLayout>
          <div style={{ borderRadius: '20px', padding: "5px", backgroundColor: "white", fontWeight: "bolder", border: "solid red 2px" }}>
            <div>{element.firstname}</div>
            <div> {element.surname} </div>
          </div>
        </MarkerLayout>
      </Marker>
      )}
    </Map>
  );

}
