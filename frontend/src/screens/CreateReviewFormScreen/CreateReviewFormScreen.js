import { View, Text, ScrollView, StyleSheet, Modal } from 'react-native'
import React, {useState, useContext} from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import {useForm} from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../../components/AppContext'
import axios from 'axios'

const CreateReviewFormScreen = ({costyl}) => {
  
  const myContext = useContext(AppContext);
  
  const baseUrl = 'http://37.192.52.216:1103/'
  
  const navigation = useNavigation();

  const [modalVisibility, setModalVisibity] = useState(false);

  const onPostPressed = (data) => {
    //console.log(data)
    
    let reviewInfo = {
      review_name : data.review_name,
      
      author_name: {
        id: myContext.id,
        user_name: myContext.user_name,
        password: myContext.password,
      },

      short_description: data.review_short_body,
      full_description: data.review_full_body,
      grade: data.review_rating,
      
    }

    //console.log(reviewInfo);

    axios.post(`${baseUrl}reviews`, reviewInfo)
    
    setModalVisibity(false);
    costyl();
    resetField('review_name')
    resetField('review_short_body')
    resetField('review_full_body')
    resetField('review_rating')
  }

  const onCreateReviewPressed = () => {
    setModalVisibity(true);
  }

  const onCancelPressed = () => {
    resetField('review_name')
    resetField('review_short_body')
    resetField('review_full_body')
    resetField('review_rating')

    setModalVisibity(false);
    control._fields.value = '';
  }

  const onAuthPressed = () => {
    //console.log(myContext.authorised)
    navigation.navigate('SignIn');
  }

  const {
    control, 
    handleSubmit,  
    formState: {data},
    resetField,
  } = useForm();

  return (
    <View style={styles.logo}>
        {!myContext.authorised ? ( 
          <CustomButton 
          type = 'HOME'
          text = 'Авторизация'
          onPress = {onAuthPressed}
          />) : (
            <CustomButton 
            type = 'HOME'
            text = 'Создать отзыв'
            onPress = {onCreateReviewPressed}
          />
        )}
        <CustomInput 
          name = 'seach'
          placeholder = 'Поиск...'
          control = {control} 
          secureTextEntry = {false}
          type = 'HOME'      
        />
        <Modal 
          visible={modalVisibility} 
          animationType="slide"
          
        >
          <View style = {{flex: 1, }}>
            <ScrollView 
              style={{flex: 1}}
              contentContainerStyle={styles.scroll}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.modal}>
                <CustomButton 
                  type = 'CANCEL'
                  text = 'Отмена'
                  onPress={onCancelPressed}
                />

              </View>

              <View style={{alignItems: 'center'}}>

                <CustomInput
                  name = 'review_name'
                  placeholder = 'Название'
                  control = {control} 
                  type = 'NAME_FIELD'
                  maxLengh = {50}
                  multiline = {true}
                  rules = {{
                    required: 'Это обязательное поле', 
                    minLength: {
                      value: 3, 
                      message: 'Название должно быть больше 3 символов'
                    },
                  }}
                />

                <CustomInput 
                  name = 'review_short_body'
                  placeholder={'Краткое описание'}
                  control = {control}
                  type = 'SHORT_DESC'
                  multiline = {true}
                  maxLengh = {75}
                  rules = {{
                    required: 'Это обязательное поле', 
                    minLength: {
                      value: 3, 
                      message: 'Краткое описание должно быть больше 3 символов'
                    },
                  }}
                />

                <CustomInput 
                  name = 'review_full_body'
                  placeholder={'Описание отзыва'}
                  control = {control}
                  type = 'LONG_DESC'
                  multiline = {true}
                  maxLengh = {500}
                  rules = {{
                    required: 'Это обязательное поле', 
                    minLength: {
                      value: 3, 
                      message: 'Описание должно быть больше 3 символов'
                    },
                  }}
                />

                <CustomInput 
                  name = 'review_rating'
                  placeholder={'Ваша оценка'}
                  control = {control}
                  type = 'RATING'
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
                  text = 'Рофлопостнуть'
                  onPress={handleSubmit(onPostPressed)}
                  type = 'POST'
                />
              </View>
            </ScrollView>   
          </View>
        </Modal>
      </View>
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
    alignItems: 'center'
  },
  scroll: {
    flexGrow: 1,
  },
  
})

export default CreateReviewFormScreen