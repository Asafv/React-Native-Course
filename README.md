# React Native Course - Lesson #1
### To Do List app
1. Clone
2. ```npm i```
3. Donwload & install [Expo XDE](https://docs.expo.io/versions/latest/introduction/installation.html)
4. Open the app via Expo ("Project" > "Open Project")
5. Open with device - "Device" > "Open with IOS/Android"

* This time we used Expo as development tool, next time we will start using React-Native directly. Please follow installation doc inside mail.
## Quiz Answers

1. How to add __style__ to a React-Native component as __< Text />__ ?
   > inline:
   ```javascript
   <Text style={{ color: 'blue' }} />
   ```
   > object:
   ```javascript
   <Text style={Styles.text} />
  
   const Styles = {
     text: {
       color: 'blue',
     },
   };
   ```

2. Can we give style “__fontSize__” to __< View />__ Component ?
   > No, because View canno't display a text, so it has no meaning, only Text can.
   
3. What is the use of “__flex: 1__” in React-Native ?
   > Expand to 100%. 
   If siblings have also "flex" with value, then the area divided by the summerized amount.
   ```javascript
   import React, { Component } from 'react';
   import { View } from 'react-native';

   export default class FlexDimensionsBasics extends Component {
     render() {
       return (
         // Try removing the 'flex: 1' on the parent View.
         // The parent will not have dimensions, so the children can't expand.
         // What if you add 'height: 300' instead of `flex: 1`?
         <View style={{ flex: 1}}>
           <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
           <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
           <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
         </View>
       );
     }
   }
   ```
