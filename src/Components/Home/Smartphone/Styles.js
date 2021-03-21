import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    Container:{   
        width:'90%',
        borderRadius:5,
        margin:20,
        height:700,
        backgroundColor:'#fff'
    },
    Text:{
        fontWeight:'bold',
        fontSize:20,
        padding:10
    },
    Container2:{
        width:'50%',
        paddingLeft:10,
        marginTop:10,
        height:300,
    },
    images:{
        width:160,
        height:170
    },
    installment:{
        bottom:50,
        width:80,
        height:20,
        color:'#fff',
        borderRadius:5,
        textAlign:'center',
        backgroundColor:'#FF8000'
    },
    nameProduct:{
        fontWeight:'bold',
        color:'#424242',
        bottom:25
    },
    prices:{
        bottom:10,
        fontWeight:'bold',
        width:100,
        height:20,
        color:'#fff',
        borderRadius:10,
        textAlign:'center',
        backgroundColor:'red'
    },
    lucky:{
        bottom:40,
        width:100,
        height:20,
        color:'#fff',
        borderRadius:5,
        textAlign:'center',
        backgroundColor:'red'
    },
    discount:{
        textDecorationLine:'line-through',
        color:'#585858',
    }
})