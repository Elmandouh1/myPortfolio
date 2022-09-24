import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A talented developer with a strong academic background. Ability to think through a problem coupled with the confidence to make ideas heard. A proven ability to maintain and enhance company software with the aim of improving operational functionality in line with business requirement.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Technical</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        <ul className="skills">
                            <li>
                              Write effective, scalable code.
                            </li>
                            <li>
                              Develop back-end components to improve responsiveness and overall performance.
                            </li>
                            <li>
                              Integrate user-facing elements into applications.
                            </li>
                            <li>
                              Test and debug programs.
                            </li>
                            <li>
                              Improve functionality of existing systems.
                            </li>
                            <li>
                              Implement security and data protection solutions.
                            </li>
                            <li>
                              Assess and prioritize feature requests.
                            </li>
                            <li>
                              Coordinate with internal teams to understand user requirements and provide technical solutions.
                            </li>     
                        </ul>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        <ul className="skills">
                          <li>
                            Algorthims Analysis and Design.
                          </li>
                          <li>
                            Solid Design Prinicples.
                          </li>
                          <li>
                            Design Patterns.
                          </li>
                          <li>
                            Agile Software Development.
                          </li>
                          <li>
                            PHP, Laravel.
                          </li>
                          <li>
                            Rest APIS.
                          </li>
                          <li>
                            JavaScript.
                          </li>
                          <li>
                            PostgreSQL.
                          </li>
                          <li>
                            MongoDB.
                          </li>
                          <li>
                            Version Control (GIT).
                          </li>
                          <li>
                            Docker and kubernetes.
                          </li>
                          <li>
                            Familiar with AWS.
                          </li>
                        </ul>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
