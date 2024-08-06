import { Container, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; 

export default function UserList() {
    const [userList, setUserList] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:3000/ranking')
            .then(response => response.json())
            .then(data => data.sort((a, b) => a.TempoTotal - b.TempoTotal))
            .then(data => setUserList(data));
    }, []);
 
    return (
        
      <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', minHeight:'75.55vh'}}> 
      <h1>JOGADORES</h1>
        <Stack direction={'row'} sx={{display: 'flex', flexWrap: 'wrap', width:'100%', justifyContent:'space-around'}}>
            {userList.map((user, index) => (
                <Paper elevation={10} sx={{height:'20vh', width:'23vw', margin:'1%'}}>
                    <Container sx={{height:'100%', fontWeight:'bold', lineHeight:'50%', fontSize:'90%'}}>
                        <p>{index+1}º {user.Nome}</p>
                        <p>Tempo: {user.Minutos < 10 ? '0' + user.Minutos : user.Minutos}:{user.Segundos < 10 ? '0' + user.Segundos : user.Segundos}</p>
                        <p>Telefone: {user.Telefone}</p>
                        <p>Email: {user.Mail}</p>
                        <Stack sx={{height:'30%', display:'flex', flexDirection:'row-reverse'}}>
                            <IconButton aria-label="delete" onClick={() => {
                                fetch(`http://localhost:3000/ranking/${user.id}`, {
                                    method: 'DELETE',
                                }).then(
                                    fetch('http://localhost:3000/ranking')
                                        .then(response => response.json())
                                        .then(data => setUserList(data))
                                    )
                                }}>
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </Container>
                </Paper>    
            ))}
        </Stack>
      </Container>
    );
}