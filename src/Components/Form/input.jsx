import React,{useState} from 'react'
import { StyleSheet } from 'react-native'

const input = () => {
    const [form, setform] = useState({});
    const [error, seterror] = useState({});

    const onchange =({name,value})=>{
        setform({...form,[name]:value})
    }
    const onSubmit=()=>{
        console.log('form:>>',form)
        if(!form.fullName){
            setError(pre=>{
                return{...pre,userName:"Please add a userName"}
            })
        }
    }
    return (
        <InforClient
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        error={error}/>
       
    )
}

export default input

const styles = StyleSheet.create({})
