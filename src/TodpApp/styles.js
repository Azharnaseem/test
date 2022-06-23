import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: height(10),
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'red',
  },
  btnAdd: {
    width: width(30),
    marginTop: height(30),
  },
});
export default styles;
