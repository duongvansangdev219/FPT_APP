import React,{useContext} from 'react'
import {Text,Image, View } from 'react-native'
import {styles} from './Styles'
import {BrandContext} from '../../../Context/Brands';
import {Category} from '../../../../CategoryData';
const Brand = () => {
  const brands = useContext(BrandContext); 
    return (
        <View style={styles.brand}>
                  {brands.map((brands,index)=>{                
                  return <ListBrand key={brands._id}{...brands}/>
                })}
        </View>  
    )
}
const ListBrand=({brand_name,image})=>{
  return (
      <View>                        
           <View style={styles.brand2}>
               <Image 
              source={{uri:`${image}`}}
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
           }}>{brand_name}</Text>
      </View>
  )
}
export default Brand

