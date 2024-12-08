import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ExpenseTile from './ExpenseTile';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ExpenseList(props) {
  const {expenseList} = useSelector(store => store.slice);
  const [modalVisible, setModalVisible] = useState(false);

  const slicedData = expenseList.slice(0, 9);
  return (
    <View>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Recent spends</Text>
        {expenseList.length > 10 ? (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={styles.viewAllButton}>
            <Text> View All</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.recentView}>
        <ScrollView>
          {slicedData.map((ele, index) => {
            return <ExpenseTile key={index} ele={ele} index={index} />;
          })}
        </ScrollView>
      </View>
      <Modal visible={modalVisible}>
        <View style={styles.modalHeading}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.button}>
            <AntDesign color="white" size={35} name="arrowleft" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {expenseList.map((ele, index) => {
              return <ExpenseTile ele={ele} index={index} />;
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  recentView: {
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    alignItems: 'center',
    backgroundColor: '#10375C',
  },
  modalHeading: {
    width: '100%',
    backgroundColor: '#10375C',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 9,
  },
  modalHeadingText: {
    color: 'white',
  },
  headingView: {
    width: '100%',
    height: 60,
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
  },
  viewAllButton: {
    width: 60,
    height: 40,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
});
