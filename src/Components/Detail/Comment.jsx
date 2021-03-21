import * as React from 'react';
import { StyleSheet, View} from 'react-native'
import { TextInput} from 'react-native-paper';
import {Card } from 'react-native-elements'

const Comment = () => {
    const [text, setText] = React.useState('');
    return (
        <View>
            <Card>
                <Card.Title>Hỏi & Đáp về Samsung Galaxy......</Card.Title>
                <TextInput label="Viết bình luận" value={text} onChangeText={text => setText(text)}/>
            </Card>
        </View>
    )
}

export default Comment

const styles = StyleSheet.create({})
