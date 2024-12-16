import React from 'react';
import {FlatList, View, Alert} from 'react-native';
import users from '../data/users';
import {ListItem, Avatar} from 'react-native-elements';

export default props => {
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.log('delete ' + user.id);
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}>
        <Avatar rounded source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => navigation.navigate('userForm', user)}
          iconProps={{name: 'edit'}}
          iconStyle={{fontSize: 25, color: 'orange'}}
        />
        <ListItem.Chevron
          onPress={() => confirmUserDeletion(user)}
          iconProps={{name: 'delete'}}
          iconStyle={{fontSize: 25, color: 'red'}}
        />
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
