import { connect } from "react-redux";
import React, { Fragment, useRef } from "react";
import "./styles.css";
import Leaderboard from "../Leaderboard";

const Home = ({}) => {

  return (
    <div className="My-Body">
        <div className="Text-18">
            Patrocinado por XXXXXXX
        </div>
        <div className="Polygon">
            <div className="La-BossaNovaTitle">
                ZACK STEAM
            </div>
            <div className="experice-text">
                {"(experience)"}
            </div>
            <div className="play-icon">
            </div>
        </div>
        <Leaderboard/>
    </div>
)};


export default connect(
  state => ({
    
  }),
  undefined
)(Home)