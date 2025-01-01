import {useState,createContext}

const WorkoutContext = createContext();

export function WorkoutProvider({children}) {
  const [allowSound, setAllowSound] = useState(true);
}
