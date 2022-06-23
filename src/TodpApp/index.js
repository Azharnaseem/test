import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import {TodoAppData} from '../utills/Tododata';
import styles from './styles';
import Button from '../components/Button';

const TodoScreen = () => {
  const _renderItem = ({item, index}) => {
    return <Input title={item.name} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={TodoAppData}
        keyExtractor={({item, index}) => toString(index)}
        renderItem={_renderItem}
      />

      <Button title={'Add To Arr'} containerStyle={styles.btnAdd} />
    </View>
  );
};

export default TodoScreen;
