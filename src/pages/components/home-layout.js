import React, {Fragment} from 'react';
import Banner from '../../banner/components/banner';
import Loans from '../../loans/components/loans';
import ContentGrid from '../../widgets/grid/components/grid';
import '../css/home-layout.css';

function HomeLayout(props) {
  return (
      <div>
        <Banner/>
        <div className="item">
          <ContentGrid/>
        </div>
      </div>
    )
}
export default HomeLayout;