import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import swal from 'SweetAlert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  formulario =   {
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: ''
  }

  constructor(private _emailService: EmailService) { }

  ngOnInit() {
  }

  contactForm(form)
  {
    this._emailService.sendMessage(form).subscribe(()=>{
      swal("Formulario de contacto",
            "Mensaje enviado correctamente",
            'success');

      this.cleanForm();
    });
  }
  
  cleanForm()
  {
    this.formulario.nombre='';
    this.formulario.apellido='';
    this.formulario.email='';
    this.formulario.asunto='';
    this.formulario.mensaje='';

  }
}
