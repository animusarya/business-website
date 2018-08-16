import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  .title {
    font-family: fantasy;
    :hover {
      width: 249px;
      border-bottom: 3px solid #f56a6a;
    }
`;

const Image = styled.img`
  border-radius: 11px !important;
  :hover {
    width: 80%;
    border-bottom-color: #f56a6a;
    color: #f56a6a !important;
  }
  @media screen and (max-width: 600px) {
    margin-top: 13% !important;
  }
`;

const Gallery = styled.div`
  width: 96%;
  margin-top: 5% !important;
  margin-left: 4% !important;
`;

const MoreButton = styled.button`
  width: 119px;
  color: #f56a6a !important;
  font-size: 17px!important;
  height: 49px;
  border: 0px solid #f56a6a;
  border-radius: 0.375em;
  font-family: "Roboto Slab", serif;
  box-shadow: inset 0 0 0 2px #f56a6a;
}
  :hover {
    background-color:  #f56a6a;
    color: #fff!important;
  }
}`;

const Sectionthree = () => (
  <Container className="section">
    <h1 className="title is-size-3 has-text-weight-bold">Ipsum sed dolor</h1>
    <Gallery className="columns is-gapless">
      <div className="column">
        <a href="">
          <Image src="/images/first.png" className="Image" alt="back-to-top" />
        </a>
        <div className="content">
          <h1 className="is-size-4 has-text-black-darker">Interdum aenean</h1>
          <p className="is-size-6 has-text-grey">
            Aenean ornare velit lacus, ac varius enim lorem<br /> ullamcorper
            dolore. Proin aliquam facilisis ante interdum.<br /> Sed nulla amet
            lorem feugiat tempus aliquam.
          </p>
        </div>
        <MoreButton className="button is-medium has-text-weight-semibold">
          MORE
        </MoreButton>
      </div>
      <div className="column">
        <a href="">
          <Image src="/images/second.png" className="Image" alt="back-to-top" />
        </a>
        <div className="content">
          <h1 className="is-size-4 has-text-black-darker">Nulla amet dolore</h1>
          <p className="is-size-6 has-text-grey">
            Aenean ornare velit lacus, ac varius enim lorem <br />ullamcorper
            dolore. Proin aliquam facilisis ante interdum.<br /> Sed nulla amet
            lorem feugiat tempus aliquam.
          </p>
        </div>
        <MoreButton className="button is-medium has-text-weight-semibold">
          MORE
        </MoreButton>
      </div>
      <div className="column">
        <a href="">
          <Image src="/images/third.png" className="Image" alt="back-to-top" />
        </a>
        <div className="content">
          <h1 className="is-size-4 has-text-black-darker">
            Tempus ullamcorper
          </h1>
          <p className="is-size-6 has-text-grey">
            Aenean ornare velit lacus, ac varius enim lorem<br /> ullamcorper
            dolore. Proin aliquam facilisis ante interdum. <br />Sed nulla amet
            lorem feugiat tempus aliquam.ell!
          </p>
        </div>
        <MoreButton className="button is-medium has-text-weight-semibold">
          MORE
        </MoreButton>
      </div>
    </Gallery>
  </Container>
);

export default Sectionthree;
