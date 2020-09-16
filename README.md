# React-Native Course

## Lesson summary
1. [**`useEffect`**](https://reactjs.org/docs/hooks-overview.html) - `React` hook triggered on every component reder

   1.1. `useEffect` do something on every render
   ```useEffect(() => { ... });```
   
   1.2. `useEffect` do something **ONLY** on initial render
   ```useEffect(() => { ... }, []);```
   
   1.3. `useEffect` do something on value change (observable)
   ```useEffect(() => { ... }, [movies]);```  
2. Remote http calls to the server with **`axios`**

   2.1. `useEffect` with **`async`** call
   ```
   const myAsyncFunc = async () => { await ...};
   useState(() => { 
    myAsyncFunc();
   }, []);
   ```
3. **`useState`** - `React` hook 
4. [**`FlatList`**](www.google.com) - `react-native` component 
4. **`Image`** - `react-native` component 
5. **`Pressable`** - `react-native` component
6. **`react-navigation`** - create routes and navigate between screens
  6.1. 
