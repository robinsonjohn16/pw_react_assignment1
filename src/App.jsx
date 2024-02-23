import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";

function App() {
   return (
      <>
         <Person name="Robinson" age="20" />
         <Button
            text="This is a Button Component"
            onClick="This is a Text to display"
         />
         <Header title="This is a props title" />
         <List items="This is List Props" />
      </>
   );
}

export default App;
