import { View, Text, StyleSheet, ScrollView, FlatList, Modal } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import AppContext from '../AppContext'

const Review = ({route}) => {
  const myContext = useContext(AppContext);

  const baseUrl = 'http://37.192.52.216:1103/'
  
  const [modalVisibility, setModalVisibity] = useState(false);
  
  const navigation = useNavigation();
  
  const onRegPress = () => {
    navigation.navigate('SignUp')
  }

  const {
    control, 
    handleSubmit,  
    formState: {data},
    resetField,
  } = useForm();

  const [fullComm, setFullComm] = useState('')

  useEffect(() => {
    axios.get(`${baseUrl}reviews/${route.params.review_id}`).then((response) => {
      //console.log(response.data)
      setFullComm(response.data.full_description)
      //console.log(route.params)
      //addComment(response.data);
      
    })
    axios.get(`${baseUrl}reviews/${route.params.review_id}`).then((response) => {
      //console.log(response.data)
      setComment([]);
      response.data.comments.forEach(element => {
        addComment(element)
      });
      
    })
  }, [])

  const onPostPressed = (data) => {
    //console.log(data);
    route.params.addComment(data);
    setModalVisibity(false)
  }


  const onCreateCommentPressed = () => {
    //console.log(route.params)
    setModalVisibity(true);
  }

  const [comment, setComment] = useState([]);

  const onCancelPressed = () => {
    navigation.navigate('Home');
  }

  const onBackPressed = () => {
    resetField('comment_text')
    resetField('comment_rating')
    setModalVisibity(false);
  }

  const addComment = (comment) => {
    //console.log(comment)
    let new_comment = {comment_id: 0 , comment_text : '', author_name : '', comment_rating : ''};
    
    new_comment.comment_id = comment.id
    new_comment.comment_text = comment.text
    new_comment.author_name = comment.author_name.user_name
    new_comment.comment_rating = comment.grade
    
    setComment((list) =>{
      return [
        new_comment, 
        ...list
      ]
    })
  }

  const onCommentPressed = (data) => {
    //console.log(data);
    let reviewInfo = {
      
      author_name: {
        id: myContext.id,
        user_name: myContext.user_name,
        password: myContext.password,
      },

      text: data.comment_text,
      grade: data.comment_rating,
      
    }
    //console.log(reviewInfo)
    //console.log(`${baseUrl}comments/${route.params.review_id}`)
    axios.post(`${baseUrl}comments/${route.params.review_id}`, reviewInfo)
    
    setModalVisibity(false);
    axios.get(`${baseUrl}reviews/${route.params.review_id}`).then((response) => {
      //console.log(response.data)
      setComment([]);
      response.data.comments.forEach(element => {
        addComment(element)
      });
      
    })
    resetField('comment_text')
    resetField('comment_rating')
    //addComment(data);
    
  }

  const renderItem = ({ item }) => (
    <View style={{alignItems: 'center',  marginTop: 5, top: '8%'}}>
      <View style = {{marginTop: 5, backgroundColor: '#D9D9D9', width: '93.5%', borderRadius: 5, paddingLeft: 10, paddingTop: 10}}>
        <Text style = {{color: 'red'}}>{item.author_name}{'\n'}</Text>
        <Text style={{color: 'black',}}>{item.comment_text}{'\n'}</Text>
        <Text style={{color: '#cda419',}}>{item.comment_rating}{'\n'}</Text>
      </View>
    </View>
  );
  
  return ( 
    <> 
      <View>
        
        <Modal visible = {modalVisibility} animationType = 'slide'>
          <View style = {{flex: 1}}>
            <ScrollView 
              style={{flex: 1}}
              contentContainerStyle={styles.scroll}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              >
              <View style={styles.buttonModal}>
                <CustomButton 
                  type = 'CANCEL'
                  text = 'Отмена'
                  onPress={onBackPressed}
                  />

              </View>
              <View style={{alignItems: 'center'}}>

              <CustomInput
                name = 'comment_text'
                placeholder = 'Текст комментария'
                control = {control} 
                type = 'COMM_NAME_FIELD'
                maxLengh = {500}
                multiline = {true}
                rules = {{
                  required: 'Это обязательное поле', 
                  minLength: {
                    value: 3, 
                    message: 'Текст комментария должен быть больше 3 символов'
                  },
                }}
                />

              <CustomInput 
                name = 'comment_rating'
                placeholder={'Ваша оценка'}
                control = {control}
                type = 'COMM_RATING'
                multiline = {true}
                maxLengh = {50}
                rules = {{
                  required: 'Это обязательное поле', 
                  minLength: {
                    value: 3, 
                    message: 'Оценка должна быть больше 3 символов'
                  },
                }}
                />
        
              <CustomButton 
                text = 'Рофлокомментнуть'
                onPress={handleSubmit(onCommentPressed)}
                type = 'POST'
                />
            </View>
              
            </ScrollView>   
          </View>
        </Modal>

        <View style={{height: 97,}}>
          <View style={styles.logo}>
            <CustomButton 
              type = 'CANCEL'
              text = 'Назад'
              onPress={onCancelPressed}
              />
          </View>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nameText}>
            {route.params.review_name}{'\n\n'}
            Автор: {route.params.author_name}{'\n\n'}
            {route.params.review_short_body}{'\n\n'}
            {fullComm}{'\n\n'}
            Оценка = 
            <Text style={{color: '#cda419'}}>{route.params.review_rating}</Text>{'\n'}
              {myContext.authorised ? (
              <CustomButton 
                type = 'COMMENT'
                text = 'Рофлокомментнуть'
                onPress={onCreateCommentPressed}
              />) : (
                <CustomButton 
                  type = 'COMMENT'
                  text = {`Зарегистрироваться,\nчтобы рофлокомментнуть`}
                  onPress={onRegPress}
                />
              )}
            </Text>
            
        </View>
        
      </View>
        <View style={styles.container}>
          <Text style={{top: '2%', paddingLeft: 10, fontSize: 20,}}>Комментарии:</Text>
        <FlatList 
          contentContainerStyle={styles.flatScroll}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data = {comment}
          renderItem = {renderItem}
        />
      </View>
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
  logo: {
    backgroundColor: '#51AE77',
    flex: 1,
    width: '100%',
    
    //alignItems: 'center',
    padding: 20,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    
  },

  modal: {
    backgroundColor: '#51AE77',
    flex: 1,
    width: '100%',
    //alignItems: 'center',
    height: 73,
    padding: 20,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },

  buttonModal: {
    backgroundColor: '#51AE77',
    flex: 0.08,
    width: '100%',
    //alignItems: 'center',
    height: 73,
    padding: 20,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },


  flatScroll: {
    flexGrow: 1,
    
  },
  scroll: {
    flexGrow: 1,
  },
  nameText: {
    top: '5%', 
    backgroundColor: '#D9D9D9', 
    width: '95%', 
    borderRadius: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 7,

    
  }
  
})
export default Review