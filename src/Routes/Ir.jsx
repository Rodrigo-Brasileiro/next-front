export default function Ir() {
    console.log('renderizando aba Ir');
    

    return (
        <><h1>Ir</h1></>
    );
}
// import { Fragment, useState, useEffect } from "react";
// import {
//   GoogleMap,
//   InfoWindowF,
//   MarkerF,
//   useLoadScript,
// } from "@react-google-maps/api";


// const mapStyles = [
//     {
//       featureType: 'all',
//       elementType: 'labels.text.fill',
//       stylers: [
//         {
//           color: '#7c93a3',
//         },
//         {
//           lightness: '-10',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.country',
//       elementType: 'geometry',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.country',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#a0a4a5',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.province',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#62838e',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#dde3e3',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape.man_made',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#3f4a51',
//         },
//         {
//           weight: '0.30',
//         },
//       ],
//     },
//     {
//       featureType: 'poi',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.attraction',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.business',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.government',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.place_of_worship',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.school',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.sports_complex',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'all',
//       stylers: [
//         {
//           saturation: '-100',
//         },
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#bbcacf',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           lightness: '0',
//         },
//         {
//           color: '#bbcacf',
//         },
//         {
//           weight: '0.50',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels.text',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway.controlled_access',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#ffffff',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway.controlled_access',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#a9b4b8',
//         },
//       ],
//     },
//     {
//       featureType: 'road.arterial',
//       elementType: 'labels.icon',
//       stylers: [
//         {
//           invert_lightness: true,
//         },
//         {
//           saturation: '-7',
//         },
//         {
//           lightness: '3',
//         },
//         {
//           gamma: '1.80',
//         },
//         {
//           weight: '0.01',
//         },
//       ],
//     },
//     {
//       featureType: 'transit',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#a3c7df',
//         },
//       ],
//     },
//   ];

//     const markers = [
//         {
//           id: 1,
//           name: "Sua Localização",
//         }
//       ];

// export default function Ambulancias(){
//     console.log('Renderizando aba Ambulâncias')
//     const [userLocation, setUserLocation] = useState(null);
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
//       });
    
//       const [activeMarker, setActiveMarker] = useState(null);
    
//       const handleActiveMarker = (marker) => {
//         if (marker === activeMarker) {
//           return;
//         }
//         setActiveMarker(marker);
//       };
    
//       useEffect(() => {
//         // Função para obter a localização do usuário
//         const getUserLocation = () => {
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//               const userCoords = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//               };
    
//               setUserLocation(userCoords);
    
//               // Atualize as coordenadas do marcador para as coordenadas do usuário
//               const updatedMarkers = markers.map((marker) => ({
//                 ...marker,
//                 position: userCoords,
//               }));
    
//               setMarkers(updatedMarkers);
//             });
//           }
//         };
    
//         getUserLocation();
//       }, []);
      
//     return(
//         <Fragment>
//       <div className="container">
//         <div style={{ height: "90vh", width: "100%" }}>
//           {isLoaded ? (
//             <GoogleMap
//               center={userLocation}
//               zoom={15}
//               onClick={() => setActiveMarker(null)}
//               mapContainerStyle={{ width: "100%", height: "90vh" }}
//               options={{
//                 disableDefaultUI: true, // Isso remove os controles padrão
//                 styles: mapStyles // Aplicar as estilizações
//               }}
//             >
//               {markers.map(({ id, name }) => (
//                 <MarkerF
//                   key={id}
//                   position={userLocation}
//                   onClick={() => handleActiveMarker(id)}
//                   // icon={{
//                   //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
//                   //   scaledSize: { width: 50, height: 50 }
//                   // }}
//                 >
//                   {activeMarker === id ? (
//                     <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
//                       <div>
//                         <p>{name}</p>
//                       </div>
//                     </InfoWindowF>
//                   ) : null}
//                 </MarkerF>
//               ))}
//             </GoogleMap>
//           ) : null}
//         </div>
//       </div>
//     </Fragment>
//   );
// }
