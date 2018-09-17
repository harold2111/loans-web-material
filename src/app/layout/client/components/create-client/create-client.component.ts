import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { Address } from '../../models/address';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  @Input() client: Client;

  constructor(
    private location: Location,
    private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();
    this.client.address = new Address();
  }

  goBack(): void {
    this.location.back();
  }

  saveClient(): void {
    this.clientService.createClient(this.client).subscribe(client => {
      this.goBack();
    });
  }

}
