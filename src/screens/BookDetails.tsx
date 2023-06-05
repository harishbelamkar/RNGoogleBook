import { View, Image, StyleSheet, Text } from "react-native";
import { Rating } from 'react-native-ratings';

const BookDetails = ({ route }) => {
    const { bookData } = route.params

    return (
        <View>
            <View style={styles.imageContainer}>
            <Image
                source={{ uri: bookData.thumbnail }}
                resizeMode ={'stretch'}
                style={styles.bookImageStyle}
            />
            </View>
            <View style={styles.description}>
                <Text>Title: {bookData.title}</Text>
                <Text>Sub Title: {bookData.subTitle}</Text>
                <Text>Description: {bookData.description}</Text>
                <Text>Author: {bookData.authors}</Text>
                <Text>Publisher: {bookData.publisher}</Text>

                <Rating
                    type='star'
                    ratingCount={5}
                    ratingColor = {'red'}
                    startingValue={bookData.ratingCount}
                    readonly={true}
                    imageSize={30}
                    style={{paddingVertical: 10,paddingHorizontal:2 }}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E7E9',
        marginBottom: 10,
    },
    imageContainer: { margin: 5, borderRadius: 10 },
    description: { margin: 4, backgroundColor: 'lightgray', borderRadius: 10 },
    bookImageStyle: {
        borderRadius: 4,
        height: '60%',
        width: '100%',
    }
});

export default BookDetails;