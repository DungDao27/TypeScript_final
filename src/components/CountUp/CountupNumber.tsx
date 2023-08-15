import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


type Props = {
  end: any
}

export default function CountupNumber(props: Props) {

  const [countUp, setCountUp] = useState(true)

  const onVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      setCountUp((prevState) => !prevState);
    }
  }

  return (
    <>
      <VisibilitySensor onChange={onVisibilityChange} offset={{
        top:
          10
      }} delayedCall>
        <CountUp start={0} end={countUp ? props.end : 0}
          suffix="" duration={5} />
      </VisibilitySensor>
    </>
  )
}