






  //Variables globales
  var _map = null;
  var _lat = 43.4887495;
  var _lng = 2.7563507;
  var _zoom = 9;
  var _controlLayers = null;
  var _baseMaps = {};
  var _overlayMaps = {};




  /**
  * ---------------- functions -----------------------
  */

  /**
  * @function createMap
  * @param string htmlContainer
  * @optional param float lat
  * @optional param float lng
  * @optional param integer zoom
  */

  function createMap(htmlContainer, lat = null, lng = null, zoom = null){

    if(lat === null){
      lat = _lat;
    }
    if(lng === null){
      lng = _lng;
    }
    if(zoom === null){
      zoom = _zoom;
    }

    _map = L.map(htmlContainer,{
      "zoomControl":true,
      "attributionControl":false,
      //layers:[parcJson]
    });

    //Ajout du control layers
    _controlLayers = L.control.layers(_baseMaps, _overlayMaps).addTo(_map);

    //Définition de la vue par défault
    _map.setView([lat, lng]);

    //Zoom par défault
    _map.setZoom(zoom);
    }


    /**
    * @function addTilesLayer
    * @param string url
    * @desc Ajoute un layer de type tileLayer
    * @return leaflet layer
    */
    function addTilesLayer(url){
      var layer = L.tileLayer(url);
      layer.addTo(_map);
      return layer;
    }


//   var _overlayMaps = {
//     "Le nom de ta couche ":parcJson,
//     "Le deucème nom de ta couche": r1Json
//   };


