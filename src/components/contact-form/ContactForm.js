import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default reloading of the page
    alert("A name is submitted: " + name);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Name: {name}
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;