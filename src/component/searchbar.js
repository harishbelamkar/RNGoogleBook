import { memo } from 'react';

import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ searchText, onSearch, onSubmit,onReset }) => {

    return <View style={styles.container}>

        <Text style = {styles.searchIcon}>
            <Icon name="search" size={20} color="#900" />
        </Text>

        <TextInput
            style={styles.searchInput}
            onChangeText={onSearch}
            autoCorrect={false}
            spellCheck={false}
            placeholder='Search books by name'
            onEndEditing={onSubmit}
            value={searchText}
            returnKeyType={'search'}
         />

        <TouchableOpacity
            onPress={onReset}
            style={{
                flexDirection: 'row',
                padding: 2,
                alignItems: 'center',
                backgroundColor:'transparent'
            }}
        >
            <Text >
                <Icon name="rotate-right" size={20} color="#900" />
            </Text>
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection:'row',
        paddingHorizontal: 12,
        backgroundColor: '#EBEDEF',
        borderRadius: 4
    },
    searchIcon: {
        margin: 10
    },
    searchInput: {
        fontSize: 20,
        width: '80%',
        backgroundColor: 'transparent',
        fontWeight: '500',
    }
});
export default memo (SearchBar);