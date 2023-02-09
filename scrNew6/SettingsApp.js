import React,{ useEffect } from 'react';
import { fetchData2 } from './actions';
import { useSelector,useDispatch } from 'react-redux';
import { Text,View,FlatList, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Item({title}){
  const navigation = useNavigation();
  return(
    <TouchableWithoutFeedback onPress={()=>{console.log('I AM BEING CLICKED'); navigation.navigate('HomeScreen5')}}>
    <View style={{paddingTop:20}}>
      <Text style={{color:'red',marginTop:20}}>I NEED MAG VALUE {title}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}
export default function SettingsApp() {
const dispatch=useDispatch();
const {tracker}=useSelector((state)=>state);
console.log('I NEED TRACKER',tracker);
  useEffect(()=>{
dispatch(fetchData2("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-06-20"));
  },[])
    return (
      <FlatList
      data={tracker.features}
      renderItem={({item})=><Item title={item.properties.place}/>}/>
    );
  }
  