# React Native Course - Lesson #1
### To Do List app

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
   > Expand to 100%
