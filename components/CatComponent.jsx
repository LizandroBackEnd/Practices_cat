import React from 'react';
import { View, Image, Button } from 'react-native';
import Sound from 'react-native-sound';

const CatComponent = () => {
    const playSound = () => {
        const sound = new Sound('cat_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Error al cargar el sonido', error);
                return;
            }
            sound.play();
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/cat.webp')} style={{ width: 200, height: 200 }} />
            <Button title="Reproducir Sonido" onPress={playSound} />
        </View>
    );
};

export default CatComponent;