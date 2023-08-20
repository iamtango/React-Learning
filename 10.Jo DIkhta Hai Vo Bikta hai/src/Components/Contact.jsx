import { useState } from "react";
import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="w-[1024px] mx-auto my-4">
      <div className="flex left-2">
      <img src={contact} alt="" />
      </div>
      <div className="text-xl font-semibold py-2">
      <h1>Contact us</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type your Message here..." required></textarea>
                    <button type="submit">Submit</button>
                    {message && <span>Thanks for contacting Highway Moon, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  );
};

export default Contact;