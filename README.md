# React-Native Course

## Lesson summary
1. [**`useEffect`**](https://reactjs.org/docs/hooks-overview.html) - `React` hook triggered on every component reder

   1.1. Triggered on every render 
   ```useEffect(() => { // do something ... });```
   
   1.2. Triggered **ONLY** on initial render
   ```useEffect(() => { // do something ... }, []);```
   
   1.3. Triggered on state value change (observable)
   ```useEffect(() => { // do something ... }, [movies]);```  
2. Remote http calls to the server with **`axios`**

   2.1. `useEffect` with [**`async`**](https://github.com/axios/axios) call
   ```
   const myAsyncFunc = async () => { await ...};
   useState(() => { 
    myAsyncFunc();
   }, []);
   ```
3. **`useState`** - `React` hook 
4. [**`FlatList`**](www.google.com) - `react-native` component 
4. [**`Image`**](https://reactnative.dev/docs/image) - `react-native` component for displaying an image
5. [**`Pressable`**](https://reactnative.dev/docs/pressable) - `react-native` component for get a callback on press any component
6. [**`react-navigation`**](https://reactnavigation.org/docs/hello-react-navigation/) - create routes and navigate between screens

   6.1. [**`Stack Navigator`**](https://reactnavigation.org/docs/stack-navigator/) - 
   
   6.2. [**Passing parameters to routes**](https://reactnavigation.org/docs/params)
  
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
