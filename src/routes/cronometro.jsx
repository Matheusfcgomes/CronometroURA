import { Button, Container, Paper, Stack, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import '/src/index.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Cronometro() {
  {/* FAZENDO CRONOMETRO FUNCIONAR */}
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: false });

    const [formState, setFormState] = useState([]);
    const [timerState, setTimerState] = useState([]);

  return (
    <>
      <Container sx={{width:'100%', height:'75.55vh', display:'flex', alignItems:'center'}}>
        <Stack direction={'row'} sx={{width:'100%', height:'80%', display:'flex', justifyContent:'space-around'}}>
          {/* INFORMAÇÕES PARTICIPANTE */}
          <Paper elevation={20} sx={{width:'45%', height:'60vh'}}>
            <Stack spacing={3} sx={{display:'flex', alignItems:'center'}}>
              <Stack sx={{textAlign:'center', fontSize:'200%', fontWeight:'bold', borderBottom:'solid 4px #5a92c2', width:'45%', height:'10vh'}}><p>PARTICIPANTE</p></Stack>
              <TextField id="jogadorNome" label="Nome" 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                    ),
                }}
                variant="standard" sx={{width:'60%'}}
              />
              <TextField id="jogadorMail" label="Email" 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                    ),
                }}
                variant="standard" sx={{width:'60%'}}
              />
              <TextField id="jogadorTelefone" label="Telefone" 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                    ),
                }}
                variant="standard" sx={{width:'60%'}}
              />
              <Stack sx={{width:'100%', display:'flex', alignItems:'center'}}>
                {/* FETCH POST */}
                <Button variant='contained'sx={{bgcolor:'#5a92c2', width:'50%', fontWeight:'bold'}} onClick={() => {
                  console.log('clicou')
                  //Verifica se os dados não estão vazios
                  if(
                    document.getElementById('jogadorNome').value.length > 0 &&
                    document.getElementById('jogadorMail').value.length > 0 &&
                    document.getElementById('jogadorTelefone').value.length > 0 &&
                    totalSeconds > 0
                  ){
                    
                    
                    const dados = {
                      Nome: document.getElementById('jogadorNome').value,
                      Mail: document.getElementById('jogadorMail').value,
                      Telefone: document.getElementById('jogadorTelefone').value,
                      TempoTotal: totalSeconds,
                      Minutos: minutes,
                      Segundos: seconds
                    };

                    fetch('http://localhost:3000/ranking', {
                      method: 'POST',
                      headers: {
                        'Content-Type' : 'application/json'
                      },
                      body: JSON.stringify(dados)
                    })
                    location.reload();
                  } 
                //Ausencia de dados
                if(
                  document.getElementById('jogadorNome').value.length == 0 ||
                  document.getElementById('jogadorMail').value.length == 0 ||
                  document.getElementById('jogadorTelefone').value.length == 0
                )
                {
                  setFormState('Por favor preencha os dados do participante!');
                }
        
                if(totalSeconds == 0){
                  setTimerState('Por favor inicie a cronometragem!');
                }
                }}>CADASTRAR</Button>
                <Stack sx={{height:'8vh', color:'red'}}><h3>{formState}</h3></Stack>
              </Stack>
            </Stack>
          </Paper>

          {/* CRONOMETRO */}
          <Paper elevation={20} sx={{width:'45%', height:'60vh'}}>
            <Stack sx={{display:'flex', alignItems:'center', height:'100%'}}>
              <Stack sx={{textAlign:'center', fontSize:'200%', fontWeight:'bold', borderBottom:'solid 4px #5a92c2', width:'45%', height:'10vh'}}><p>CRONÔMETRO</p></Stack>
              <Stack sx={{fontSize:'700%', fontWeight:'bold', height:'50%', display:'flex', justifyContent:'center'}}>
                <p>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
              </Stack>
              <Stack direction={'row'} spacing={3} sx={{display:'flex', justifyContent:'center', width:'100%', height:'13%'}}>
                <Button variant='contained'sx={{bgcolor:'#5a92c2', width:'25%', fontWeight:'bold'}} onClick={start}>INICIAR</Button>
                <Button variant='contained'sx={{bgcolor:'#5a92c2', width:'25%', fontWeight:'bold'}} onClick={pause}>PAUSAR</Button>
                <Button variant='contained'sx={{bgcolor:'#5a92c2', width:'25%', fontWeight:'bold'}} onClick={reset}>ZERAR</Button>
              </Stack>
              <Stack sx={{height:'8vh', color:'red'}}><h3>{timerState}</h3></Stack>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </>
  )
}

