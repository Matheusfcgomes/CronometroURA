import { Container, Stack } from '@mui/material';
import '/src/index.css'
import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export default function Root() {

  return (
    <>
      <Container sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', width:'100vw'}}>
        {/* HEADER URA */}
        <Stack>
          <img src="\src\assets\logo.svg" alt="LOGO URA"/>
        </Stack>
        
        <Stack sx={{width:'100vw', minHeight:'75.55vh'}}>
          <Outlet />
        </Stack>

        {/* BARRA DE NAVEGAÇÃO */}
        <Stack direction={'row'} sx={{width:'25vw', height:'8vh', display:'flex', justifyContent:'space-around', alignItems:'center', borderRadius:'20px 20px 0% 0%', bgcolor:'white'}}>
          <Link to={'cronometro/'}><IconButton aria-label="adicionar jogador" size="large" sx={{color:'#5a92c2'}}>
            <AddAlarmIcon fontSize="inherit"/>
          </IconButton></Link>
          <Link to={'podium/'}><IconButton aria-label="podium" size="large" sx={{color:'#5a92c2'}}>
            <EmojiEventsIcon fontSize="inherit"/>
          </IconButton></Link>
          <Link to={'user-list/'}><IconButton aria-label="lista de jogadores" size="large" sx={{color:'#5a92c2'}}>
            <FormatListNumberedIcon fontSize="inherit"/>
          </IconButton></Link>
        </Stack>
      </Container>
    </>
  )
}
