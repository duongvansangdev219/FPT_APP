import React, {useContext, useEffect,useState} from 'react'
import {Text,Image, View } from 'react-native'
import {styles} from './Styles'
import {BrandContext} from '../../../Context/Brands';
import {Category} from '../../../../CategoryData';
import Axios from 'axios'
const Brand = () => {
  // const brands = useContext(BrandContext); 
    return (
        <View style={styles.brand}>
                  {Category.map((brands,index)=>{                
                  return <ListBrand key={brands.id}{...brands}/>
                })}
        </View>  
    )
}
const ListBrand=({name,images})=>{
  return (
      <View>                        
           <View style={styles.brand2}>
               <Image 
              source={{uri:`${images}`}}
              style={{
                  width:29,
                  height:30,
                  flex:1,
                  marginLeft:8
              }}
              />
           </View>
           <Text style={{
               left:30,
               width:80,
               color:'red'
           }}>{name}</Text>
      </View>
  )
}
export default Brand

