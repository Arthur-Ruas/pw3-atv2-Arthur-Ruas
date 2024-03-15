import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import './studentForm.css';

const StudentForm = () => {

    const [studentName, setStudentName] = useState("");
    const [studentCPF, setStudentCPF] = useState("");
    const [studentRG, setStudentRG] = useState("");
    const [studentPhone, setStudentPhone] = useState("");
    const [guardianPhone, setGuardianPhone] = useState("");
    const [studentEmail, setStudentEmail] = useState("");

    function studentCreate(event){
        event.preventDefault();

        console.log(studentName, studentCPF, studentRG, studentPhone, guardianPhone, studentEmail)
    }

  return (
    <div className='form-student'>
        <form onSubmit={studentCreate}>
            <h1 className='form__title'>Criação de Aluno</h1>       
            <div className='input-student'>
                <div>
                    <h4 className='form-lyric'>Dados do Aluno</h4>
                    <hr/>
                </div> 
                <div className='form__input'>
                    <label>Nome</label>
                    <input value={studentName} onChange={(event) => {setStudentName(event.target.value)}} required/>
                </div>
                <div className='form__input'>
                    <label>CPF</label>
                    <InputMask mask='999.999.999-99' value={studentCPF} onChange={(event) => {setStudentCPF(event.target.value)}} required/>
                </div>
                <div className='form__input'>
                    <label>RG</label>
                    <InputMask mask='99.999.999-9' value={studentRG} onChange={(event) => {setStudentRG(event.target.value)}} required/>
                </div>
                <div className='form__input'>
                    <label>Email</label>
                    <input type='email' value={studentEmail} onChange={(event) => {setStudentEmail(event.target.value)}} required/>
                </div>
                <div className='form__input'>
                    <label>Telefone do Aluno</label>
                    <InputMask mask='(99) 99999-9999' value={studentPhone} onChange={(event) => {setStudentPhone(event.target.value)}} required/>
                </div>
                <div className='form__input'>
                    <label>Data de Nascimento</label>
                    <input type='date' required/>
                </div>
            </div>
            
            <div className='input-guardian'>
                <div>
                    <h4 className='form-lyric'>Dados do Responsável</h4>
                    <hr/>
                </div>
                <div className='form__input'>
                    <label>Telefone do Responsável</label>
                    <InputMask mask='(99) 99999-9999' value={guardianPhone} onChange={(event) => {setGuardianPhone(event.target.value)}} required/>
                </div>
            </div>
            <button className='form__button-submit' type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default StudentForm;