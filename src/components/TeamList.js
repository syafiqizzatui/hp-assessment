import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/teamData.json");
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      <Breadcrumbs teamListPage={1} />
      <div className="team-list-container">
        {/* BANNER */}
        <section className="py-5 text-center banner-bg">
          <Row className="py-lg-5">
            <Col className="mx-auto">
              <h1 className="fw-bold">Our People</h1>
            </Col>
          </Row>
        </section>
        {/* TEAM LIST */}
        <div className="peoples py-5" id="teamContent">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
            {teams.map((member) => (
              <Col className="card-wrapper" key={member.id}>
                <Card className="border-0 mx-3 mt-5 mb-3">
                  <Link to={"/team/" + member.id} className="avatar-wrapper stretched-link text-decoration-none  border-color-primary border-5 rounded-circle">
                    <Image src={"images/avatar/" + member.profile_pic}  fluid className="p-0" alt={member.name} title={member.name} />
                  </Link>
                  <Card.Body className="text-center">
                    <Card.Title as="h4" className="fw-bold">
                      {member.name}
                    </Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                    <div className="socials d-flex justify-content-center">
                      <Link className="text-decoration-none px-1 z-1" to={"mailto:" + member.email}>
                        <Image src="images/icon/icon-mail.svg" width="20px" alt="Email" title="Email" />
                      </Link>
                      {member.social_media.map((link, index) => (
                        <Link className="text-decoration-none px-1 z-1" to={link.url} key={index}>
                          <Image src={"images/icon/icon-" + link.name + ".svg"} width="20px" alt={link.name} title={link.name} />
                        </Link>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default TeamList;
