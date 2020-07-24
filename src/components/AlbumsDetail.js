import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumsDetail = ({album: {thumbnail_image,title,artist,image,url}}) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle} >
                    <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={styles.textStyle}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{uri:image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy Now!!!</Text>
                </Button>
            </CardSection>
       </Card>
    )
};

styles = {
    textStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle: {
       // width: null,
        flex: 1,
        height: 400,
    },
        titleStyle:{
            fontSize: 18,
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        marginRight: 10,
        borderWidth:2,
        borderColor:'#000',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default AlbumsDetail;