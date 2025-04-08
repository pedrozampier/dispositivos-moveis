import { View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

    const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <View>
        <TextInput placeholder="username" onChangeText={setPassword} />

        <TextInput placeholder="password" onChangeText={setUsername} secureTextEntry />

        <Button title="Login" onPress={handleLogin} />
    </View>
  );
}