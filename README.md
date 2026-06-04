### GeeksforGeeks :- https://www.geeksforgeeks.org/reactjs/reactjs-introduction
### React Notes Repo :- https://github.com/Kavathiya-Harsh/React-notes.git 
### Theory :- https://github.com/Kavathiya-Harsh/CGxSU_Semester_1/tree/main/react(sem_02)
### W3School :- https://www.w3schools.com/React/react_es6.asp
---

# ⚛️ React Study Guide

A comprehensive, structured reference for learning and revising React.js — covering core concepts, hooks, patterns, routing, state management, and ecosystem tools.

---

## 📋 Table of Contents

- [About](#about)
- [Topics Covered](#topics-covered)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)

---

## About

This repository is a complete React.js study guide designed for developers at all levels — whether you're learning React for the first time, preparing for a technical interview, or need a quick reference while building projects.

The guide is organized into **28 topics**, progressing logically from foundational concepts to advanced patterns and ecosystem tools. Each topic is concise, focused, and includes code examples where relevant.

**Who is this for?**
- Beginners getting started with React
- Intermediate developers looking to solidify their knowledge
- Anyone preparing for React-based technical interviews

---

## Topics Covered

### 🟢 Foundational
| # | Topic | Key Concepts |
|---|-------|-------------|
| 1 | What is React? | Virtual DOM, declarative UI, component-based architecture |
| 2 | JSX | Syntax, transpilation, fragments, camelCase attributes |
| 3 | Components | Functional vs Class, render, JSX return |
| 4 | Props | Read-only data flow, PropTypes, default props |
| 5 | State | `useState`, async updates, functional updater pattern |
| 6 | Event Handling | Synthetic events, camelCase handlers, `preventDefault` |
| 7 | Conditional Rendering | Ternary operator, logical `&&`, JSX variables |
| 8 | Lists & Keys | `.map()`, stable keys, index-as-key caveats |
| 9 | Forms | Controlled vs uncontrolled components, `onChange` |
| 10 | Lifting State Up | Shared state, single source of truth |

### 🔵 Intermediate
| # | Topic | Key Concepts |
|---|-------|-------------|
| 11 | Composition vs Inheritance | `props.children`, specialized components |
| 12 | Lifecycle (Class) | Mount, update, unmount phases |
| 13 | Hooks | `useEffect`, `useContext`, `useReducer`, `useRef`, `useMemo`, `useCallback`, Custom Hooks |
| 14 | Context API | Prop drilling solution, Provider/Consumer pattern |
| 15 | Error Boundaries | `componentDidCatch`, fallback UI |
| 16 | Fragments | `<></>`, keyed fragments |
| 17 | Portals | `ReactDOM.createPortal`, modals & tooltips |
| 18 | Higher-Order Components | HOC pattern, logic reuse |
| 19 | Render Props | Function-as-prop pattern |
| 20 | Performance Optimization | `React.memo`, `React.lazy`, `Suspense` |

### 🟣 Advanced & Ecosystem
| # | Topic | Key Concepts |
|---|-------|-------------|
| 21 | React Router v6 | `<Routes>`, `useNavigate`, `useParams`, nested routes |
| 22 | State Management | Redux Toolkit, Zustand, React Query |
| 23 | Testing | Jest, React Testing Library, `fireEvent` |
| 24 | Styling | CSS Modules, styled-components, Tailwind CSS |
| 25 | Best Practices | Single responsibility, state hygiene, naming |
| 26 | React + TypeScript | `React.FC`, event types, props interfaces |
| 27 | Tooling | Create React App, Vite |
| 28 | Next.js | SSR, SSG, ISR, file-based routing |

---

## Installation & Setup

This is a Markdown-based reference guide — no dependencies or build steps required.

**Clone the repository:**

```bash
git clone https://github.com/your-username/react-study-guide.git
cd react-study-guide
```

**Optional — preview locally with a Markdown viewer:**

```bash
# Using VS Code
code .
# Then install the "Markdown Preview Enhanced" extension for the best experience

# Or using Node.js (serve as static site)
npx serve .
```

**Or simply browse the guide directly on GitHub** — all `.md` files render automatically.

---

## Usage

### For Beginners
Start from **Topic 1** and work through to **Topic 13** sequentially. Focus on understanding components, props, state, and the core hooks before moving on.

### For Intermediate Developers
Jump to **Topics 13–20** covering Hooks in depth, Context API, performance optimization, and advanced component patterns.

### For Interview Preparation
Prioritize these topics:
- **Topics 3–10** — Core fundamentals (most commonly tested)
- **Topic 13** — Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`)
- **Topics 20–22** — Performance, routing, state management

### Quick Reference
Use the [Topics Covered](#topics-covered) table above to jump directly to any concept. Each topic includes its key sub-concepts so you know exactly what to focus on.

---

## Key Hooks at a Glance

```jsx
const [count, setCount] = useState(0);               // state

useEffect(() => {                                     // side effects
  fetchData();
  return () => cleanup();
}, [dependency]);

const theme = useContext(ThemeContext);               // context

const [state, dispatch] = useReducer(reducer, {});   // complex state

const inputRef = useRef(null);                        // DOM ref

const value = useMemo(() => compute(a, b), [a, b]);  // memoized value
const fn = useCallback(() => doSomething(), [a]);    // memoized function
```

---

<p align="center">Built for React learners everywhere &nbsp;⚛️</p>
