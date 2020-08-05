import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
               <article className="teacher-item">
                   <header>
                       <img src="https://avatars2.githubusercontent.com/u/50926585?s=460&u=81c42b61c49870ccc016391a18642909d3d685b0&v=4" alt="Bruno Luiz" />
                     <div>
                         <strong>Bruno Luiz</strong>
                         <span>Excel</span>
                     </div>
                   </header>

                   <p>
                       fewqfrqwefefwefwfchdusiafefwqdcasjdknsajdsahfd.
                       <br /><br />
                       dshasfaushfufhsuifhuhdfhsadfdsfdsfdsfdsf
                   </p>

                   <footer>
                       <p>
                           Preço/horas
                           <strong>R$ 20,00</strong>
                       </p>
                       <button type="button">
                           <img src={whatsappIcon} alt="whatsapp" />
                           Entrar em contato
                       </button>
                   </footer>
               </article>
       
    )
}

export default TeacherItem;