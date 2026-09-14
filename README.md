  #- Name of the project: DevStack

  #- A little description:
    A modern and responsive technology stack builder that allows users to explore different technologies, view their details, and build a personalized development stack. Users can easily add technologies to their stack, track selected technologies, and remove them whenever needed.


  #- Technology that you use:
    - React.js
    - Tailwind CSS, DaisyUI
    - TypeScript 
    - React-Toastify (NPM Package)
    - JSON (for technology data)
    - Vite (build tool)
    - Netlify for deploying
    - Github
    - Figma
    - Some times chatgpt

  #- 3 features about your project
    1. Technology Explorer — Browse technologies by category with details such as rating, difficulty, description, and icon.
    2. Personal Stack Builder — Add technologies to your stack and see the total number of selected technologies in real time.
    3. Stack Management — Remove individual technologies or clear the entire stack, with interactive feedback notifications.




####Questions & Answers####

    1. What is JSX, and why is it used in React?
    Ans: JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. It makes React UI code easier to read and write.

    2. What is the difference between props and state?
    Ans: Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

    3. What does the useState hook do, and where did you use it in this project?
    Ans: useState allows a React component to store and update data. In this project, I used it in TechnologiesSection.tsx to store the selected technologies in the stack.

    4. What does the useEffect hook do, and why did you need it to load the JSON data?
    Ans: useEffect runs code after a component renders and is commonly used for side effects like fetching data. In this project, I did not need useEffect because the JSON data was loaded using fetch() with React's use() and Suspense.

    5. Why does every item in a .map() list need a unique key prop?
    Ans: A unique key helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

    6. What is conditional rendering? Show one place you used it.
    Ans: Conditional rendering means showing different UI based on a condition.
    I used it in Stack.tsx to show the empty stack message:

    {stack.length === 0 ? (
    <p>Your stack is empty</p>
    ) : (
    // show selected technologies
    )}

    7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    Ans: A parent passes data to a child using props.
    For example:
    <TechnologiesCard
    technologies={technologies}
    stack={stack}
    />

    A child can send something back to the parent by calling a function passed through props.
    For example:
    onClick={() => onAdd(technology)}
    Here, onAdd is a function received from the parent component.