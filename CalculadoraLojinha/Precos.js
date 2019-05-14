import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { TextInput, Button } from 'react-native-paper'



export default class Precos extends React.Component {
    state = {
        text: '',
        precoLoja: 0.0,
        precoSite: 0.0,
        mlClassico: 0.0,
        mlPremium: 0.0,
    }

    calcular() {
        let valorLoja = parseFloat(this.state.text)

        let precoSite;
        let mlClassico;
        let mlPremium;
        let calculado;

        if (valorLoja < 100) {
            precoSite = valorLoja * 5.3 / 100 + valorLoja + 2
            mlClassico = valorLoja * 13 / 100 + valorLoja + 17
            mlPremium = valorLoja * 19 / 100 + valorLoja + 19
            calculado = true
        }
        else if (valorLoja < 1000) {
            precoSite = valorLoja * 5.3 / 100 + valorLoja + 2
            mlClassico = valorLoja * 13 / 100 + valorLoja + 14.5
            mlPremium = valorLoja * 19.31 / 100 + valorLoja + 18
            calculado = true
        }
        else if (valorLoja < 10000) {
            precoSite = valorLoja * 5.2 / 100 + valorLoja + 2
            mlClassico = valorLoja * 13 / 100 + valorLoja + 15
            mlPremium = valorLoja * 19.2 / 100 + valorLoja + 17
            calculado = true
        }

        if (calculado) {
            this.setState({
                precoLoja: valorLoja,
                precoSite: precoSite,
                mlClassico: mlClassico,
                mlPremium: mlPremium
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Calculadora de Preços para o Site e Mercado Livre</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    label='Valor do produto na Loja'
                    onChangeText={
                        text => this.setState(
                            {
                                text
                            },
                            () => this.calcular(this.state.valorLoja)
                        )
                    }
                    value={this.state.text}

                    outlined
                />
                <View style={styles.text}>
                    <Button mode='outlined' style={{flex: 5, marginHorizontal: 20}}>
                        <Text style={{ fontSize: 20 }}>
                            Site: R$ {(this.state.precoSite).toFixed(2)}
                        </Text>
                    </Button>
                </View>
                <View style={styles.text}>
                    <Button mode='outlined' style={{flex: 5, marginHorizontal: 20}}>
                        <Text style={{ fontSize: 20 }}>
                            ML Clássico: R$ {(this.state.mlClassico).toFixed(2)}
                        </Text>
                    </Button>
                </View>
                <View style={styles.text}>
                    <Button mode='outlined' style={{flex: 5, marginHorizontal: 20}}>
                        <Text style={{ fontSize: 20 }}>
                            ML Premium: R$ {(this.state.mlPremium.toFixed(2))}
                        </Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    input: {
        width: 350,        
    },
    text: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});