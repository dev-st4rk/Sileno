import satiros from '../../../temp/satiros.json';
import { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import React from 'react'; //o useEffect executa algo quando o componente é montado, uma única vez   

module.exports = {
    localizarSatiros: () => {
    var arr = [];
    for (let index = 0; index < satiros.length; index++) {
        arr.push(
            <Marker coordinate={
                { 
                    latitude: satiros[index].latitude, 
                    longitude: satiros[index].longitude 
                }
            }>
            <Image
            style={{
                width: 54,
                height: 54,
                borderRadius: 18,
            }}
            source={{ uri: 'https://www.thispersondoesnotexist.com/image' }} 
            />
        </Marker>
        )
    }
    return arr;
}

}
