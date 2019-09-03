import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.scss']
})
export class CiphersComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    console.log('Iniciou a aplicação de cifras.')
  }

}
