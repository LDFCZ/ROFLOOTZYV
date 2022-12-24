import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


import {useForm} from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

import CreateReviewFormScreen from '../CreateReviewFormScreen'


const HomeScreen = () => {

  const baseUrl = 'http://37.192.52.216:1103/'
  
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}reviews`).then((response) => {
      setReview([]);
      response.data.forEach(element => {
        addReview(element)
      });
      
    })
  }, [])
  
  const costyl = () => {
    axios.get(`${baseUrl}reviews`).then((response) => {
      setReview([]);
      response.data.forEach(element => {
        addReview(element)
      });
      
    })
  }

  const onReviewPressed = (item) => {
    navigation.navigate('Review', item);
  }
  
  

  const navigation = useNavigation();

  const addReview = (review) => {
    //console.log(review)
    
    let new_review = {review_id: 0 , review_name : '', author_name : '', review_short_body : '', review_rating : ''};
    new_review.review_id = review.id
    new_review.review_name = review.review_name
    new_review.author_name = review.author_name.user_name
    new_review.review_short_body = review.short_description
    new_review.review_rating = review.grade
    
    setReview((list) =>{
      return [
        new_review, 
        ...list
      ]
    })
    //console.log(new_review)
  }

  const renderItem = ({ item }) => (
    <View style={{alignItems: 'center'}}>

    <View style = {{marginTop: 5, backgroundColor: '#D9D9D9', width: '93.5%', top: '10%', borderRadius: 5, paddingLeft: 10,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
        <Text style = {{color: 'black'}}>{item.review_name}</Text>
        <Text style = {{color: 'red'}}>{item.author_name}</Text>
        <Text>{item.review_short_body}</Text>
        <Text style = {{color: '#cda419'}}>{item.review_rating}</Text>
      </TouchableOpacity>
    </View>
    </View>
  );

  return (
    <>
    <View style={{height: 88,}}>
      <CreateReviewFormScreen 
        costyl = {costyl}
      />
    </View>
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={styles.flatScroll}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data = {reviews}
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
    flex: 0.08,
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
    padding: 20,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  flatScroll: {
    flexGrow: 1,
    borderRadius: 10,
  },
  scroll: {
    flexGrow: 1,
  },
  
})

export default HomeScreen