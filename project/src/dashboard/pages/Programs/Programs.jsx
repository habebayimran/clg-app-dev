import React from 'react';
import events from './ProgramsData';
import styles from './Programs.module.css';
import ProgramsHeader from './ProgramsHeader';
import ProgramsTestimonials from './ProgramsTestimonials';
import ProgramsFooter from './ProgramsFooter';
import section_pic_programs from './images/section_pic_programs.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Programs = () => {
  const handleNotifyClick = () => {
    toast.success("You will be notified soon!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer />
      <ProgramsHeader />
      <div className={styles.section}>
        <div className={styles.textContent}>
          <h1>More than just learning</h1>
          <p>
            Whether you want to revitalize your mind and body or take a break from your hectic lifestyle, 
            we have you covered. To bring in a new you or begin a new career path, explore our countless 
            life-changing programs, which have transformed millions of people over the last 10 decades.
          </p>
          <p>
            Every program has been designed to deliver organic and holistic results by incorporating 103 years 
            of legacy, research, and knowledge. Choose now from our innumerable courses to get started on your 
            journey of transformation!
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src={section_pic_programs} alt="Group of people performing yoga" />
        </div>
      </div>

      <div className={styles.container}>
        {events.map((event, index) => (
          <div className={styles.itemContainer} key={index}>
            <div className={styles.imgContainer}>
              <img src={event.imgSrc} alt="Event" />
            </div>
            <div className={styles.bodyContainer}>
              <div className={styles.overlay}></div>
              <div className={styles.eventInfo}>
                <p className={styles.title}>{event.title}</p>
                <div className={styles.separator}></div>
                <p className={styles.info}>{event.location}</p>
                <p className={styles.price}>{event.price}</p>
                <div className={styles.additionalInfo}>
                  <p className={styles.info}>
                    <i className="far fa-calendar-alt"></i>
                    {event.date}
                  </p>
                  <p className={`${styles.info} ${styles.description}`}>
                    {event.description}
                  </p>
                </div>
              </div>
              <button className={styles.action} onClick={handleNotifyClick}>Notify Me</button>
            </div>
          </div>
        ))}
      </div>
      <ProgramsTestimonials />
      <ProgramsFooter />
    </>
  );
};

export default Programs;

