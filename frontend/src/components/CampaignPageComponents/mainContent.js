import React from 'react';
import {connect} from "react-redux"

class MainContent extends React.Component {


  render(){
  return (
    <div id="MainContent">
      <div id="CampaignImageContainer">
        <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" height="200px" width="200px"/>
      </div>
      <div id="CampaignDescritpionContainer">
        <h1>Story</h1>
        <p>Hionoi ojhij pijpi hpih ih oihoi jh oijoihoi h oih iohjoi joi hoi hio joij oh ih oih oih ioh ioh io hioj io hioh io hio hoi hoihdlsuobd;vaousbd;vou aphpseo hafpouesdhfpao dsupfaoishouavhsdbpuvbasdhfjn oudbvojs fhuwa  we u hhds oias ofou asuzvbusbviuasb jbasooihco. z,ilovoszh.s;s.jdahseI.sldh;Uszhe;vnz.sdjjvsjadv.asdvsd.zsv.szd..zjhbljkhb,jvhv.cugvkyh  guiygiugygug.vyugkygy ..uiyihvyivhviygbiugbiuvuhgbuihluih.iuviyghouhbuhbiuhiuhuihu</p>
      </div>
    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(MainContent)
