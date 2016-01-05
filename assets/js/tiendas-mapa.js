$(document).ready(function () {
  console.log('document ready');
  initializeMap();
});




var places = [
  {
    lat: 20.609837,
    lng: -100.377161,
    title: 'Aeropuerto',
    content: 'PASEO DE LA REFORMA No. 4 LOCAL D , COL. COLINAS DEL PARQUE , QUERETARO,QRO.'
  },
  {
    lat: 20.585996,
    lng: -100.388011,
    title: 'Alameda',
    content: 'AV. CONSTITUYENTES 10 A PTE, COL.CENTRO, QUERETARO,QRO.'
  },
  {
    lat: 20.587983,
    lng: -100.370383,
    title: 'Américas',
    content: 'CALLE  COSTA RICA No. 211 , COL. CARRETAS CENTRO COMERCIAL PLAZA DE LAS AMÉRICAS ,QRO,QRO.'
  },
  {
    lat: 20.649279,
    lng: -100.408744,
    title: 'Belén',
    content: 'CLZ. DE BELÉN No. 902 COL. LOMAS DE SAN PEDRITO PEÑUELAS, QUERETARO,QRO.'
  },
  {
    lat: 20.545415,
    lng: -100.417987,
    title: 'Belgrado',
    content: 'AV. LOS CANDILES LOTE 18, MZ 22 ,COL. CANDILES, VILLA CORREGIDORA ,QRO.'
  },
  {
    lat: 20.547657,
    lng: -100.406878,
    title: 'Candiles',
    content: 'AV. CONSTITUYENTES 10 A PTE, COL.CENTRO, QUERETARO,QRO.'
  },
  {
    lat: 20.603125,
    lng: -100.392471,
    title: 'Cerrito',
    content: 'AV. PROL. CORREGIDORA NORTE No. 24, COL. EL CERRITO , QUERETARO,QRO.'
  },
  {
    lat: 20.580098,
    lng:  -100.399994,
    title: 'Constituyentes',
    content: 'AV. CONSTITUYENTES  PTE No. 158 COL. CENTRO, QUERETARO,QRO.'
  },
  {
    lat: 20.605491,
    lng:  -100.389479,
    title: 'Corregidora',
    content: 'PROLONGACION CORREGIDORA NTE.  Nº 1250, COL. ARBOLEDAS, CORREGIDORA, QRO.'
  },
  {
    lat: 20.599734,
    lng:  -100.398222,
    title: 'Estio',
    content: 'ESTIO No. 51 B COL. LA ERA  ENTRE PRIMAVERA Y LA CUARTA DE LAS ROSAS, QUERETARO,QRO.'
  },
  {
    lat: 20.599688,
    lng:  -100.394913,
    title: 'Invierno',
    content: 'INVIERNO No. 42 COL. CENTRO ,QUERETARO,QRO.'
  },
  {
    lat: 20.588793,
    lng:  -100.389888,
    title: 'Italia',
    content: 'BOLOGNIA. 102, FRACC. ITALIA, QUERETARO,QRO.'
  },
  {
    lat: 20.574808,
    lng:  -100.414013,
    title: 'Jardines',
    content: 'HACIENDA VEGIL No. 325 COL. JARDINES DE LA HACIENDA , QUERETARO,QRO.'
  },
  {
    lat: 20.597166,
    lng:  -100.449793,
    title: 'La Aurora',
    content: 'ESTRELLA DEL NORTE ESQ. JOSE MARIA MORELOS No.226, FRACC. LA AURORA, QUERETARO,QRO.'
  },
  {
    lat: 20.594696,
    lng:  -100.451604,
    title: 'La Aurora II',
    content: 'PASEO DE LA AURORA No.361, NUM. INT.  1 Y 2, COL. LA AURORA, QUERETARO,QRO.'
  },
  {
    lat: 20.709280,
    lng:  -100.305123,
    title: 'La Cruz',
    content: 'AV CRUZ DE MAYO N.14 COL. HACIENDA LA CRUZ ,EL MARQUES QUERETARO.'
  },
  {
    lat: 20.580811,
    lng:  -100.254505,
    title: 'La Piedad',
    content: 'CALLE DOLORES Nº 1 , COL. VILLAS DE SAN JOSE LA PIEDAD, EL MARQUES,QRO.'
  },
  {
    lat: 20.588793,
    lng:  -100.389788,
    title: 'La Pradera',
    content: 'CALLE DOLORES Nº 1 ,ENTRE LAS CALLES BUFALO Y LEON, COL. LA PRADERA, QUERETARO,QRO.'
  },
  {
    lat: 20.588798,
    lng:  -100.389688,
    title: 'La Pradera II',
    content: 'LOTE 1,MZ 6, ETAPA 4 , S/N ,  COL. LA PRADERA, QUERETARO,QRO.'
  },
  {
    lat: 20.588783,
    lng:  -100.389888,
    title: 'Loarca',
    content: 'ESPERANZA CABRERA Nº 1 , COL. EDUARDO LOARCA CASTILLO , QUERETARO,QRO.'
  },
  {
    lat: 19.068471,
    lng:  -98.136145,
    title: 'Loarca II',
    content: 'PLAN DE SAN LUIS Nº 5010 ,COL. LOARCA. QUERETARO, QRO.'
  },
  {
    lat: 20.564789,
    lng:  -100.390672,
    title: 'Mirador',
    content: 'AV. REVOLUCIÓN No. 105 COL. EL MIRADOR, QUERETARO,QRO.'
  },
  {
    lat: 20.693611,
    lng:  -100.390672,
    title: 'Lomas 26',
    content: 'AV. 26 No. 1301 COL. LOMAS DE CASA BLANCA , QUERETARO,QRO.'
  },
  {
    lat: 20.564789,
    lng:  -100.505833,
    title: 'Mompani',
    content: 'CALLE MOMPANI Nº2300 COL. MOMPANI. ENTRE LAS CALLES EJE 9 Y EJE 2 , COL. MOMPANI, QUERETARO,QRO.'
  },
  {
    lat: 20.588793,
    lng:  -100.389888,
    title: 'Mompani II',
    content: 'CALLE 1 , Nº 101, LOCAL A, COL. NO ESPECIFICADA EN EL CATALOGO, QUERETARO,QRO.'
  },
  {
    lat: 20.588793,
    lng:  -100.386888,
    title: 'Monte Blanco',
    content: 'CARRETERA A HUIMILPAN Nº 1102, LOCAL B, COL. MONTE BLANCO , QUERETARO,QRO.'
  },
  {
    lat: 20.527335,
    lng:  -100.451598,
    title: 'Oyamel',
    content: 'CALLE OYAMEL N. 310 FRACC. MISION DE SAN JOSE   EJIDO LA NEGRETA, CORREGIDORA .QRO.'
  },
  {
    lat: 20.647061,
    lng:  -100.404798,
    title: 'Peñuelas',
    content: 'AV. PIE DE LA CUESTA No. 21 ESQ. DIAMANTE COL. SAN PEDRITO PEÑUELAS, QUERETARO,QRO.'
  },
  {
    lat: 20.629998,
    lng: -100.448572,
    title: 'Petunias',
    content: 'PETUNIAS No. 1311 A COL. INSURGENTES ESQ. BEGONIAS, QUERETARO,QRO.'
  },
  {
    lat: 20.542693,
    lng: -100.451252,
    title: 'Piramides',
    content: 'PIRAMIDE DE LA LUNA No.258, COL. LAS TROJES  ,CORREGIDORA, QRO.'
  },
  {
    lat: 20.581450,
    lng: -100.372219,
    title: 'Platón',
    content: 'PLATÓN No. 14 COL. EL SABINO, ENTRE PLATON Y TECNICOS, QUERETARO,QRO.'
  },
  {
    lat: 20.548445,
    lng: -100.412583,
    title: 'Pórtico',
    content: 'PROL. CHABACANO No. 52 Y 54 COL. EL PÓRTICO'
  },
  {
    lat: 20.542693,
    lng: -100.451252,
    title: 'Puerta Real',
    content: 'PUERTA DEL SOL  Nº 4 , CO. VALLE REAL RESIDENCIAL, VILLA CORREGIDORA,QRO.'
  },
  {
    lat: 20.564730,
    lng: -100.411212,
    title: 'Reforma',
    content: 'AV. TRUCHUELO No. 65 COL. LOMAS DEL VALLE ,QUERETARO,QRO.'
  },
  {
    lat: 20.588793,
    lng: -100.389888,
    title: 'San Francisco',
    content: 'FRANCISCO ALCOCER POZO N. 52 LOCAL 1 ,COL.  COLINAS DEL SOL, QUERETARO,QRO.'
  },
  {
    lat: 20.560304,
    lng: -100.421478,
    title: 'San Mateo',
    content: 'AV. LOS MEZQUITES No 51  COL. RESIDENCIAL SAN MATEO, QUERETARO,QRO.'
  },
  {
    lat: 20.588793,
    lng: -100.389888,
    title: 'Spicer',
    content: 'AV. 5 DE FEBRERO N. 1702 ,COL. ZONA INDUSTRIAL BENITO JUAREZ, QUERETARO,QRO.'
  },
  {
    lat: 20.602582,
    lng: -100.432807,
    title: 'Sta. Monica',
    content: 'CALLE RIO N. 137 COL. STA. MONICA  ENTRE CALLE BRONCE Y GOTA,QUERETARO,QRO.'
  },
  {
    lat: 20.588793,
    lng: -100.389888,
    title: 'San Pedro',
    content: 'CORDILLERA HIMALAYA, LOTE 1,  MANZANA 362, COL. RANCHO SAN PEDRO FRACCION 1, QUERETARO,QRO.'
  },
  {
    lat: 20.550099,
    lng: -100.351876,
    title: 'T.V.Q.',
    content: 'CARR. A HUIMILPAN No. 1040 COL. VISTA ALEGRE ,QUERETARO,QRO.'
  }

];

function initializeMap() {
    console.log('initialize');
    var mapDetails = {
      center: new google.maps.LatLng(20.585996,-100.388011),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),
        mapDetails);

    for( var i = 0;  i < places.length;  i++ ) {
        addPlace( places[i] );
    }

    function addPlace(place) {
        var content = '<h3>'+ place.title +'</h3>'+'<h1>Dirección: ' + place.content + '</h1>';
        var infowindow = new google.maps.InfoWindow({
            content: content
        });

        // var image = '/js/markers/' + place.image + '.png';
        var latlng = new google.maps.LatLng( place.lat, place.lng );
        var marker = new google.maps.Marker({
            position: latlng,
            title: place.title,
            // icon: image
        });

        marker.setMap( map );

        google.maps.event.addListener( marker, 'click', function() {
            infowindow.open( map, marker );
        });
    }


  }

