import React, {Fragment} from 'react';
import Banner from '../../banner/components/banner';
import Loans from '../../loans/components/loans';
import '../css/home-layout.css';

function HomeLayout(props) {
  return (
      <div>
        <Banner/>
        <div className="item contenido2">
          <Loans/>
        </div>
      </div>
    )
}
export default HomeLayout;