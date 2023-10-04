import React from "react";

import "./App.css";

export default function Form() {

  //formData is a state object that holds the values of form inputs. It includes fields for first name, last name, email, comments, a checkbox for friendliness, and a radio button for employment status.
// setFormData is a function used to update the formData state.
// Log the value of formData.employment to the console:
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,

    // added employment to our state
    employment: "",
  });

  console.log(formData.employment)
  // handleChange is an event handler function that is called whenever an input field or checkbox is changed.
  // It extracts the name, value, type, and checked properties from the event target (the input element).
  // It uses the spread operator (...) to create a new state object by copying the previous state (prevFormData) and updating the specific field that matches the name.
  // For checkboxes, it updates the field with the checked value, and for other input types, it uses the value property.
  // Render the form with input fields and radio buttons:
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // added a name property to our inputs so when clicked, it acessess the right state and prevents users froom clicking multiple inputs, also added a value id which is wht will be logged to state whenn clicked. also added a handle chang efunction tha willl work the same as the handle changes above and we cheecked it with a console log statement above
  return (
    <form>
       {/* Input fields */}
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
       {/* Checkbox for friendliness */}
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />


      <fieldset>
        {/* Radio buttons for employment status */}
        <legend>Current employment status</legend>
{/* ... Repeat for other radio buttons ... */}
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
{/* we have to add a booleen value to make state understand which radio input was clicked. added it with the checked === statement  */}
        <input type="radio" id="full-time" name="employment"
        value="full-time"
        onChange={handleChange}
        checked={formData.employment === "full-time" } />
        
        
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>


      {/* This JSX code defines a form with input fields, a checkbox, and radio buttons.
Each input element is associated with the handleChange function to update the formData state when the value changes.
The value attribute of each input is set to the corresponding value in the formData state, ensuring that the form fields display the correct values.
Radio buttons for employment status also have a checked attribute set based on whether the formData.employment matches the radio button's value.
Overall, this code represents a form in a React component, and it maintains the form's state using React hooks. The handleChange function updates the form data in response to user input. */}
    </form>
  );
}
