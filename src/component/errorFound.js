import { Text, View, StyleSheet } from 'react-native';

const ErrorMessage = ({errormsg}) => {

    if(errormsg == 0) return null;

    return(
        <View style = {styles.container}>

            <Text style={styles.placeHolderStyle}>
                {errormsg}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems:'center'
    },
    placeHolderStyle: {
        textAlign:'center',
        fontSize: 22,
        fontWeight: '500'
    }
   
});

export default ErrorMessage;