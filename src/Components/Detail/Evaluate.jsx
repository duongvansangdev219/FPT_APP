import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Comment from './Comment';
import Review from './Review';
const Evaluate = () => {
    return (
        <View>
            <Text style={{fontSize:15,color:'black',fontWeight:'bold',left:10}}>Đánh giá & Nhận xét Samsung Galaxy S21 UItra</Text>
            <View style={{flexDirection:'row'}}>
                <View style={styles}>
                    <Text style={{fontSize:35,color:'red',fontWeight:'bold',left:30,top:20}}>5/5</Text>
                    <View style={{flexDirection:'row',color:'red',marginLeft:5,top:20}}>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                    </View>
                    <Text style={{top:25,left:20}}>1 đánh giá</Text>
                </View>
                <View style={styles.evaluate}>                                
                    <ProgressBar progress={0.5} color={Colors.red800} style={styles.progress} />
                    <ProgressBar progress={0.4} color={Colors.red800} style={styles.progress} />
                    <ProgressBar progress={0.3} color={Colors.red800} style={styles.progress} />
                    <ProgressBar progress={0.2} color={Colors.red800} style={styles.progress} />
                    <ProgressBar progress={0.1} color={Colors.red800} style={styles.progress} />
                </View>                       
            </View>
            <Button title="Gửi đánh giá của bạn" color="red"/>
            <Comment/>
            <Review/>
        </View>
    )
}

export default Evaluate

const styles = StyleSheet.create({
    Star:{
        flexDirection:'row',
        color:'#FF8000',
        marginLeft:5
    },
    evaluate:{
        marginTop:20,
        width:'100%',
        height:100,
    },
    progress:{
        marginTop:10,
        height:5,
        marginLeft:30,
        width:180,
        color:'#00CC00'
    },
})
