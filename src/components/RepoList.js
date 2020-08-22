import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import news from "../news.svg";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

const RepoList = ({ category, repos, hasError, isLoading, onGet, onClear }) => {
  useEffect(() => {
    onGet(category);
  }, [category, onGet]);

  const parseDate = (date) => {
    return moment().utcOffset(0, true).format("yyyy-MM-DD");
  };

  const parseUrl = (url) => {
    const parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const parts = parse_url.exec(url);
    return parts[3];
  };

  if (hasError) {
    return (
      <div className="container">
        <h6>Sorry! There was an error loading the repos.</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        <ul className="list">
          {Array(10)
            .fill()
            .map((item, index) => (
              <li className="card" key={index} style={{ width: "95%" }}>
                <h4 className="card-title">
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                </h4>
                <p className="card-channel">
                  <Skeleton width={`60%`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`90%`} />
                </div>
              </li>
            ))}
        </ul>
      </>
    );
  }

  return (
    <>
      {repos.map((repo, i) => (
        <Card>
          <Card.Body>
            <Container style={{ padding: "0", margin: "0" }}>
              <Row className="justify-content-around align-items-center">
                <Col className="col-2">
                  <img
                    variant="top"
                    style={{ width: "100%" }}
                    src={!!repo.img_url ? repo.img_url : news}
                    alt={repo.title + "-img"}
                  />
                </Col>
                <Col className="col-10">
                  <Card.Title>{repo.title}</Card.Title>
                  <Card.Text className="link-news">
                    <p>Fuente: <strong>{parseUrl(repo.url)}</strong></p>
                    <Button
                      className="button-link"
                      href={repo.url}
                      target="_blank"
                    >
                      Ver Noticia >
                    </Button>
                  </Card.Text>
                </Col>
              </Row>
            </Container>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">
              Fecha de la Noticia: <strong>{parseDate(repo.date)}</strong>
            </small>
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
