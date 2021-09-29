import { Checkbox } from '@mui/material';
import * as React from 'react';

export interface ExploreProps {
}

export default function Explore (props: ExploreProps) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleCheckBox=(e:any)=>{
        console.log(e.target.checked);
        
    }
  return (
    <div style={{marginTop:'60px'}}>
      <div className="sideFilter">
      <Checkbox {...label} onChange={handleCheckBox} size="small" />
      </div>
    </div>
  );
}
