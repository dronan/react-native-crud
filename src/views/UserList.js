import React, {useContext} from 'react';
import {FlatList, View, Alert} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({type: 'deleteUser', payload: user});
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
          onPress={() => props.navigation.navigate('UserForm', user)}
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
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
