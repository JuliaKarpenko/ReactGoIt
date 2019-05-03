import React, {Component, createRef} from 'react';
import style from './Player.module.css';
import Button from './Button';

export default class Player extends Component {

    playerRef = createRef();

    playVideo = () => this.playerRef.current.play();
    pauseVideo = () => this.playerRef.current.pause();


    render() {
        const {source} = this.props;
        return(
            <div className={style.container}>
                <video 
                    className={style.player}
                    src={source}
                    ref={this.playerRef}
                />

                <div className={style.controls}>
                    <Button label="Play" onClick={this.playVideo}/>
                    <Button label="Pause" onClick={this.pauseVideo}/>
                </div>
            </div>
        )
    }
}