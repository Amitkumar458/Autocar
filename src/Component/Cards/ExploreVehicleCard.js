import * as React from 'react';
import Card from '@mui/material/Card';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

export default function ExploreVehicelCard({data}) {

  return (
    <Card className='explorecarcard'>
      <div style={{fontSize:'15px' , fontFamily:'monospace' , margin:'10px' , marginLeft:'20px'}}>LUXURY CAR | 2021</div>
      <div style={{backgroundColor:'white', display:'flex', justifyContent:'center'}}>
        <img src={`/images/${data.image}`} alt='loading' height={'180px'} width={'220px'}/>
      </div>
      <div className='mx-3 d-flex justify-content-between' style={{fontWeight:'600', fontSize:'large'}}>
        <div>{data.name}</div>
        <div>{data.price}</div>
      </div>
      <div className='mx-3 my-3' style={{fontSize:'13px' , opacity:'0.9' , fontWeight:'450' , letterSpacing:'2px'}}>
        <SettingsIcon fontSize='small'/>{" "} {data.type} {"  "}|{"  "} {data.company}
      </div>
      <div className='d-flex justify-content-center'>
        <Button sx={{width:'100%', color:'#c90202' , padding:'20px' , paddingTop:'10px' , transition:'transform 0.2s' , ":hover":{textDecoration:'underline' , textUnderlineOffset:'7px' , transform:'scale(1.1)' , backgroundColor:'white'}}}>Explore Your Vehicle</Button>
      </div>
    </Card>
  );
}