#App-v1.0 version
In this version we've explored the concept to implementing custom context provider and useContext hook.
--Technicaly : a custom context provider consist to create a functional component that will encapsulate all the state, state setters and all the methods.. That a context provider is meant to provide to differrent component everywhere in the tree.
--pro : this allow data encapsulation and separation of concerns which is a could be aa crucial element in a complex app creation. It allow by then to improve the quality of the code by writting a cleaner and more easer code structor to maintain.
--cunstom useContext Hook: technically talking it means providing a simpler method to retrieve state variable from a particular provider's context. this happens by wrapping the useContext hook inside of another method that get called each time to provide state variables to allow by then preventing rewriting over the same code.

#App version
In this version of the project made initially by Jonas Schmidtmann through his react course The Ultimate React Course, we've tried to improve the Atomic Blog App by preventing Props Drilling.

--Initially The App has too many problems that were affecting not only in generally its performance but also its code quality. One of the main prblems was PROPS DRILLING; generally appears in many parrents components that had props passed it only for the purpose of lifting these props to the next children and so on..
--Cons : - Unnecessary re-rendring of the parrent component as its recieves unused props for its direct use and also for its children as will be affected by the parent re-render. Leading in some Cases to the re-render of the whole component tree which will be simply memory waste.
         - Low Code Quality caused by unclean code that will be hard to maintains and shared between a team
--SOLUTION! : Implementing a Context Provider. its an aproach that allow to pass some variable value directly to  components that needs those information, everywhere in the tree without involving the parent component.
