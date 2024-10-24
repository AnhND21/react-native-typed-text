## How to use this library 

```
import React from 'react';
import {View} from 'react-native';
import TypedText from 'react-native-typed-text';

const HomePage = () => {
  return (
    <View>
      <TypedText
        text="React Native Typed Text"
        speed={200}
        pauseDuration={100}
        textStyle={{
          fontSize: 20,
          color: 'white',
        }}
        viewStyle={{
          padding: 8,
        }}
      />
    </View>
  );
};

export default HomePage;


```
