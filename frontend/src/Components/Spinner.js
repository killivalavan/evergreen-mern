import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Spin>
      <CircularProgress color='inherit' size={100} />
    </Spin>
  );
};

const Spin = styled.div`
  color: var(--green);
  display: flex;
  width: 100%;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
