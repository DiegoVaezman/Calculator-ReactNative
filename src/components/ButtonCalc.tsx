import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color: 'number' | 'operator' | 'usable' ;
    wide?: boolean;
    action: ( textNumber: string ) => void;
}

export const ButtonCalc = ( { text, color, wide, action }: Props ) => {
    return (
        <TouchableOpacity
            onPress={ () => { action( text ) } }
        >
            <View style={[ 
                styles.button,  
                ( color === 'number' ) ? { backgroundColor: '#2D2D2D' } : 
                ( color === 'operator' ) ? { backgroundColor: '#FF9427' } : 
                ( color === 'usable' ) && { backgroundColor: '#9B9B9B' },
                ( wide ) ? { width: 180 } : { width: 80 }
            ]}>
                <Text style={[
                    styles.buttonText,
                    ( color === 'usable' ) ? { color: 'black' } : { color: 'white' }
                ]}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

    const styles = StyleSheet.create({
        button: {
            height: 80,
            borderRadius: 100,
            justifyContent: 'center',
            marginHorizontal: 10
        },
        buttonText: {
            textAlign: 'center',
            padding: 10,
            fontSize: 30,
            fontWeight: '300'
        }
    });
