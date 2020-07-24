import React from 'react';
import {Text,View,ImagePropTypes} from 'react-native';

const header = (props) => {
  return (
     <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
     </View>
   );
};

const styles= {
  textStyle: {
    fontSize:20,

  },
  viewStyle: {
    backgroundColor:'F8F8F8',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 9},
    shadowOpacity: 0.9
  }
};

export default header;
