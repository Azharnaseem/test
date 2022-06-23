import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {height} from 'react-native-dimension';
import Button from '../../components/Button';

const DataScreen = ({navigation, route}) => {
  const [selectedItem, setSelectedItem] = useState([]);
  //  console.log('data Show data screen  2:', route?.params?.Data);
  //  console.log('index of deleting object:', route?.params?.index);
  let dataInfo = route?.params?.Data;

  // console.log(route.params.obj, '======', route.params.index, '===', dataInfo);
  let Obj = route.params.obj;
  let index = route.params.index;
  // console.log('obj:', Obj);
  // console.log('index:', index);
  dataInfo[index] = Obj;
  console.log('===new data', dataInfo);
  // console.log('data Show data screen  2:', dataInfo);
  const Delete = (index) => {
    let array = [...selectedItem];
    array = dataInfo.splice(index, 1);
    setSelectedItem(array);
    console.log('data after', dataInfo);
  };
  // console.log('after array', dataInfo);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mainConatainer}>
        <View style={styles.btnContainer}>
          <Button
            title={'Edit'}
            containerStyle={styles.editbtn}
            onPress={() => {
              navigation.navigate('crudOperation', {
                item: item,
                index: index,
              });
            }}
          />
          <Button
            title={'Delete'}
            containerStyle={styles.deletebtn}
            onPress={() => {
              Delete(index);
            }}
          />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.textStyle}>{'Name: ' + item?.name}</Text>
          <Text style={styles.textStyle}>
            {'Father Name: ' + item?.fatherName}
          </Text>
          <Text style={styles.textStyle}>{'ID NO: ' + item?.idCard}</Text>
          <Text style={styles.textStyle}>
            {'Profession: ' + item?.profession}
          </Text>
          <Text style={styles.textStyle}>{'City: ' + item?.city}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <Button
        title={'Go back'}
        onPress={() => navigation.navigate('crudOperation')}
      />
      <View style={styles.mainViewContainer}>
        <FlatList
          data={dataInfo}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          ListEmptyComponent={<Text>List is Empty q </Text>}
        />
      </View>
    </>
  );
};

export default DataScreen;
