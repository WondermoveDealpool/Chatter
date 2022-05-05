import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import unsplashClient from '../../../apis/UnsplashAPI/unsplashClient';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';
import {HomeFeedStackParamList} from '../../../navigations/Types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;

const CellContainer = styled.View`
  align-self: center;
  width: 96%;
  height: 80px;
  background-color: white;
  border-color: lightgray;
  border-width: 0.5px;
  border-radius: 10px;
  margin-bottom: 6px;
`;

export const SearchBar = styled.TextInput`
  width: 96%;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  align-self: center;
  padding-left: 32px;
  margin-bottom: 8px;
  border-color: lightgray;
  border-width: 1px;
  font-size: 16px;
  color: black;
`;

const HomeFeed = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeFeedStackParamList>>();

  return (
    <MainContainer>
      <SearchBar
        placeholder="찾고 싶은 닉네임을 입력해주세요"
        onTouchStart={() => navigation.navigate('SearchResults')}
      />
      <IonIcon
        style={{position: 'absolute', marginTop: 11, marginLeft: 16}}
        name="search-outline"
        size={20}
        color="black"
      />
      {/* <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      /> */}
    </MainContainer>
  );
};

export default HomeFeed;
