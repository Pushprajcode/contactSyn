import {
  FlatList,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {IMAGES} from '../utiles/localimages';
// import {COLORS} from '../utiles/colors';
export default function MyContact() {
  const [contact, setMyContact] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();
  useEffect(() => {
    getAllContacts();
  }, [isFocused]);
  async function getAllContacts() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (permission === 'granted') {
        const contacts: any = await Contacts.getAll();
        setMyContact(contacts);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onrender = ({item}: any) => {
    console.log('------>', item);
    return (
      <View style={styles.itemView}>
        <Text style={styles.nameStyle}>{item.displayName}</Text>
        <Text style={styles.numberStyle}>{item.phoneNumbers[0]?.number}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList data={contact} renderItem={onrender} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateContact');
        }}>
        <View style={styles.imageplus}>
          <Image style={styles.plusImage} source={IMAGES.PLUS_IMAGE} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  plusImage: {
    height: 40,
    width: 40,
  },
  nameStyle: {
    color: 'black',
  },
  imageplus: {
    alignItems: 'flex-end',
    bottom: 20,
  },
  itemView: {borderColor: 'grey', borderBottomWidth: 1, padding: 5},
  numberStyle: {color: 'black'},
});
