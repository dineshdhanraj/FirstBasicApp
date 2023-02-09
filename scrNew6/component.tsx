import React,{useEffect} from 'react';
import {Text,View,Button, FlatList, ActivityIndicator, ProgressBarAndroid} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from './actions';
import { useNavigation } from '@react-navigation/native';

const dataArray=[
    {key:'A'},{key:'B'},{key:'C'},{key:'D'},{key:'E'},{key:'F'},{key:'G'}];

    function Item({title}){
        return(
        <View style={{ marginTop:10, backgroundColor:'red' }}><Text style={{color:'blue'}}>I AM DINESH {title}</Text></View>
        );
    }
const Home1=()=>{
  const navigation = useNavigation();
    const { data, loading, error } = useSelector((state: any) => state);
const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchData("https://jsonplaceholder.typicode.com/posts"));
},[]);
console.log('I AM ORIGINAL DATA');
return(
    <View>
        <Button title='Second_Screen' onPress={()=>navigation.navigate('HomeScreen')}/>
        <FlatList
        data={dataArray}
        horizontal={true}
        renderItem={({item})=><Item title={item.key}/>}
        />
        <Text style={{color:'black'}}>I AM Dinesh</Text>
        <ActivityIndicator size="large"/>
        <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={true}
        progress={0.1}
      />
    </View>
);
}

export default Home1;
//https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-06-20

