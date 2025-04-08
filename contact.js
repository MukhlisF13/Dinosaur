import React, { useState } from `react`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry' ,
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTEXTAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData
    [name]: value
  });
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div>
    <h1 className="page-title">Contact Us</h1>

  {formSubmitted ? (
    <div className="contact-form" style={{ textAlign:  'center'  }}>
  <h2>Thank You!</h2>
<p> We've recieved your message and will get back to you soon.</p>
  className="submit-button"
onClick={() => {
  SetFormSubmitted(false);
  setFormData({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
}}
>
  Send Another Message </button>
<div>
  ) : (
    <div className="contact-form">
    <form onSubmit={handleSubmit}>
  <div className ="form-group'>
  <label htmlFor="name">Name:</label
<input
type="text"
id="name"
name="name"
value={formData.name}
onChange=handleChange}
required
/>
  </div>

<div className="form0group">
  <label htmlFor="email">Email:</label>
<input
type=:"email"
id="email"
name="email"
vakue={formData.email}
onChange={handleChange}
required
/>
  </div>

<div className="form-group>
  <label htmlFor="subject">Subject:</label>
<select
id="subject"
name="subject"
value={formData.subject}
onChange={handleChange}
>
  <option value="General Inquiry">General Inquiry</option>
<option value="Dinosaur Question">Dinosaur Question</option>
<option value="Website Feedback">Website Feedback</option>
<option value="Merchandise Question">Merchandise Question</option>
  </select>
  </div>

<div className="form-group>
  <label htmlFor="message">Message:</label>
<textarea
id="message"
name="message"
rows={5}
value={formData.message}
onChange={handleChjange}
required
></textarea>
  </div>
<button type="submit" className="submit-button">Send Message</button>

  </form>
  </div>
)}
<div style={{ marginTop: '30px', textAlign: 'center' }}>
<h2>Visit Our Museum</h2>
<p>123 Dinosaur Avenue<br  />Prehistoric Park, PA 12345</p>
<p>phone: (555) 123-4567<br  />Email: info@dinoworld.whatever</p>
  </div>
  </div>
);
};

export default contact;
