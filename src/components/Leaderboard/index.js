import { connect } from "react-redux";
import React, { Fragment, useRef } from "react";
import "./styles.css";

const Leaderboard = ({}) => {

  return (
    <div className="Leaderboard">
        <div className="Header">
            <div className="timer">
                <div className="timer-title">
                    Próxima actualización en
                </div>
                <div className="timer-time">
                    <div className="timer-section">
                        <div className="timer-number">
                            {'04' + ':'}
                        </div>
                        <div className="timer-text">
                            {'Días'}
                        </div>
                    </div>
                    <div className="timer-section">
                        <div className="timer-days-number">
                            <div className="timer-number">
                                {'10' + ':'}
                            </div>
                            <div className="timer-text">
                                {'Horas'}
                            </div>
                        </div>
                    </div>
                    <div className="timer-section">
                        <div className="timer-days-number">
                            <div className="timer-number">
                                {'29' + ':'}
                            </div>
                            <div className="timer-text">
                                {'Minutos'}
                            </div>
                        </div>
                    </div>
                    <div className="timer-section">
                        <div className="timer-days-number">
                            <div className="timer-number">
                                {'20'}
                            </div>
                            <div className="timer-text">
                                {'Segundos'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Leaderboard-title">
                <div className="Leaderboard-title-title">
                    Leaderboard
                </div>
                <div className="Leaderboard-title-button">
                    RECLAMAR MI PREMIO
                </div>
                <div className="Leaderboard-title-description">
                    La tabla se actualiza semanalmente
                </div>
            </div>
            <div className="leaderboard-links">
                <div className="leaderboard-links-title">
                    Escucha mi música para ganar más premios
                </div>
                <div className="leaderboard-links-list">
                    <div className="Spotify-link"></div>
                    <div className="Amazon-link"></div>
                    <div className="Youtube-link"></div>
                    <div className="Deezer-link"></div>
                    <div className="Apple-link"></div>
                </div>
            </div>
        </div>
        <div className="Table"></div>
    </div>
)};


export default connect(
  state => ({
    
  }),
  undefined
)(Leaderboard)