import React from 'react';
import Card from '../Components/ControlDeInventario/Inventario';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import FormInventario from '../Components/FormInventario/FormInventario';
import FiltroInventario from '../Components/FiltroInventario/FiltroInventario';

function PerfilUser() {
    return (
        <div className={styles.cuerpo} >
            <div className={styles.contenido} >
                <FormInventario/>
                <FiltroInventario/>
                <div className={styles.grid2}>         
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </div>
    );
}

export default PerfilUser;