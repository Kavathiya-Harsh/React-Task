### GeeksforGeeks :- https://www.geeksforgeeks.org/reactjs/reactjs-introduction
### React Notes Repo :- https://github.com/Kavathiya-Harsh/React-notes.git 
### Theory :- https://github.com/Kavathiya-Harsh/CGxSU_Semester_1/tree/main/react(sem_02)
### W3School :- https://www.w3schools.com/React/react_es6.asp
---

# React Event Handling & Dynamic Rendering: A Complete Study Guide

> Welcome, student! This guide brings together everything you need to know about handling user interactions, managing forms, understanding React's DOM updates, and rendering dynamic lists in React.

---

## Table of Contents

1. [Introduction to Events in React](#1-introduction-to-events-in-react)
2. [Common React Events (with Examples)](#2-common-react-events-with-examples)
   - [onClick](#21-the-onclick-event)
   - [onChange](#22-the-onchange-event)
   - [onSubmit](#23-the-onsubmit-event)
   - [onMouseEnter / onMouseLeave](#24-the-onmouseenter-and-onmouseleave-events)
   - [onFocus / onBlur](#25-the-onfocus-and-onblur-events)
   - [onKeyDown / onKeyUp / onKeyPress](#26-the-onkeydown-onkeyup-and-onkeypress-events)
   - [onChange for Checkboxes & Radio Buttons](#27-the-onchange-for-checkboxes-and-radio-buttons)
   - [onResize (Window)](#28-the-onresize-event-window)
   - [onWheel](#29-the-onwheel-event)
   - [onMouseMove](#210-the-onmousemove-event)
3. [React Event Handling, Binding, and Synthetic Events](#3-react-event-handling-binding-and-synthetic-events)
   - [What Are React Events?](#31-what-are-react-events)
   - [Handling User Events](#32-handling-user-events)
   - [Binding Event Handlers](#33-binding-event-handlers-functional-vs-class-components)
   - [Synthetic Events & Event Pooling](#34-synthetic-events--event-pooling)
   - [Using the Event Object](#35-using-the-event-object-preventdefault-stoppropagation)
4. [Understanding DOM Manipulation in React](#4-understanding-dom-manipulation-in-react)
   - [Virtual DOM vs Real DOM](#41-virtual-dom-vs-real-dom)
   - [How React Manipulates the DOM with Events](#42-how-react-manipulates-the-dom-with-events)
   - [Efficient Updates](#43-example-with-multiple-events)
5. [Handling Forms and Controlled Components](#5-handling-forms-and-controlled-components)
   - [What Are Controlled Components?](#51-what-are-controlled-components)
   - [Basic Controlled Input](#52-basic-example-of-controlled-component)
   - [Handling Multiple Inputs](#53-handling-multiple-inputs)
   - [Checkboxes & Radio Buttons](#54-checkboxes-and-radio-buttons)
   - [Form Validation](#55-form-validation)
6. [Using map() to Render Components Dynamically](#6-using-map-to-render-components-dynamically)
   - [What is map()?](#61-what-is-map)
   - [Rendering Lists and Arrays of Objects](#62-rendering-a-simple-list)
   - [Reusing Components with map()](#64-reusing-components-with-map)
   - [Dynamic Styling](#65-dynamic-styling-based-on-data)
   - [Nested Data & Nested map()](#66-working-with-nested-data)
   - [Common Errors to Avoid](#67-common-errors-to-avoid)
7. [Conclusion](#7-conclusion)

---

## 1. Introduction to Events in React

Events in React allow you to handle user interactions such as clicks, typing, form submissions, and more. React's event system is similar to native DOM events but comes with a few differences:

- Event handlers are written in **camelCase** (`onClick` instead of `onclick`)
- Handlers are passed as **functions**, not strings
- React uses a **Synthetic Event** wrapper to ensure consistent behaviour across all browsers

Understanding events is crucial for building interactive web applications.

---

## 2. Common React Events (with Examples)

### 2.1 The `onClick` Event

Triggered when a user clicks an element (button, div, etc.).

```jsx
import React, { useState } from 'react';

const ClickButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default ClickButton;
```

---

### 2.2 The `onChange` Event

Used with input elements to capture changes in the user's input.

```jsx
import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Entered text: {text}</p>
    </div>
  );
};

export default TextInput;
```

---

### 2.3 The `onSubmit` Event

Used with forms to capture form submission, often for validation or API calls.

```jsx
import React, { useState } from 'react';

const FormSubmit = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents page reload
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmit;
```

---

### 2.4 The `onMouseEnter` and `onMouseLeave` Events

Detect when the mouse enters or leaves an element – perfect for hover effects.

```jsx
import React, { useState } from 'react';

const HoverComponent = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '20px', backgroundColor: hovered ? 'lightblue' : 'lightgray' }}
      >
        Hover over me!
      </div>
      <p>{hovered ? 'Mouse is over the box' : 'Mouse is not over the box'}</p>
    </div>
  );
};

export default HoverComponent;
```

---

### 2.5 The `onFocus` and `onBlur` Events

Detect when an element gains or loses focus (commonly used with form fields).

```jsx
import React, { useState } from 'react';

const FocusBlurComponent = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div>
      <input 
        type="text" 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        placeholder="Click or tab into me"
      />
      <p>{focused ? 'Input is focused' : 'Input is not focused'}</p>
    </div>
  );
};

export default FocusBlurComponent;
```

---

### 2.6 The `onKeyDown`, `onKeyUp`, and `onKeyPress` Events

Triggered by keyboard actions. `onKeyDown` fires when a key is pressed, `onKeyUp` when released.

```jsx
import React, { useState } from 'react';

const KeyPressComponent = () => {
  const [key, setKey] = useState('');

  const handleKeyDown = (event) => {
    setKey(`Key down: ${event.key}`);
  };

  const handleKeyUp = (event) => {
    setKey(`Key up: ${event.key}`);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
      <p>{key}</p>
    </div>
  );
};

export default KeyPressComponent;
```

> **Note:** `onKeyPress` is deprecated; use `onKeyDown` or `onKeyUp` instead.

---

### 2.7 The `onChange` for Checkboxes and Radio Buttons

`onChange` works with checkboxes and radio buttons, capturing their boolean or selected state.

```jsx
import React, { useState } from 'react';

const CheckboxRadioComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        I agree to the terms and conditions
      </label>
      <p>{isChecked ? 'Checked' : 'Not Checked'}</p>
    </div>
  );
};

export default CheckboxRadioComponent;
```

---

### 2.8 The `onResize` Event (Window)

Triggered when the browser window is resized. Useful for responsive designs.

```jsx
import React, { useState, useEffect } from 'react';

const WindowResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Window width is {windowWidth}px</p>;
};

export default WindowResizeComponent;
```

---

### 2.9 The `onWheel` Event

Triggered when the user scrolls with the mouse wheel.

```jsx
import React, { useState } from 'react';

const ScrollComponent = () => {
  const [scroll, setScroll] = useState(0);

  const handleWheel = (event) => {
    setScroll(scroll + event.deltaY);
  };

  return (
    <div onWheel={handleWheel} style={{ height: '200px', overflow: 'auto' }}>
      <p>Scroll position: {scroll}</p>
      <div style={{ height: '1000px' }}>Content goes here</div>
    </div>
  );
};

export default ScrollComponent;
```

---

### 2.10 The `onMouseMove` Event

Fires whenever the mouse moves inside an element – great for interactive designs.

```jsx
import React, { useState } from 'react';

const MouseMoveComponent = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '300px', border: '1px solid black' }}>
      <p>Mouse position: X: {coordinates.x}, Y: {coordinates.y}</p>
    </div>
  );
};

export default MouseMoveComponent;
```

---

## 3. React Event Handling, Binding, and Synthetic Events

### 3.1 What Are React Events?

React events are functions triggered by user interactions. React uses camelCase for event attributes and relies on a **Synthetic Event** system – a cross-browser wrapper around native DOM events. This ensures consistent behaviour and performance optimisations.

---

### 3.2 Handling User Events

Attaching an event handler in React is straightforward: define a function and pass it to the event attribute.

```jsx
const ClickHandlerExample = () => {
  const [message, setMessage] = useState('Hello!');

  const handleClick = () => setMessage('You clicked the button!');

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
};
```

---

### 3.3 Binding Event Handlers (Functional vs Class Components)

In **functional components**, hooks preserve the correct `this` context automatically – no explicit binding needed.

```jsx
const Greeting = () => {
  const sayHello = () => alert('Hello, User!');
  return <button onClick={sayHello}>Say Hello</button>;
};
```

In **class components**, you must bind methods to the component instance.

**Option 1: Using `.bind()` in the constructor**

```jsx
import React, { Component } from 'react';

class BindingExample extends Component {
  constructor() {
    super();
    this.state = { message: 'Welcome!' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ message: 'Button Clicked!' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
```

**Option 2: Using arrow functions (class properties)**

```jsx
class ArrowFunctionExample extends Component {
  state = { message: 'Hello!' };

  handleClick = () => {
    this.setState({ message: 'You clicked me!' });
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

> **Best practice:** Prefer functional components with hooks – they eliminate binding issues and are simpler to read.

---

### 3.4 Synthetic Events & Event Pooling

React's Synthetic Events are wrappers around native browser events. Key features:

- **Cross-browser compatibility** – events behave identically in all browsers
- **Event delegation** – React attaches a single listener to the root, improving performance
- **Event pooling** – React reuses event objects to reduce memory overhead; after the handler finishes, the event's properties are nullified

To access an event asynchronously (e.g., inside `setTimeout`), call `event.persist()`:

```jsx
const EventPoolingExample = () => {
  const handleClick = (event) => {
    event.persist(); // prevents pooling
    setTimeout(() => console.log(event.type), 1000);
  };

  return <button onClick={handleClick}>Test Event Pooling</button>;
};
```

---

### 3.5 Using the Event Object (`preventDefault`, `stopPropagation`)

React passes an event object to every handler. You can access properties like `event.target` and methods like `preventDefault()` and `stopPropagation()`.

```jsx
const EventDetails = () => {
  const handleClick = (event) => {
    console.log('Button Clicked');
    console.log('Event Target:', event.target);
  };
  return <button onClick={handleClick}>Log Event Details</button>;
};
```

**Prevent default behaviour** (e.g., form submission):

```jsx
const PreventDefaultExample = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submission prevented!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};
```

**Stop event propagation** to prevent bubbling:

```jsx
const StopPropagationExample = () => {
  const handleInnerClick = (e) => {
    e.stopPropagation();
    console.log('Inner clicked – parent will not fire');
  };

  const handleOuterClick = () => {
    console.log('Outer clicked');
  };

  return (
    <div onClick={handleOuterClick}>
      <button onClick={handleInnerClick}>Click me</button>
    </div>
  );
};
```

---

## 4. Understanding DOM Manipulation in React

### 4.1 Virtual DOM vs Real DOM

| | Real DOM | Virtual DOM |
|---|---|---|
| **What it is** | The actual browser DOM | A lightweight in-memory copy |
| **Speed** | Slow – every change can cause reflows/repaints | Fast – updates are batched and minimal |
| **Usage** | Manipulated directly by the browser | Managed internally by React |

---

### 4.2 How React Manipulates the DOM with Events

When an event triggers a state change:

1. The event handler updates the component's state (e.g., `setCount`)
2. React re-renders the component, creating a new Virtual DOM tree
3. React **diffs** (compares) the new Virtual DOM with the previous one
4. React calculates the minimal set of changes and applies them to the real DOM

```jsx
import React, { useState } from 'react';

const ClickButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};
```

> Click → `setCount` → state change → Virtual DOM re-render → diff → real DOM updates only the `<p>` tag.

---

### 4.3 Example with Multiple Events

Both `onClick` and mouse events update different pieces of state. React batches the updates and efficiently applies DOM changes.

```jsx
import React, { useState } from 'react';

const EventDOMManipulation = () => {
  const [message, setMessage] = useState('');
  const [bgColor, setBgColor] = useState('white');
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    setMessage('Button clicked!');
  };

  const handleMouseEnter = () => setBgColor('lightblue');
  const handleMouseLeave = () => setBgColor('white');

  return (
    <div 
      style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
      <p>You have clicked {clicks} times</p>
    </div>
  );
};
```

---

### 4.4 Dynamic DOM Updates with State

Because React ties the UI to state, you never directly manipulate the DOM. Just change the state, and React updates the DOM where needed.

```jsx
import React, { useState } from 'react';

const DynamicDOMManipulation = () => {
  const [color, setColor] = useState('red');
  const [text, setText] = useState('Hello, World!');

  const changeColor = () => setColor(color === 'red' ? 'green' : 'red');
  const changeText = () => setText(text === 'Hello, World!' ? 'Goodbye, World!' : 'Hello, World!');

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeText}>Change Text</button>
      <div style={{ color: color }}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};
```

---

### 4.5 Why React's DOM Handling is Efficient

- **Batch updates** – React groups multiple state updates into one DOM update
- **Virtual DOM diffing** – only the changed elements are touched
- **Minimal reflows/repaints** – reduces performance bottlenecks

---

## 5. Handling Forms and Controlled Components

### 5.1 What Are Controlled Components?

A **controlled component** is an input element whose value is controlled by React's state. The form data is stored in state, and every keystroke or change updates that state. This gives you full control over the input's behaviour, validation, and formatting.

---

### 5.2 Basic Example of Controlled Component

```jsx
import React, { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};
```

---

### 5.3 Handling Multiple Inputs

Use a single state object and dynamically update it using the input's `name` attribute.

```jsx
import React, { useState } from 'react';

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
```

---

### 5.4 Checkboxes and Radio Buttons

For checkboxes, use `checked` instead of `value`. For radio buttons, compare the state value.

```jsx
import React, { useState } from 'react';

const CheckboxRadioForm = () => {
  const [formData, setFormData] = useState({
    acceptTerms: false,
    preferredLanguage: '',
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Accept Terms:
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        Preferred Language:
        <input
          type="radio"
          name="preferredLanguage"
          value="English"
          checked={formData.preferredLanguage === 'English'}
          onChange={handleRadioChange}
        /> English
        <input
          type="radio"
          name="preferredLanguage"
          value="Spanish"
          checked={formData.preferredLanguage === 'Spanish'}
          onChange={handleRadioChange}
        /> Spanish
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
```

---

### 5.5 Form Validation

Validate before submission and display error messages conditionally.

```jsx
import React, { useState } from 'react';

const ValidatedForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Name is required!');
    } else {
      setError('');
      console.log('Form submitted:', name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

---

## 6. Using `map()` to Render Components Dynamically

### 6.1 What is `map()`?

`map()` is a JavaScript array method that creates a new array by applying a callback function to each element of the original array.

```javascript
array.map(callback(currentValue, index, array))
```

---

### 6.2 Rendering a Simple List

```jsx
const fruits = ["Apple", "Banana", "Cherry", "Date"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

> **Important:** Always provide a unique `key` prop to help React identify which items changed, were added, or removed.

---

### 6.3 Rendering an Array of Objects

```jsx
const users = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Smith", age: 32 },
  { id: 3, name: "Sam Johnson", age: 25 },
];

function UserList() {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}
```

---

### 6.4 Reusing Components with `map()`

Break the UI into smaller components and render them inside `map()`.

```jsx
const products = [
  { id: 101, name: "Laptop", price: "$999" },
  { id: 102, name: "Smartphone", price: "$499" },
  { id: 103, name: "Headphones", price: "$199" },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
}

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

---

### 6.5 Dynamic Styling Based on Data

Apply different styles depending on the data.

```jsx
function ProductCard({ product }) {
  const highPrice = parseInt(product.price.replace("$", "")) > 500;

  return (
    <div className={`product-card ${highPrice ? "high-price" : ""}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
}
```

```css
.high-price {
  background-color: #ffe0e0;
}
```

---

### 6.6 Working with Nested Data

Use nested `map()` calls to render data with categories and items.

```jsx
const categories = [
  { category: "Electronics", items: ["Laptop", "Smartphone", "Tablet"] },
  { category: "Accessories", items: ["Headphones", "Charger", "Case"] },
];

function CategoryList() {
  return (
    <div>
      {categories.map((cat, index) => (
        <div key={index}>
          <h2>{cat.category}</h2>
          <ul>
            {cat.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

---

### 6.7 Common Errors to Avoid

| Error | Solution |
|---|---|
| Missing `key` prop | Always add a unique, stable `key` (prefer an `id` over an index when possible) |
| Mutating state directly | Use immutable methods like `filter`, `concat`, or the spread operator |
| Excessive nesting | Deeply nested `map()` calls can become hard to read; consider extracting components |

---

## 7. Conclusion

Congratulations! You've now covered:

- ✅ All major React events (`onClick`, `onChange`, `onSubmit`, mouse events, keyboard events, resize, wheel, etc.)
- ✅ Event binding in functional and class components
- ✅ Synthetic events and event pooling
- ✅ How React manipulates the real DOM efficiently using the Virtual DOM
- ✅ Building controlled forms with multiple inputs, checkboxes, radios, and validation
- ✅ Using `map()` to render dynamic lists and reusable components

With these tools, you can build highly interactive, performant, and maintainable React applications. Keep practising by building small projects – a to-do list, a form with validation, or a product catalogue – to solidify your understanding.

---

**Happy coding! 🚀**
