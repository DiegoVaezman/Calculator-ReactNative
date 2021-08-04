import React, { useRef, useState } from 'react'

enum Operadores {
    add, 
    subtract, 
    multiply, 
    divide
};

export const useCalculator = () => {

    const [secondNumber, setSecondNumber] = useState('0');
    const [number, setNumber] = useState('0');
    const lastOperation = useRef<Operadores>();

    const clean = () => {
        setNumber('0');
        setSecondNumber('0');
    };
    const buildNumber = ( textNumber: string ) => {
        if ( number.includes('.') &&  textNumber === '.') return;

        if ( number.startsWith('0') || number.startsWith('-0') ) {
            if ( textNumber === '.' ) {
                setNumber( number + textNumber );
            } else if ( textNumber === '0' && number.includes('.') ) {
                setNumber( number + textNumber );
            } else if ( textNumber !== '0' && !number.includes('.') ) {
                if ( number.startsWith('-0') ) {
                    setNumber( '-' + textNumber );
                } else {
                    setNumber( textNumber );
                }
            } else if ( textNumber === '0' && !number.includes('.') ) {
                setNumber( number );
            } else {
                setNumber( number + textNumber );
            }
        } else {
            setNumber( number + textNumber );
        }
    };
    const positiveNegative = () => {
        if ( number.includes('-') ) {
            setNumber( number.replace('-', '') );
        } else {
            setNumber( '-' + number );
        }
    };
    const btnDelete = () => {
        if ( number === '0' ) {
            return;
        } else if ( 
            number === '-0' || 
            number.length === 1 || 
            number.length === 2 &&  number.includes('-')  
        ) {
            setNumber('0');
        } else {
            setNumber( number.slice(0, -1) );
        }
    };
    const numberUp = () => {
        if ( number.endsWith('.') ) {
            setSecondNumber( number.slice(0, -1) );
        } else {
            setSecondNumber( number );
        }
        setNumber('0');
    };
    const btnDivide = () => {
        numberUp();
        lastOperation.current = Operadores.divide;
    };
    const btnMultiply = () => {
        numberUp();
        lastOperation.current = Operadores.multiply;
    };
    const btnAdd = () => {
        numberUp();
        lastOperation.current = Operadores.add;
    };
    const btnSubtract = () => {
        numberUp();
        lastOperation.current = Operadores.subtract;
    };
    const operation = () => {
        const num1 = Number( number );
        const num2 = Number( secondNumber );

        switch ( lastOperation.current ) {
            case Operadores.add:
                setNumber( `${ num1 + num2 }` );
                break;

            case Operadores.subtract:
                setNumber( `${ num2 - num1 }` );
                break;
                
            case Operadores.multiply:
                setNumber( `${ num1 * num2 }` );
                break;
                
            case Operadores.divide:
                setNumber( `${ num2 / num1 }` );
                break;
            
            case undefined:
                break;
        };
        setSecondNumber('0');
        lastOperation.current = undefined;
    };

    return ({
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
    });
};
