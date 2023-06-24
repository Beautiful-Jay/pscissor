import React, { useEffect } from 'react';
import { auth } from '../firebase';

const App: React.FC = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {/* Your app content */}
    </div>
  );
};

export default App;


 
