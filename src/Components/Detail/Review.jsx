import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Card } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Review = () => {
    return (
        <View>
             <Card>
                <Card.Title>Duy</Card.Title>
                <Card.Divider/>
                <FontAwesome name="star" size={20} style={styles.Star}/>
                <Text>okokok</Text>
                <FontAwesome name="thumbs-up" size={20} style={{color:"blue"}}/>              
            </Card>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    Star:{
        flexDirection:'row',
        color:'#FF8000',
        marginLeft:5
    },
})
