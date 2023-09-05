import React,{useEffect, useRef, useState}  from 'react'
import {TbPlayerSkipForwardFilled} from 'react-icons/tb'


function usePLayerState ($videoPlayer) {

  const [playerState, setPlayerState] = useState({
    playing : false,
    percentage: 0
    
  })

  useEffect(()=>{
     playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();
   
  }, [playerState.playing])

  function toggleVideoPLay (){

  setPlayerState({
    ...playerState,
    playing: !playerState.playing,
  })
}
  function handleTimeUpdate () {
      const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100 
      setPlayerState({
        ...playerState,
        percentage: currentPercentage
      })
    
  }
  function handleChangeVideoPercentage (ev) {
    console.log(ev.target.value)
    const currentPercentageValue = ev.target.value
     $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue
    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue
    })
  }
  return{
    playerState,
    toggleVideoPLay,
    handleTimeUpdate,
    handleChangeVideoPercentage
  }

}

export default function Video() {
    const $videoPlayer = useRef(null)
    const {playerState, toggleVideoPLay, handleTimeUpdate, handleChangeVideoPercentage} = usePLayerState($videoPlayer);

  return (
    <div className='videoWrapper'>
      <video 
        ref={$videoPlayer}
        type='video/mp4'
        src= 'porshe.mp4'
        controls
        onTimeUpdate={handleTimeUpdate}
        
      />
        <div className="controls" style={{display: 'none'}}>
            <TbPlayerSkipForwardFilled onClick={toggleVideoPLay} style={{fontSize: '10x' }}></TbPlayerSkipForwardFilled>

            <input 
                type="range"
                min="0"
                max="100"
                onChange={handleChangeVideoPercentage}
                value={playerState.percentage}
            />
            <select>
                {[1,2,3].map(speed =>(
                    <opition
                    key={`speedChange_${speed}`}
                    >
                        {speed}
                    </opition>
                ))}
            </select>
        </div>
    </div>
    
  )
}
