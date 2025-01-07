import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="./software-developer.jpg"
            alt="ranjith-logo"
            style={{
                width:'85%'
            }}
          />
        </ScrollAnimation>
        <br/>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Ranjithkumar</strong>. Results-driven Senior Javascript Developer with 11.5 years ofexperience in designing and maintaining dynamic, responsive webapplications. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Proficient in React.js, Angular framework, with a proven ability to translate complex business requirements intoscalable, efficient solutions. Skilled in performance optimization,ensuring high-speed and reliable applications. Strong communicator adept at collaborating with clients to understandtheir needs and deliver tailored solutions. Experienced in fosteringcross-functional teamwork to consistently deliver high-qualityprojects on time. Recognized for improving applicationperformance, enhancing user engagement, and maintaining codequality standards.
            </ScrollAnimation>
            
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my career I have had opportunities to work on various range of projects from small level application to large scale enterprise application.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;