import React from 'react';
import { Link } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import Sectionfour from '../components/Sectionfour';
import Header from '../components/Header';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Sectionfour />
      </Layout>
    );
  }
}
