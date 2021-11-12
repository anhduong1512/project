import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {styles.mainBlock}>  
      {/* Главный блок, который 50% экрана занимает */}
      <View>
        {/* Block1 = Формула & 5 окошек, в которые можно тапнуть пальцем */}
         {/* Block1a = Формула */}
        <Text style = {styles.Block1a}> Q = c * m * (T2-T1) </Text> 
       {/* Block1b = 5 окошек */}
        <View style = {styles.Block1b}>
          <TextInput style = {[styles.Block1b,{flex:'10%'}]} ></TextInput>
          <TextInput style = {[styles.Block1b,{flex:'10%'}]}></TextInput>
          <TextInput style = {[styles.Block1b,{flex:'10%'}]}></TextInput>
          <TextInput style = {[styles.Block1b,{flex:'10%'}]}></TextInput>
          <TextInput style = {[styles.Block1b,{flex:'10%'}]}></TextInput>
        </View>
      </View>
      {/* Block2 = "Q =" & поле ввода Q & единица измерения Q */}
      <View style = {styles.Block2}>
        {/* Block2a = "Q ="  */}
        <Text style={[styles.Block2a,{flex:'10%'}]}> Q = </Text>
        {/* Block2b = поле ввода Q */}
        <TextInput style={[styles.Block2b,{flex:'50%'}]}  placeholder = 'Вводите Q'/>
        {/* Block2c = Единица измерения Q */}
        <Text style = {[styles.Block2c,{flex:'40%'}]}></Text>
      </View>
      {/* Стиль c аналогичен Q */}
      <View style = {styles.Block2}>
        <Text style={[styles.Block2a,{flex:'10%'}]}> c = </Text>
        <TextInput style={[styles.Block2b,{flex:'50%'}]}  placeholder = 'Вводите c'/>
        <Text style = {[styles.Block2c,{flex:'40%'}]}></Text>
      </View>
    {/* Block3 = T кипения & T замера  */}
    <View style = {styles.Block3}>
      {/* Block3a = T кипения */}
      <Text style = {[styles.Block3a, {flex: '30%'}]}> T кипения = </Text>
      {/* Block3a   = T замера */}
      <Text style = {[styles.Block3a, {flex: '30%'}]}> T замера = </Text>
      <Text style = {[styles.Block2a, {flex: '40%'}]}> </Text>
    </View>
    

     {/* Стили m, T1, T2 аналогичны Q, c */}
     <View style = {styles.Block2}>
        <Text style={[styles.Block2a,{flex:'10%'}]}> m = </Text>
        <TextInput style={[styles.Block2b,{flex:'50%'}]}  placeholder = 'Вводите m'/>
        <Text style = {[styles.Block2c,{flex:'40%'}]}></Text>
      </View>
      <View style = {styles.Block2}>
        <Text style={[styles.Block2a,{flex:'10%'}]}> T2 = </Text>
        <TextInput style={[styles.Block2b,{flex:'50%'}]}  placeholder = 'Вводите T2'/>
        <Text style = {[styles.Block2c,{flex:'40%'}]}></Text>
      </View>

        <View style = {styles.Block2}>
          <Text style={[styles.Block2a,{flex:'10%'}]}> T1 = </Text>
          <TextInput style={[styles.Block2b,{flex:'50%'}]}  placeholder = 'Вводите T1'/>
          <Text style = {[styles.Block2c,{flex:'40%'}]}></Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock:
  {
    flex: '50%',
    flexDirection: 'column',
  },
  Block1a:
  {
      backgroundColor: 'grey',
      fontWeight: 'bold',
      textAlign:'center',
  },
  Block1b:
  {
    flexDirection: 'row',
    borderWith: 2,
    alignItems: 'center',

  },
  Block2:
  {
    flexDirection: 'row',
    
  },
  Block2a:
  {

  },
  Block2b:
  {
    backgroundColor:'grey',
  },
  Block2c:
  {

  },
  Block3:
  {
    flexDirection: 'row',
  },
  Block3a:
  {
    backgroundColor: 'gray',
  }



});
