import './App.css';
import Todo from './components/Todo';
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from 'react';
import { database } from './firebase-config';
import { addDoc, collection } from '@firebase/firestore';
function App() {
  const databaseRef = collection(database, 'todo-list');
  // console.log(databaseRef)
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    alanBtn({
      key: '21f84f5d7b68fbe1f0fb994a32cddf872e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        console.log(commandData.data)
        addDoc(databaseRef, { item: commandData.data })
          .then(() => {
            setUpdate(true);
          }).catch((error) =>{
            console.log(error)
          })
      }
    });
  }, [databaseRef]);
  return (
    <div>
      <Todo databaseRef={databaseRef} update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default App;