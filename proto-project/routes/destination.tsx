/** @jsx h */

import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";


export default function Destination(){  
    const [place, setPlace] = useState(null);
    const [lane, setLane] = useState(null);
    

    const handleChange = (e) => {
        if(e.target.name === 'place'){
            setPlace(e.targetValue);
        }
        if(e.target.name === 'lane'){
            setLane(e.targetValue);
        }
    }
  return (
    <div class={tw`flex gap-2 w-full`}>
        <label>
            place: <input type="text" name="place" value={place} onChange={handleChange}/>
            lane: <input type="text" name="lane" value={lane} onChange={handleChange}/>
        </label>    
    </div>
  )
}
