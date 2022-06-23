import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    // height: height(70),
    paddingVertical: height(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  mainConatainer: {
    backgroundColor: AppColors.gray,
    width: width(80),
    paddingVertical: height(3),
    marginVertical: height(2),
    //alignSelf: 'center',
    // alignItems: 'center',
    borderRadius: height(2),
    borderWidth: height(0.3),
    elevation: 5,
    shadowOpacity: 3,
    shadowRadius: 4.65,
  },
  dataContainer: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: width(4),
    color: AppColors.white,
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(3),
  },
  editbtn: {
    width: width(20),
  },
  deletebtn: {
    width: width(20),
    backgroundColor: 'red',
  },
});
export default styles;
