import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import "./verInfoAsociado.css";

const VerInfoAsociado = (props:any) => {
    let datosAsociado = props.datos[0];
    console.log(datosAsociado);
    const info = {
        nombre: "Eduardo",
        apellidos: "Eduardito",
        dni:"12321321312",
        email:"edu@gmail.com"
    }
    return (
        <Box className="container-ver-info-asociado">
            <Avatar alt="avatar" src="" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className='resaltar'>Nombre: </span>{info.nombre}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className='resaltar'>Apellido: </span>{info.apellidos}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className='resaltar'>DNI: </span>{info.dni}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className='resaltar'>E-Mail: </span>{info.email}
            </Typography>
        </Box>
    );
};

export default VerInfoAsociado;