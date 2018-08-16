import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-bottom: 4px solid whitesmoke;
`;

const Gallery = styled.div`
  width: 96%;
  margin-left: 4% !important;
  @media screen and (max-width: 600px) {
    margin-top: -23% !important;
  }
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

const Sectionthree = () => (
  <Container className="section">
    <Gallery className="columns is-gapless">
      <div className="column">
        <a href="">
          <Image src="/images/four.png" className="Image" alt="back-to-top" />
        </a>
        <div className="content">
          <h1 className="is-size-4 has-text-black-darker">Sed etiam facilis</h1>
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
          <Image src="/images/five.png" className="Image" alt="back-to-top" />
        </a>
        <div className="content">
          <h1 className="is-size-4 has-text-black-darker">
            Feugiat lorem aenean
          </h1>
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
          <Image src="/images/six.png" className="Image" alt="back-to-top" />
        </a>
        <div className="content">
          <h1 className="is-size-4 has-text-black-darker">
            Amet varius aliquam
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
