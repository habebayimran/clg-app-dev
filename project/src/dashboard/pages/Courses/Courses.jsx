import React from 'react';
import styles from './Courses.module.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EEE from './images/EEE.jpg';
import AIDS from './images/AIDS.jpg';
import Mech from './images/Mech.jpg';
import MCT from './images/MCT.jpg';
import ComputerScienceCourseImg from './images/computer-science-course.jpg';
import EducationCourseImg from './images/education-course.jpg';

const courses = [
  {
    id: 1,
    image: EEE,
    title: "Yoga for Beginners",
    description: "An introductory course for those new to yoga.",
    amount: "₹2000"
  },
  {
    id: 2,
    image: MCT,
    title: "Advanced Yoga Techniques",
    description: "For experienced practitioners looking to deepen their practice.",
    amount: "₹3000"
  },
  {
    id: 3,
    image: ComputerScienceCourseImg,
    title: "Meditation and Mindfulness",
    description: "Learn techniques to calm the mind and find inner peace.",
    amount: "₹2500"
  },
  {
    id: 4,
    image: Mech,
    title: "Yoga Therapy",
    description: "Using yoga as a therapeutic tool for physical and mental health.",
    amount: "₹3500"
  },
  {
    id: 5,
    image: EducationCourseImg,
    title: "Yoga for Stress Relief",
    description: "Techniques and practices to help reduce stress and anxiety.",
    amount: "₹2200"
  },
  {
    id: 6,
    image: AIDS,
    title: "Yoga for Flexibility",
    description: "Improve your flexibility through targeted yoga practices.",
    amount: "₹2700"
  }
];

function Courses() {
  const navigate = useNavigate();

  const handleEnrollNow = (course) => {
    navigate('/payment', { state: { course } });
  };

  return (
    <div className={styles.coursesPage}>
      <header className={styles.height25}>
        <Container className='h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <Typography variant="h1" className='text-center fw-semibold'>Our Courses</Typography>
          <Typography variant="body1" className='text-center w-75 mb-5'>
            At our university, we pride ourselves on offering a broad spectrum of courses designed to meet the diverse interests and career aspirations of our students. Whether you're pursuing an undergraduate degree, looking to advance your career with postgraduate studies, or seeking professional development opportunities, our comprehensive programs provide the foundation and expertise you need to succeed.
          </Typography>
        </Container>
      </header>
      <br />
      <Typography variant="h2" className={styles.courseHeading}>Professional Courses</Typography>
      <br />
      <Container className='py-5'>
        <Grid container spacing={3} className={styles.rowG5}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card className={`shadow ${styles.cardCustom} h-100`}>
                <CardActionArea>
                  <CardMedia component="img" height="250" image={course.image} className={styles.cardImage} />
                  <CardContent className='d-flex flex-column'>
                    <Typography variant="h5">{course.title}</Typography>
                    <Typography variant="body2" className='flex-grow-1'>{course.description}</Typography>
                    <Typography variant="body1" className={styles.amount}>Fee: {course.amount}</Typography>
                  </CardContent>
                </CardActionArea>
                <Button variant="contained" color="primary" className={`mt-auto ${styles.enrollButton}`} onClick={() => handleEnrollNow(course)}>Enroll Now</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br/>
      <Typography variant="h2" className={styles.courseHeading}>Related Courses</Typography>
      <br />
      <Container className='py-5'>
        <Grid container spacing={3} className={styles.rowG5}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card className={`shadow ${styles.cardCustom} h-100`}>
                <CardActionArea>
                  <CardMedia component="img" height="250" image={course.image} className={styles.cardImage} />
                  <CardContent className='d-flex flex-column'>
                    <Typography variant="h5">{course.title}</Typography>
                    <Typography variant="body2" className='flex-grow-1'>{course.description}</Typography>
                    <Typography variant="body1" className={styles.amount}>Fee: {course.amount}</Typography>
                  </CardContent>
                </CardActionArea>
                <Button variant="contained" color="primary" className={`mt-auto ${styles.enrollButton}`} onClick={() => handleEnrollNow(course)}>Read Now</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className='bg-dark text-light py-5'>
        {/* <FaqAccordion /> */}
      </div>
    </div>
  )
}

export default Courses;
