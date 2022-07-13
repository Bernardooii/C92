import React from "react";
import { View, Text } from "react-native";

export default class Escrevaproblema extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Escreva seu problema</Text>
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