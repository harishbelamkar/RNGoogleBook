import React, { useCallback, useState } from 'react';

import { ActivityIndicator, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchBar from '../component/searchbar';
import ErrorMessage from '../component/errorFound';
import SearchPlaceHolder from '../component/searchPlaceholder';
import BooksTile from '../component/booksTile';
import AppConfig from '../config/appConfig';
import {useNetInfo} from '../utility/useNetInfo'

const SearchScreen = () => {
    const navigation = useNavigation();
    const [listBooks, setListBooks] = useState < any > ([]);
    const [searchText, setSearchText] = useState < string > ('');
    const [loading, setLoading] = useState < boolean > (false);
    const [errorAPI, setErrorAPI] = useState < string > ('');
    const [pageIndex, setPageIndex] = useState < number > (0);
    const [loadMoreBooks, setLoadMoreBooks] = useState < boolean > (true);
    const [isConnected] = useNetInfo();

    const fetchBooks = () => {
        const arrBooks: any = [];
        let query = `?q=${searchText}&key=${AppConfig.apiKey}&startIndex=${pageIndex}&maxResults=${AppConfig.pageLimit}`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }

        setLoading(true);
        fetch(`${AppConfig.apiEndPoint}${query}`, options)
            .then(response => response.json())
            .then(responseData => {
                const { items: books, totalItems, error } = responseData;
                if (error?.message) {
                    setErrorAPI(error?.message);
                }
                if (totalItems === 0) {
                    setLoadMoreBooks(false);
                }

                if (books) {
                    books.map(book => {
                        const bookObject = {
                            description: book.description || 'No description',
                            authors: book.volumeInfo.authors ? book.volumeInfo.authors.toString().replace(/,/g, ', ') : '',
                            title: book.volumeInfo.title,
                            ratingCount: book.volumeInfo.averageRating || 0,
                            bookId: book.id,
                            subTitle: book.volumeInfo.subtitle,
                            publisher: book.volumeInfo.publisher ? book.volumeInfo.publisher.toString().replace(/"/g, '') : '',
                            publishedDate: book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.substring(0, 4) : '',
                            thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://i.ibb.co/YLC0nQQ/not-found.png',
                        }
                        arrBooks.push(bookObject);
                    });

                    setListBooks([...listBooks, ...arrBooks]);
                    setPageIndex(pageIndex + AppConfig.pageLimit);
                }
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                setErrorAPI('Something wrong')
            })
    }

    const onSubmitClicked = () => {
        fetchBooks();
    }

    const bookPressed = (item) => {
        navigation.navigate('Detail',{bookData:item});
    }

    const renderBookTiles = useCallback(({ item }) => {
        return (
            <BooksTile key={item.id}
                bookItem={item}
                bookPressed = {bookPressed} />
        );
    }, [listBooks])

    const keyExtractorCallback = useCallback((item: any) => {
        return `${item.bookId}${Math.floor(Math.random() * 1000)}`
    }, [])


    const onEndReachCallback = () => {
        if (loadMoreBooks)
            fetchBooks();
    }
    const onResetClicked = () => {
        setSearchText('');
        setListBooks([])
        setPageIndex(1)
        setLoading(false);
        setLoadMoreBooks(true)
        setErrorAPI('')
    }

    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText}
                onSearch={setSearchText}
                onSubmit={onSubmitClicked}
                onReset={onResetClicked} />


            {loading && (
                <ActivityIndicator size={'large'} color={'red'} />
            )}

            {errorAPI && (
                <View style={styles.errorStyle}>
                    <ErrorMessage errormsg={errorAPI} />
                </View>
            )}

            {!isConnected && (
                <View style={styles.errorStyle}>
                <ErrorMessage errormsg={'No Internet Connection!'} />
            </View>
            )}



            {(listBooks.length == 0 && errorAPI.length == 0) && (
                <View style={styles.placeHolderStyle}>
                    <SearchPlaceHolder />
                </View>
            )}
            <FlatList
                style={styles.bookTable}
                data={listBooks}
                renderItem={renderBookTiles}
                keyExtractor={keyExtractorCallback}
                onEndReached={onEndReachCallback}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'transparent', height: '100%' },
    errorStyle: { height: '70%', justifyContent: 'center', alignItems: 'center' },
    placeHolderStyle: { height: '70%', backgroundColor:'transparent', justifyContent: 'center', alignItems: 'center' },
    bookTable: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
});

export default (SearchScreen);

