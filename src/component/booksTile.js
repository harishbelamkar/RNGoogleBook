import { memo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';


const BooksTile = ({ bookItem,bookPressed }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={event => bookPressed(bookItem)}
                style={{
                    flexDirection: 'row',
                    padding: 8,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        height: responsiveHeight(16),
                        width: responsiveWidth(16),
                        marginRight: 10,
                    }}
                >

                    <Image
                        source = {{uri: bookItem.thumbnail}}
                        style = {styles.bookImageStyle}

                    />
                </View>

                <View style={styles.description}>
                    <Text style = {styles.titleStyle}>
                        {bookItem.title}
                    </Text>

                    {bookItem.authors && (
                    <Text numberOfLines={2} ellipsizeMode="tail">
                        by {bookItem.authors}
                    </Text>
                    )}

                    {bookItem.publisher && (
                    <Text>
                        Publisher: {bookItem.publisher}
                    </Text>
                    )}

                    {bookItem.publishedDate && (
                    <Text>
                        Published Date: {bookItem.publishedDate}
                    </Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default memo (BooksTile);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E7E9',
        marginBottom: 10,
    },
    bookImageStyle: {
        borderRadius: 4,
        height: '100%',
        width: 80,
    },
    description: {
        flex: 3,
        padding: 5,
    },
    titleStyle: {
        fontFamily: 'Zocial',
        fontWeight: '800',
        fontSize:16
    }
});