import React from "react";
import PropTypes from "prop-types";
import {  Card, Container, Row, Col } from "react-bootstrap";
import news from "../news.svg";
import moment from "moment";

const RepoList = ({ repos, hasError, isLoading }) => {

  const parseDate = (date) => {
    return  moment().utcOffset(0, true).format("yyyy-MM-DD");
  }

  if (hasError) {
    return (
      <div className="container">
        <h6>Sorry! There was an error loading the repos.</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <h6>Loading…</h6>
      </div>
    );
  }

  return (
    <>
      {repos.map((repo, i) => (
        <Card>
          <Card.Body>
            <Container style={{"padding": "0", "margin":"0"}}>
              <Row className="justify-content-around align-items-center">
                <Col className="col-2" >
                  <img
                    variant="top"
                    style={{ width: "100%" }}
                    src={!!repo.img_url ? repo.img_url : news}
                    alt={repo.title + '-img'}
                  />
                </Col>
                <Col className="col-10">
                  <Card.Title>{repo.title}</Card.Title>
                  <Card.Text>{repo.title}</Card.Text>
                </Col>
              </Row>
            </Container>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">{parseDate(repo.date)}</small>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default RepoList;
