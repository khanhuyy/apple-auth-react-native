import { StatusBar, StyleSheet, View, Text } from "react-native";

export function Auth() {
    return (
        <View style={styles.container}>
        <Text>Todo web app!</Text>
        </View>
    );
}
    
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});