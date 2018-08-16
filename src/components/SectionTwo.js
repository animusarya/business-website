import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width:100%;
  border-bottom: 4px solid whitesmoke;
}
  .title {
    font-family: fantasy;
    :hover {
      width: 209px;
      border-bottom: 3px solid #f56a6a;
    }
  }
  .icon {
    width: 100%;
    height: 22% !important;
    color: #f5696a;
    margin-left: 6% !important;
    margin-top: 13%;
    @media screen and (max-width: 600px) {
      width: 53%;
      height: 22% !important;
      color: #f5696a;
      margin-left: 14% !important;
      margin-top: 7%;
      margin-bottom: 18px;
  }
`;

const FirstContainer = styled.div`
  width: 94%;
  margin-left: 5%;
  margin-top: 10%;
`;

const SecondContainer = styled.div`
  width: 94%;
  margin-left: 5%;
`;

const SectionTwo = () => (
  <Container className="section">
    <h1 className="title is-size-3 has-text-weight-bold">Erat lacinia</h1>
    <FirstContainer className="columns">
      <div className="columns is-gapless">
        <div className="column is-pulled-left is-one-fifth">
          <i className="icon far fa-gem" />
        </div>
        <div className="column is-pulled-right">
          <h1 className="is-size-4 has-text-black-darker">
            Portitor ullamcorper
          </h1>
          <p className="is-size-6 has-text-grey">
            Aenean ornare velit lacus, ac varius enim lorem <br />ullamcorper
            dolore. Proin aliquam facilisis ante interdum. <br /> Sed nulla amet
            lorem feugiat tempus aliquam.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="columns is-gapless">
          <div className="column is-one-fifth">
            <i className="icon fab fa-telegram-plane" />
          </div>
          <div className="column">
            <h1 className="is-size-4 has-text-black-darker">Sapien veroeros</h1>
            <p className="is-size-6 has-text-grey">
              Aenean ornare velit lacus, ac varius enim lorem <br />ullamcorper
              dolore. Proin aliquam facilisis ante interdum. <br /> Sed nulla
              amet lorem feugiat tempus aliquam.
            </p>
          </div>
        </div>
      </div>
    </FirstContainer>
    <SecondContainer className="columns">
      <div className="columns is-gapless">
        <div className="column is-pulled-left is-one-fifth">
          <i className="icon fas fa-rocket" />
        </div>
        <div className="column is-pulled-right">
          <h1 className="is-size-4 has-text-black-darker">Quam lorem ipsum</h1>
          <p className="is-size-6 has-text-grey">
            Aenean ornare velit lacus, ac varius enim lorem <br />ullamcorper
            dolore. Proin aliquam facilisis ante interdum. <br /> Sed nulla amet
            lorem feugiat tempus aliquam.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="columns is-gapless">
          <div className="column is-one-fifth">
            <i className="icon fas fa-signal" />
          </div>
          <div className="column">
            <h1 className="is-size-4 has-text-black-darker">
              Sed magna finibus
            </h1>
            <p className="is-size-6 has-text-grey">
              Aenean ornare velit lacus, ac varius enim lorem <br />ullamcorper
              dolore. Proin aliquam facilisis ante interdum. <br /> Sed nulla
              amet lorem feugiat tempus aliquam.
            </p>
          </div>
        </div>
      </div>
    </SecondContainer>
  </Container>
);

export default SectionTwo;
