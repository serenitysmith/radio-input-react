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

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // added a name property to our inputs so whne clicked, it acessess the right state and prevents users froom clicking multiple inputs, also added a value id which is wht will be logged to state whenn clicked. also added a handle chang efunction tha willl work the same as the handle changes above and we cheecked it with a console log statement above
  return (
    <form>
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
        <legend>Current employment status</legend>

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
{/* we have to add a booleen value to make state understannd which radio input was clicked. added it with the checked === statement  */}
        <input type="radio" id="full-time" name="employment"
        value="full-time"
        onChange={handleChange}
        checked={formData.employment === "full-time" } />
        
        
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
    </form>
  );
}
