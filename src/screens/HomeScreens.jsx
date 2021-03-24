import React from 'react'
import {StyleSheet,View,Button,ScrollView} from 'react-native'
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import Laptop from '../Components/Home/Laptop/Laptop';
import Banner_2 from '../Components/Home/Banner/Banner_2';
import Brand from '../Components/Home/Brand/Brand';
import Information_Hot from '../Components/UI/Information_Hot';
import ProductSale from '../Components/Home/Sale_Hot/ProductSale';
import LapTopSW from '../Components/Home/LapTopSellingWell/LapTopSW';
import Accessories from '../Components/Home/Accessories/Accessories';
import Container_SCF from '../Components/UI/Container_SCF';
import Smartphones from '../Components/Home/Smartphone/Smartphones';

const Home = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <ScrollView style={styles.scrollView}>   
                <Header/>
                <Banner_2/>
                <Brand/>
                <ProductSale/>
                <Banner_2/>
                <Laptop/>
                <Smartphones/>
                <LapTopSW/>
                <Accessories/>
                <Container_SCF/>
                <Information_Hot/>
                <Footer/>
            </ScrollView>          
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#fff"
    },
    scrollView: {
        backgroundColor: '#EEEEEE',
      },
})
