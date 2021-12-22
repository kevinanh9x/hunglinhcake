import React from "react";
import FooterHungLinh from "../common/Footer/Footer";
import HungLinhHeader from "../common/Header/Header";
import "./_aboutus.scss";

function AboutUs() {
  return (
    <div>
      <HungLinhHeader />
      <div className="container">
        <div className="left">
          <h2 style={{margin:"5px"}}>Giới Thiệu</h2>
          <p className="text__Pander">
            Occaecat nulla velit dolor et incididunt. Commodo aute cillum dolore
            pariatur aute est cillum nisi tempor qui eu deserunt mollit. Amet in
            cillum pariatur est magna nostrud ex laboris dolore esse nostrud.
            Non laboris dolore ea ea ex Lorem nisi quis proident dolore.
            Deserunt cupidatat culpa aliquip pariatur labore nostrud esse
            exercitation dolore. Occaecat mollit ea do do eiusmod. Cupidatat
            dolore exercitation consequat elit quis amet in exercitation minim.
            Exercitation ea duis fugiat esse officia labore cillum aute aliqua
            magna deserunt non. Voluptate veniam cupidatat aliqua do enim culpa
            Lorem et in adipisicing mollit. Adipisicing ullamco elit ipsum
            ullamco eiusmod culpa eu fugiat. Nostrud cillum qui dolor duis
            occaecat deserunt irure. Irure elit tempor dolore adipisicing quis
            sint voluptate esse sit mollit laboris adipisicing consequat veniam.
            Veniam dolor ex in do laboris aliqua tempor laboris magna sint minim
            duis in quis. Nostrud et sunt exercitation consectetur. Veniam culpa
            laboris minim do non nisi ullamco sit commodo laborum dolore non
            dolore. Aute in eiusmod dolore incididunt eu sunt voluptate commodo
            tempor ex Lorem. Consectetur consectetur velit officia labore veniam
            id labore sunt pariatur mollit incididunt officia. Elit proident ad
            cupidatat nisi aute pariatur mollit nostrud dolor amet consequat
            occaecat sunt. Tempor amet fugiat nostrud reprehenderit aute magna
            sunt nulla aliquip ea ut. Laborum laboris id cupidatat in culpa
            aliqua fugiat deserunt. Veniam pariatur nisi dolore eu velit ad eu
            nisi ex exercitation commodo veniam fugiat laborum. Id ad dolor
            occaecat voluptate nostrud duis enim consequat reprehenderit
            exercitation laborum duis velit. Et qui sunt esse aliqua sunt aliqua
            ut sint eu. Commodo est in sunt dolore.
          </p>
        </div>
        <div className="right">
          <img src="https://goldenapple.com.vn/wp-content/uploads/2019/02/banner-banh-1-compressed.jpg" style={{width:"830px"}}/>
        </div>
      </div>
      <FooterHungLinh />
    </div>
  );
}

export default AboutUs;
