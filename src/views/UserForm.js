import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import UsersContext from '../context/UsersContext';

export default props => {
  const [user, setUser] = useState(
    props.route.params ? props.route.params : {},
  );

  const {dispatch} = useContext(UsersContext);

  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o nome"
        value={user.name}
        style={style.input}
      />
      <Text>Email</Text>
      <TextInput
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o email"
        value={user.email}
        style={style.input}
      />
      <Text>Url do Avatar</Text>
      <TextInput
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe o email"
        value={user.avatarUrl}
        style={style.input}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
  },
});
