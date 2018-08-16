import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width:94%;
  margin-left: 3%;
  border-bottom: 4px solid whitesmoke;
}
  .title {
    color: #3d4449;
    margin-top: 9%;
    @media screen and (max-width: 600px) {
     font-size: 2rem!important;
}
`;
const LernmoreButton = styled.button`
  width: 161px;
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
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 13% !important;
  }
`;
const SectionOne = () => (
  <Container className="section">
    <div className="columns is-gapless">
      <div className="column">
        <div className="title  is-size-1 has-text-left has-text-weight-bold is-size-2-mobile">
          Hi, I'm Editouiral
        </div>
        <div className="subtitle is-size-1 has-text-weight-bold is-size-3-mobile">
          by HTML5 UP
        </div>
        <p className=" is-size-5 is-capitalized has-text-grey">
          A free and fully responsive site template
        </p>
        <p className=" is-size-6 has-text-grey-darke">
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
          aliquam facilisis ante<br /> interdum congue. Integer mollis, nisl
          amet convallis, porttitor magna ullamcorper, amet <br />egestas
          mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod
          egestas.<br /> Pellentesque sapien ac quam. Lorem ipsum dolor sit
          nullam.
        </p>
        <LernmoreButton className="button is-medium has-text-weight-semibold">
          LEARN MORE
        </LernmoreButton>
      </div>
      <div className="column">
        <a href="">
          <Image
            src="/images/rightImage.png"
            className="rightImage"
            alt="back-to-top"
          />
        </a>
      </div>
    </div>
  </Container>
);

export default SectionOne;
