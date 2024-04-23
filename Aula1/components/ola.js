import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Ola(props) {
  return (
    <text>Olá, {props.nome}. Você tem: {props.idade} anos de idade.
    A cidade em que mora é {props.city}, e sua profissão é: {props.work}</text>
    )
}