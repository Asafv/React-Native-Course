# React-Native Course

## Lesson summary
1. [**`useEffect`**](https://reactjs.org/docs/hooks-overview.html) - `React` hook triggered on every component reder

   1.1. Triggered on every render 
   ```useEffect(() => { // do something ... });```
   
   1.2. Triggered **ONLY** on initial render
   ```useEffect(() => { // do something ... }, []);```
   
   1.3. Triggered on state value change (observable)
   ```useEffect(() => { // do something ... }, [movies]);```
   
2. Remote http calls to the server with [**`axios`**](https://github.com/axios/axios)

   2.1. `useEffect` with **`async`** call
   ```
   import axios from 'axios';
   const myAsyncFunc = async () => { 
      await axios.get('https://my.remote.server'};
   };
   useState(() => { 
    myAsyncFunc();
   }, []);
   ```
3. [**`useState`**](https://reactjs.org/docs/hooks-state.html) - `React` hook for storing component state, if you change this state value then a new reder triggered
   ```
   import React, { useState } from 'react';
   ...
   const [name, setName] = useState('');
   setName('mobile');
   ```
   
4. [**`FlatList`**](www.google.com) - `react-native` component 
4. [**`Image`**](https://reactnative.dev/docs/image) - `react-native` component for displaying an image
5. [**`Pressable`**](https://reactnative.dev/docs/pressable) - `react-native` component for get a callback on press any component
6. [**`react-navigation`**](https://reactnavigation.org/docs/hello-react-navigation/) - create routes and navigate between screens

   6.1. [**`Stack Navigator`**](https://reactnavigation.org/docs/stack-navigator/) - Provides a way for your app to transition between screens where each new screen is placed on top of a stack.
   
   6.2. [**Moving between screens**](https://reactnavigation.org/docs/navigating)
      ```
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      ```
   6.2. [**Passing parameters to routes**](https://reactnavigation.org/docs/params) - `navigation.navigate('Details', { item });`
  
## ToDo
1. In the `MovieDetails` screen we have the item data (movie) from the prev route (MovieList)
```
const MovieDetails = ({ route, navigation }) => {
  const { item } = route.params;
  console.log('item = ', item);
 ...
```
Display in the **MovieDetails** screen:
* The "backgroound" image
* The "avatar" image
* The movie title
