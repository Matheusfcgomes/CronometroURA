import { Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";


export default function Podium() {
    const [userList, setUserList] = useState([]);
        
    useEffect(() => {
        fetch('http://localhost:3000/ranking')
            .then(response => response.json())
            .then(data => data.sort((a, b) => a.TempoTotal - b.TempoTotal))
            .then(data => setUserList(data));
    }, []);

    return (
        <Container sx={{height:'75.55vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Stack sx={{fontSize:'250%', fontWeight:'bold', lineHeight:'1%'}}><p>PÓDIO</p></Stack>
            <Stack direction={'row'} sx={{bgcolor:'white', height:'80%', width:'70%', justifyContent:'space-around', alignItems:'flex-end', borderRadius:'20px'}}>
                <Stack spacing={1} sx={{display:'flex', alignItems:'center', lineHeight:'1vh', fontWeight:'bold', height:'100%', justifyContent:'flex-end'}}>
                    <Stack spacing={0.5} sx={{height:'10%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {userList.map((user, index) => (
                            <p>{index == 1 ? user.Nome : ''}</p>
                        ))}
                        {userList.map((user, index) => (
                            <p>{index == 1 ? (user.Minutos < 10 ? '0' + user.Minutos + ':' : user.Minutos + ':') : ''}{index == 1 ? (user.Segundos < 10 ? '0' + user.Segundos : user.Segundos) : ''}</p>
                        ))}
                    </Stack>
                    <img src="\src\assets\second-solid.svg" alt="Troféu segundo lugar" id="secondPlace"/>
                    <Container sx={{bgcolor:'#c0c0c0', height:'25vh', width:'10vw', borderTopRightRadius:'20px', borderTopLeftRadius:'20px'}}/>
                </Stack>

                <Stack spacing={1} sx={{display:'flex', alignItems:'center', lineHeight:'1vh', fontWeight:'bold', height:'100%', justifyContent:'flex-end'}}>
                    <Stack spacing={0.5} sx={{height:'10%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {userList.map((user, index) => (
                            <p>{index == 0 ? user.Nome : ''}</p>
                        ))}
                        {userList.map((user, index) => (
                            <p>{index == 0 ? (user.Minutos < 10 ? '0' + user.Minutos + ':' : user.Minutos + ':') : ''}{index == 0 ? (user.Segundos < 10 ? '0' + user.Segundos : user.Segundos) : ''}</p>
                        ))}
                    </Stack>
                    <img src="\src\assets\first-solid.svg" alt="Troféu primeiro lugar" id="firstPlace"/>
                    <Container sx={{bgcolor:'#e6c407', height:'35vh', width:'10vw', borderTopRightRadius:'20px', borderTopLeftRadius:'20px'}}/>
                </Stack>
                
                <Stack spacing={1} sx={{display:'flex', alignItems:'center', lineHeight:'1vh', fontWeight:'bold', height:'100%', justifyContent:'flex-end'}}>
                    <Stack spacing={0.5} sx={{height:'10%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {userList.map((user, index) => (
                            <p>{index == 2 ? user.Nome : ''}</p>
                        ))}
                        {userList.map((user, index) => (
                            <p>{index == 2 ? (user.Minutos < 10 ? '0' + user.Minutos + ':' : user.Minutos + ':') : ''}{index == 2 ? (user.Segundos < 10 ? '0' + user.Segundos : user.Segundos) : ''}</p>
                        ))}
                    </Stack>
                    <img src="\src\assets\third-solid.svg" alt="Troféu terceiro lugar" id="thirdPlace"/>
                    <Container sx={{bgcolor:'#a46628', height:'15vh', width:'10vw', borderTopRightRadius:'20px', borderTopLeftRadius:'20px'}}/>
                </Stack>
            </Stack>
        </Container>
    )
}