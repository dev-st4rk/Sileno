module.exports = {
    centralizarLocalizacao: (map, latitude, longitude,zoom) => {
        
        /**
         * @map | referência (atributo ref) do mapa dentro do componente "MapView".
         * @latitude & @longitude | Localização referente a coordenada que será centralizado.
         * @zoom | valor relativo ao zoom que será dado ao centralizar, em %.
         */
        zoom = zoom/100*25
        let region = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0,
            longitudeDelta: 0
        }
        try{
        map.animateCamera({
            center: region,
            pitch: 20,
            heading: 0,
            altitude: 0,
            zoom: zoom
        }, 1)
    }
        catch(e){
            console.log("[ERRO] Na tentativa de mover a câmera para "+latitude+" e "+longitude+", ocorreu o erro: "+e.message+'.');
        }
        console.log("[AVISO] Centralizando a câmera do mapa para as coordenadas: "+latitude+" e "+longitude+".");
    }
}