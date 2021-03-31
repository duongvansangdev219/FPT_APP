import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,Image, Button  } from 'react-native'
import { CheckBox ,Card } from 'react-native-elements'
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header'
import ImageProduct from '../Components/Detail/ImageProduct';
import Evaluate from '../Components/Detail/Evaluate'
import {RadioButton} from 'react-native-paper';
import {CART} from '../Navigations/constants/RouterNames';
import { useNavigation } from '@react-navigation/native';


const Detail = (route) => {
    const [checked,setchecked] = useState('first')
    const [Ram, setRam] = useState('first')
   
    const navigation = useNavigation();
    const productsID=route.route.params.products._id
    console.log(productsID)

  
    const addToCartHandler=()=>{      
        navigation.push(CART,{productsID})
    }
   
    return (
        <View style={styles.Container}>
            <ScrollView style={styles.scrollView}>
                <Header/>
                <View>                 
                <ImageProduct {...route}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <RadioButton 
                                value="first"
                                status={Ram === 'first' ? 'checked' : 'unchecked'}
                                onPress={()=>setRam('first')}
                                title='' uncheckedIcon='circle-o'/>   
                                <View>
                                    <Text style={{top:8}}>64GB</Text>  
                                    <Text style={{top:8}}>28.990.000</Text>                                  
                                </View>                    
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <RadioButton 
                                value="first"
                                status={Ram === 'tow' ? 'checked' : 'unchecked'}
                                onPress={()=>setRam('tow')}
                                title='' uncheckedIcon='circle-o'/>   
                                <View>
                                    <Text style={{top:8}}>128GB</Text>  
                                    <Text style={{top:8}}>28.990.000</Text> 
                                </View>                    
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <RadioButton 
                                value="three"
                                status={Ram === 'three' ? 'checked' : 'unchecked'}
                                onPress={()=>setRam('three')}
                                title='' uncheckedIcon='circle-o'/>   
                                <View>
                                    <Text style={{top:8}}>128GB</Text>  
                                    <Text style={{top:8}}>28.990.000</Text> 
                                </View>                    
                        </View> 
                    </View>      

                    <View style={{flexDirection:'row'}}>
                        <CheckBox uncheckedIcon={<Image source={require('../assets/iphone12.png')} style={styles.checkImage}/>}/>
                        <Text style={{top:65,right:60}}>Xanh</Text>
                        <CheckBox uncheckedIcon={<Image source={require('../assets/iphone12.png')} style={styles.checkImage}/>}/>
                        <Text style={{top:65,right:60}}>Vàng</Text>
                        <CheckBox uncheckedIcon={<Image source={require('../assets/iphone12.png')} style={styles.checkImage}/>}/>
                        <Text style={{top:65,right:60}}>Xám</Text>
                        <CheckBox uncheckedIcon={<Image source={require('../assets/iphone12.png')} style={styles.checkImage}/>}/>
                        <Text style={{top:65,right:60}}>Bạc</Text>
                    </View>

                    <View style={styles.card}>
                        <Card>
                            <Card.Title>Chọn 1 trong 2 khuyến mãi sau</Card.Title>
                                <View style={{flexDirection:'row'}}>
                                    <RadioButton 
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={()=>setchecked('first')}
                                    title='' uncheckedIcon='circle-o'/>     
                                    <Text style={{top:8}}>Lì xì ngay 3.000.000đ áp dụng đến 18/02</Text>  
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <RadioButton 
                                    value="town"
                                    status={checked === 'town' ? 'checked' : 'unchecked'}
                                    onPress={()=>setchecked('town')}
                                    title='' uncheckedIcon='circle-o'/>     
                                    <Text style={{top:8}}>Trả góp 10%</Text>  
                                </View>
                                
                        </Card>                  
                    </View>
                    <View style={styles.card}>
                        <Card>
                            <Card.Title>Ưu đãi thêm</Card.Title>
                            <Text>Tặng PMH 200.000đ mua củ sạc nhanh 20W chính hãng</Text>     
                            <Text>Tặng PMH 200.000đ mua tai nghe EarPods</Text>        
                            <Text>Thu cũ đổi mới-Trợ giá ngay 15%</Text>   
                            <Text>Tặng bảo hành 2 năm chính hãng áp dụng đến 18/2</Text>               
                        </Card>                  
                    </View>
                    <Button title="MUA NGAY" color="red" onPress={() => addToCartHandler()} />
                    <View style={styles.buttonx}>
                        <Button title="TRẢ GÓP 0%" color="#0000FF"/>
                        <Button title="TRẢ GÓP QUA THẺ" color="#0000FF"/>
                    </View>
                    <Text> Gọi<Text style={{color:'red',fontWeight:'bold',left:10}}> 1800-6601</Text> để được tư vấn mua hàng(miễn phí)</Text>
                    <View >
                        <Card>
                            <Card.Title>Mua hàng cũ:iPhone 12 Pro 256GB</Card.Title>
                            <Text>Giá từ:<Text style={{color:'red',fontWeight:'bold'}}> 28.688.000đ</Text></Text>                    
                        </Card>                  
                    </View>
                    <Evaluate/>
                    <Footer/>
                    {/* <FAB/> */}
                </View>
            </ScrollView>         
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#fff"
    },
    RAM128GB:{
        width:'33%',
        height:70,
        backgroundColor:'#D8D8D8'
    },
    RAM256GB:{
        width:'33%',
        height:70,
        backgroundColor:'#A4A4A4'
    },
    RAM512GB:{
        width:'33%',
        height:70,
        backgroundColor:'#D8D8D8'
    },
    checkImage:{
        width:40,
        height:40,
    },
    card:{
        marginTop:20,
        width:'100%',
        height:180,
    },
    buttonx:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:5,
        padding:20,
        width:'100%', 
    },

})
