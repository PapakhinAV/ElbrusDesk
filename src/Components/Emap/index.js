import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React, { useEffect, useState } from 'react'
// import { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
// function usePosition ()  {
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   const onChange = ({latitude, longitude}) => {
//     // Здесь мы могли бы сохранить весь объект position, но для
//     // ясности давайте явно перечислим, какие свойства нас интересуют.
//     setPosition({latitude, longitude});
//   };

//   const onError = (error) => {
//     setError(error.message);
//   };

//   useEffect(() => {
//     const geo = navigator.geolocation;

//     if (!geo) {
//       setError('Геолокация не поддерживается браузером');
//       return;
//     }

//     // Подписываемся на изменение геопозиции браузера.
//  let watcher = geo.watchPosition(onChange, onError);

//     // В случае, если компонент будет удаляться с экрана
//     // производим отписку от слежки, чтобы не засорять память.
//     return () => geo.clearWatch(watcher);
//   }, []);

//   return {...position, error};
// }


function Emap() {
	// Получаем позицию браузера (или ошибку) здесь.
	const watch = true;
  const {
    latitude,
    longitude
    // speed,
    // timestamp,
    // accuracy,
    // error,
  } = usePosition(watch);

	return (
		<YMaps
		query={{
			ns: 'use-load-option',
			load:
				'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
		}}
	>
		<Map
			defaultState={{
				center: [55.75, 37.57],
				zoom: 9,
				controls: ['zoomControl', 'fullscreenControl'],
			}}
		>
			<Placemark
				defaultGeometry={[latitude, longitude]}
				properties={{
					balloonContentBody:
						'This is balloon loaded by the Yandex.Maps API module system',
				}}
			/>
		</Map> 
		<div>
		latitude: {latitude}<br/>
      longitude: {longitude}<br/>
			</div>
	</YMaps>
	)
}

export default Emap
