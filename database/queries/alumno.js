const alumno={
    listar:`SELECT * FROM alumnos`,

    alumno:(id)=>{
        return `SELECT * FROM alumnos WHERE alumnos.id=${id}`
    },
    actualizarimagen:(data)=>{
        return `UPDATE alumnos SET 
                imagen = '${data.imagen}'
                WHERE alumnos.id=${data.id}`
    },
    actualizar:(data)=>{
        return `UPDATE alumnos SET 
                nombre='${data.nombre}',
                apellido='${data.apellido}',
                grado='${data.grado}',
                seccion = '${data.seccion}',
                turno='${data.grado}'
                WHERE alumnos.id=${data.id}`
    },
    eliminar:(id)=>{
        return `DELETE FROM alumnos
        WHERE alumnos.id=${id}`
    },
    agregar:(data)=>{
        return `INSERT INTO alumnos (id, nombre, apellido, grado, seccion, turno)
        VALUES (${data.id},'${data.nombre}', '${data.apellido}' ,'${data.grado}','${data.seccion}','${data.turno}');`
    }
    
};

module.exports=alumno;