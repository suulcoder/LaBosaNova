import { connect } from "react-redux";
import React, { Fragment, useRef } from "react";
import "./styles.css";

const Home = ({isFetched}) => {

  return (
    <div className="My-Body">
        <div className="Text-18">
            Una experiencia de Zack Steam
        </div>
        <div className="Polygon">
            <div className="La-BossaNovaTitle">
                LA BOSSANOVA
            </div>
            <div className="experice-text">
                {"(experience)"}
            </div>
            <div className="play-icon">
                
            </div>
        </div>
    </div>
)};


export default connect(
  state => ({
    
  }),
  undefined
)(Home)