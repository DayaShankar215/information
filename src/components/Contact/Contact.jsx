// src/components/Contact/Contact.jsx

// Removed duplicate declaration of ContactSection

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: var(--dark-color);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  div {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 5px;
      color: var(--dark-color);
    }

    p {
      color: var(--gray-color);
    }
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: var(--dark-color);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--dark-color);
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  span {
    color: var(--danger-color);
    font-size: 0.8rem;
    margin-top: 5px;
    display: block;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(58, 134, 255, 0.4);
  }

  svg {
    font-size: 1.2rem;
  }
`;

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend or email service
    alert('Message sent successfully!');
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <ContactContainer>
          <ContactInfo>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Information
            </motion.h3>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <h3>Send a Message</h3>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <span>{errors.message.message}</span>}
          </FormGroup>
          <SubmitButton type="submit">
            <FiSend />
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactInfo>
      <ContactInfo>
        <ContactItem
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiMapPin />
          <div>
            <h4>Address</h4>
            <p>Narephat, kathmandu-32, Nepal</p>
          </div>
        </ContactItem>
        <ContactItem
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiPhone />
          <div>
            <h4>Phone</h4>
            <p>+977-9844330051</p>
          </div>
        </ContactItem>
        <ContactItem
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiMail />
          <div>
            <h4>Email</h4>
            <p>dayashankaradhikari@gmail.com</p>
          </div>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  </div>
</ContactSection>
);
}

export default Contact;
// src/components/Contact/Contact.jsx
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactSection = styled.section`
  background-color:white;

`;
export { ContactSection };
// Styled components and functional component code remains unchanged