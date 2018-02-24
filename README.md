# React Native Course - Lesson #2
## React-Native + Networking + Redux
### Avatars List app
1. Clone (checkout branch lesson_2)
2. ```npm i```
2. ```react-native run-ios``` / ```react-native run-android```

## Quiz Answers

1. What is difference between using __Redux__ in __React-Native__ app vs __React.js__ ?
   > No difference.

2. How can I __render long list__ of 1000+ items in React-Native __consider mobile performance__ ?
   > Use [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) component, based on ```VirtualizedList```, lazy rendering items to View Port while scrolling.
   
3. What is difference between "__justifyContent__" and "__alignItems__" ?
   > "__justifyContent__" uses to spacing the __Main axis__, where "__alignItems__" uses to spacing the __Cross axis__.
   
   > What does it mean? - when you set __flexDirection: 'row'__ then your main axis is __horizontal__ and the cross axis is __vertical__. which means __justifyContent__ will space the __horizontal__ axis and __alignItems__ will space the __vertical__ axis.
   When you set __flexDirection: 'column'__, then __justifyContent__ will space the __vertical__ axis and __alignItems__ will space the __horizontal__ axis. [read more...](https://medium.com/the-react-native-log/a-mini-course-on-react-native-flexbox-2832a1ccc6)
