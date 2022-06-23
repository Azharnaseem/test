import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {add} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CommonStyles from '../../utills/CommonStyles';

const crudOperation = ({navigation, route}) => {
  let item = route?.params?.item;
  let index = route?.params?.index;

  function clearnow() {
    setName('');
    setCity('');
  }

  // console.log('editing field data:', item);
  //console.log('index of edited element :', route?.params?.index);
  const [name, setName] = useState(item?.name ? item.name : '');
  const [fatherName, setFatherName] = useState(
    item?.fatherName ? item.fatherName : '',
  );
  const [idCard, setIdCard] = useState(item?.idCard ? item.idCard : '');
  const [profession, setProfession] = useState(
    item?.profession ? item.profession : '',
  );
  const [city, setCity] = useState(item?.city ? item.city : '');
  const [Data, setData] = useState([]);

  const Update = () => {
    let obj = {
      name: name,
      fatherName: fatherName,
      idCard: idCard,
      profession: profession,
      city: city,
    };

    // item.splice(index, index);
    navigation.navigate('DataScreen', {obj: obj, index: index, Data: Data});
  };

  const Add = () => {
    if (!name) {
      alert('Name Is Empty');
      return;
    } else if (!fatherName) {
      alert('Father Name is Empty');
      return;
    } else if (!idCard) {
      alert('id card is Empty');
      return;
    } else if (!profession) {
      alert('profession is empty');
      return;
    } else if (!city) {
      alert('city is empty ');
      return;
    } else {
      let temp = [...Data];
      temp.push({
        name: name,
        fatherName: fatherName,
        idCard: idCard,
        profession: profession,
        city: city,
      });
      setData(temp);
      clearnow();
      setTimeout(() => {
        // setData('');
        // console.log('added data on crud Screen:', temp);
        navigation.navigate('DataScreen', {Data: temp});
      }, 2000);
    }
  };

  // const OnClearArray = () => {
  //   setData({Data: ''});
  // };

  return (
    <>
      <View style={styles.mainViewContainer}>
        <Button
          title={'See existing data'}
          containerStyle={styles.btnSeeDta}
          onPress={() => navigation.navigate('DataScreen', {Data: Data})}
        />
        <Input
          fieldLable={'Name'}
          placeholder={'Enter Name'}
          onChangeText={(n) => setName(n)}
          value={name}
        />
        <Input
          fieldLable={'Father Name'}
          placeholder={'Enter Father Name'}
          onChangeText={(n) => setFatherName(n)}
          value={fatherName}
        />
        <Input
          fieldLable={'Id Card'}
          placeholder={'Enter id Card No'}
          onChangeText={(n) => setIdCard(n)}
          keyboardType={'number-pad'}
          value={idCard}
        />
        <Input
          fieldLable={'Profession'}
          placeholder={'Enter Your Profession'}
          onChangeText={(n) => setProfession(n)}
          value={profession}
        />
        <Input
          fieldLable={'City'}
          placeholder={'Enter City Name'}
          onChangeText={(n) => setCity(n)}
          value={city}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title={'Add'} containerStyle={styles.btnStyle} onPress={Add} />
        <Button
          title={'Update'}
          containerStyle={styles.btnStyle}
          onPress={Update}
        />
        <Button title={'Clear'} containerStyle={styles.btnStyle} />
        {/* <Button title={'Edit'} containerStyle={styles.btnStyle} /> */}
      </View>
    </>
  );
};

export default crudOperation;
