import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button, TextInput,Pressable,FlatList} from 'react-native';
// FlatList it is used when user Srolled it renderd

export default function App() {
  const [EnterdText,setTect]=useState("")
  const[ArrTasks,SetArry]=useState([])
  function OnTextChang(ChangeText){
    setTect(ChangeText)

  }
  function OnButtonClick(){
    SetArry(Total_Tasks=>([...Total_Tasks,EnterdText]))

  }
  function ONChannge(task){
    SetArry(Total_Tasks=>{
      return Total_Tasks.filter((task)=>task!==task)
    })
    
  }
  return (
    

    
    
    <View style={styles.container}>
      <View style={styles.Tittle}>
         <Text>TO DO LIST APP</Text>
      </View>
     
      <View style={styles.inputContaner}>
      
      <TextInput placeholder='Add your task..?' 
      style={styles.textINput} 
      onChangeText={OnTextChang}/>
      <Button title='Add task' onPress={OnButtonClick}/>
      </View>
      <View style={styles.OutputContamer}>
        
      <FlatList alwaysBounceVertical={false} data={ArrTasks} renderItem={(itemData)=>{
        return(
          <Pressable onPress={ONChannge.bind(itemData.item)}>

            <Text  style={styles.taskItem}>{ itemData.item}</Text>
          </Pressable>)
        
      }}/>
       

    
      </View>
      
      
     

      
      
     
      
     </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:'#e6faff'


  },
  Tittle:{
    
   textAlign:"center",
   alignItems:"center",
   
   

  },
  inputContaner:{
    
    
    
    flex:1,
   

    marginTop:10,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"

   

  
  },
  textINput:{
    
    width:"70%",
    borderWidth:1,
    borderColor:"#cccccc"
  },
  OutputContamer:{
    flex:6,

  },
  taskItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:"white"


  }
});
