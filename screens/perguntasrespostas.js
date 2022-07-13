import React from "react";
import { View, Text } from "react-native";

export default class Perguntaserespostas extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Perguntas e respostas</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})