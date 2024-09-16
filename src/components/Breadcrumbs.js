import React from "react";
import {Breadcrumb} from "react-bootstrap";

const Breadcrumbs = ({teamListPage, memberPage}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/team" active={teamListPage ? true : false}>Our People</Breadcrumb.Item>
      {memberPage ? <Breadcrumb.Item active>{memberPage}</Breadcrumb.Item> : null}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
