import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchPlaceHolder = () => {

    return(
        <View style = {styles.container}>

            <Text >
                <Icon name="info" size={40} color="#900" />
            </Text>

            <Text style={styles.placeHolderStyle}>
                Search book in the search box to view the book details.
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

export default SearchPlaceHolder;