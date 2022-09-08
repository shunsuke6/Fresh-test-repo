/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";

export default function methodList() {
  const methods =  ['','entry','pre-bid-date','plase settings']
  const handleChange = (e) => {
        this.setState({selectedValue: e.target.value})
    }
  return (
    <div class={tw`flex gap-2 w-full`}>
        <select onCHange={(e) => handleChange(e)}>
            {methods.map(item => (
                <option value={item}>{item}</option>
            ))}
        </select>

    </div>
  );
}
