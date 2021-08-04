import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculadoraScreen = () => {

    const {
        buildNumber,
        clean,
        positiveNegative,
        btnDelete,
        btnDivide,
        btnMultiply,
        btnAdd,
        btnSubtract,
        operation,
        number,
        secondNumber
    } = useCalculator()

    return (
        <View style={styles.calculatorContainer}>
            {
                (secondNumber !== '0') &&
                <Text style={styles.secondNumber}>{secondNumber}</Text>
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalc text="C" color="usable" action={clean} />
                <ButtonCalc text="+/-" color="usable" action={positiveNegative} />
                <ButtonCalc text="del" color="usable" action={btnDelete} />
                <ButtonCalc text="/" color="operator" action={btnDivide} />
            </View>

            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalc text="7" color="number" action={buildNumber} />
                <ButtonCalc text="8" color="number" action={buildNumber} />
                <ButtonCalc text="9" color="number" action={buildNumber} />
                <ButtonCalc text="X" color="operator" action={btnMultiply} />
            </View>

            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalc text="4" color="number" action={buildNumber} />
                <ButtonCalc text="5" color="number" action={buildNumber} />
                <ButtonCalc text="6" color="number" action={buildNumber} />
                <ButtonCalc text="-" color="operator" action={btnSubtract} />
            </View>

            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalc text="1" color="number" action={buildNumber} />
                <ButtonCalc text="2" color="number" action={buildNumber} />
                <ButtonCalc text="3" color="number" action={buildNumber} />
                <ButtonCalc text="+" color="operator" action={btnAdd} />
            </View>

            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalc text="0" color="number" action={buildNumber} wide />
                <ButtonCalc text="." color="number" action={buildNumber} />
                <ButtonCalc text="=" color="operator" action={operation} />
            </View>
        </View>
    )
}
