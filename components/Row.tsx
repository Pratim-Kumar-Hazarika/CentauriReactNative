/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Row = (props:any) => {
  function rightSwipe () {
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Text>
              🗑
            </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.item}>
        <Text>{props.data} </Text>
      </View>
    </Swipeable>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
  },
  deleteBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 20,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
