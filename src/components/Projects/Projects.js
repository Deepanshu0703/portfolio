import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Udemy AppBackend"
              description="Created Backend Clone for the very popular educational platform Udemy where the instructor and users can come, and fulfill their need. Instructor can create bootcamps and users can register into it. Also the user can find the nearest geographical bootcamp to contact offline."
              ghLink="https://github.com/Deepanshu0703/AppBackend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLog"
              description="A blog page build with Nodejs and Express.js which takes the content from makdown files and renders and for dataBase Mongodb is used. Supports users registration and login. Also supports comments on the blog post.User can create their own blog post and can edit and delete it."
              ghLink="https://github.com/Deepanshu0703/Personal-Blogs-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Remember the Last"
              description="It is Pure Javascript based website which is actually a game in which you have to remember all the pressed color and its sequence. The game become more tougher as it moves ahead."
              ghLink="https://github.com/Deepanshu0703/Remember_The_last"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Google Keeper Clone"
              description="
              A clone of Google Keep, a note taking app. It is a MERN stack application with features like adding, deleting, and editing notes. It also has a feature to add labels to the notes.
              "
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CLI News App"
              description="It is an Command line besed app for personal use. It can give the news of your choice i.e genre and language. It is build with Nodejs and Express.js. You can select the genre and language both on CLI itself."
              ghLink="https://github.com/Deepanshu0703/CLI_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Deepanshu0703/Face-Recognition-and-Emotion-Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
