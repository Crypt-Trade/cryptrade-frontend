import React, { useState } from 'react';
import axios from 'axios';
import tele from "../assets/images/telephone.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import inta from "../assets/images/instragram.png";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    message: ''
  });
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post(ROOT_URL+'/contact/contact-submitt', formData); // update URL if needed
      setStatus('Inquiry submitted successfully!');
      setFormData({ name: '', phoneNo: '', email: '', message: '' });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setStatus(error.response.data.message);
      } else {
        setStatus('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='container my-4'>
      <div className='text-center'>
        <img src={tele} width={80} alt="Telephone Icon" />
      </div>
      <h1 className='about mt-3 text-center'>- CONTACT US -</h1>
      <div className='row'>
        <div className='col-lg-6 mt-5'>
          <div className='card formcontact'>
            <form className='p-3' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNo" className="form-label">Phone number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              {status && <p className="mt-3 text-info">{status}</p>}
            </form>
          </div>
        </div>
        <div className='col-lg-6 text-center mt-5'>
          <div className='geincontact'>
            <h3 className='text-center'>- GET IN TOUCH -</h3>
            <div className='d-flex mt-3 justify-content-center'>
              <img src={facebook} width={40} className='ms-5' alt="Facebook" />
              <img src={twitter} width={40} className='ms-5' alt="Twitter" />
              <img src={inta} width={40} className='ms-5' alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
