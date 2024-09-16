import React, {useState, useEffect} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import {useParams, Link} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const TeamMemberDesc = () => {
  const {id} = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/teamData.json");
        const data = await response.json();
        let foundPerson = null;
        data.forEach((person) => {
          if (person.id === id) {
            foundPerson = person;
          }
        });
        setPerson(foundPerson);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    loadData();
  }, [id]);

  if (!person) {
    return (
      <Container>
        <Breadcrumbs memberPage={"User not Found"} />
        <Row className="py-lg-5">
          <Col md={8} className="mx-auto">
            <div className="text-center mt-4">
              <h1 className="fw-bold">OOOPS!</h1>
              <h3 className="mb-3">This user could not e found</h3>
              <Link to="/" className="btn btn-primary" role="button">
                Back to Team
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumbs memberPage={person.name} />
      <section className="team-profile-bg text-center">
        <Row className="py-lg-5" key={person.id}>
          <Col md={8} className="mx-auto">
            <Image src={"../images/avatar/" + person.profile_pic} roundedCircle thumbnail fluid className="border-5 p-0 border-color-primary" style={{maxWidth: "400px"}} alt={person.name} title={person.name} />
            <div className="text-center mt-4">
              <h1 className="fw-bold">{person.name}</h1>
              <h3 className="mb-3">{person.role}</h3>
              <p className="mb-2">{person.desc}</p>
              <p>{person.skills.join(", ")}</p>
              <div className="socials d-flex justify-content-center">
                <Link className="text-decoration-none px-1 z-1" to={"mailto:" + person.email}>
                  <img src="../images/icon/icon-mail.svg" width="35px" alt="Email" title="Email" />
                </Link>
                {person.social_media.map((link, index) => (
                  <Link key={index} className="text-decoration-none px-2 z-1" to={link.url} target="_blank" rel="noopener noreferrer">
                    <Image src={"../images/icon/icon-" + link.name + ".svg"} width="35px" alt={link.name} title={link.name} />
                  </Link>
                ))}
              </div>
              <Link to="/" className="btn btn-primary mt-3" role="button">
                Back to Team
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default TeamMemberDesc;
