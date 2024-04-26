import { useState } from 'react';
import styles from './form.module.scss'

function ContactForm({setIsThenkyou}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    email: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка данных формы
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container_input}>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Ім’я'
        />
      <input
          className={`${styles.input} ${styles.input_desc}`}
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder='Тема повідомлення'
        />
      </div>

      <div className={styles.container_input}>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder='Телефон'
        />
        <input
          className={`${styles.input} ${styles.input_desc}`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Email'
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
        />
        <label htmlFor="agree" className={styles.text_chack}>
          Я прочитав/ла та погоджуюся з Політикою конфедиційності.
        </label>
      </div>
      <button type="submit" className={styles.btn} onClick={()=> setIsThenkyou(true)}>Відправити</button>
    </form>
  );
}

export default ContactForm;
