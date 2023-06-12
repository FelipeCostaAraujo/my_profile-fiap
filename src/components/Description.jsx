import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Description = () => <Text style={styles.profileDescription}>
    Sou desenvolvedor mobile a 6 anos e comecei trabalhando com o Ionic na sua primeira versão com javascript em 2017 e fiquei 2 anos trabalhando com o Ionic em angular ate a versão 4 do Ionic.
    Trabalho com Flutter atualmente na Trakto uma startup de design que esta a muitos anos no mercado, mas ja trabalhei com Swift, Java Android.
    Já trabalhei em inumeros projetos de backend, front e mobile.
    Tenho conhecimento básico em Devops e desenvolvimento Backend com Go, Python e Nodejs.
    Sou apaixonado por eletronica e iots e tenho varios projetos usando arduino.
</Text>

const styles = StyleSheet.create({
    profileDescription: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Description