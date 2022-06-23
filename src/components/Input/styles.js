import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  mainContainer: {},

  inputContainer: {
    height: height(8),
    width: width(70),
    borderWidth: height(0.1),
    borderColor: AppColors.black,
    borderRadius: height(8),
    marginVertical: height(1),
    //backgroundColor: AppColors.gray,
  },

  input: {
    width: width(50),
    marginBottom: height(3),
    paddingLeft: width(10),
  },
  label: {
    fontSize: width(4),
    paddingLeft: width(7),
  },
});
export default styles;
