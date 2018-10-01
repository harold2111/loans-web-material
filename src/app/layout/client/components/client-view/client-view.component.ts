import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { LocationService } from '../../../shared/services/location.service';
import { Address } from '../../models/address';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  displayedColumns = ['stretAddress', 'city', 'options'];

  private selectedClientdID: number;
  private clientModel: Client = new Client();
  private addressesModel: Address[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getSelectedClientIDParameter();
    this.clientService.getClientById(this.selectedClientdID).subscribe((client) => {
      this.clientModel = client;
    });
    this.clientService.getAddressesByClientID(this.selectedClientdID).subscribe((addreses) => {
      this.addressesModel = addreses;
    });
  }

  private getSelectedClientIDParameter() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id != null) {
        this.selectedClientdID = +id;
      }
    });
  }

  onEditAddress(addressID: number): void {
    this.router.navigate(['/client-address-form', { id: this.selectedClientdID, addressID: addressID }]);
  }

  onCreateAddress() {
    this.router.navigate(['/client-address-form', { id: this.selectedClientdID }]);
  }

  onDeleteAddress(addressID: number) {
    this.clientService.deleteClientAddress(this.selectedClientdID, addressID).subscribe((object) => {
      this.clientService.getAddressesByClientID(this.selectedClientdID).subscribe((addreses) => {
        this.addressesModel = addreses;
      });
    });
  }

}
