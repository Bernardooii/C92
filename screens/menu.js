import React from "react";
import { View, Text } from "react-native";

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Menu principal</Text>
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