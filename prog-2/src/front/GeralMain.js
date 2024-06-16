import React from 'react';
import '../front/styles/Style.css';
import ListaSemestres from './ListaSemestres';
import DescricaoCursos from './DescricaoCursos';

const Main = () => {
    return (
        <main>
            <div className="container min-hw-100"
                style={{backgroundColor: "rgb(82, 14, 14)",
                        color: "white" }}>
                <div className="row w-100 mx-6 pt-3">
                    {/* <ListaSemestres /> */}
                    <DescricaoCursos/>
                </div>
            </div>
        </main>
    );
};
export default Main;