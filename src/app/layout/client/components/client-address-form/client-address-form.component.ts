import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { LocationService } from '../../../shared/services/location.service';
import { Department } from '../../../shared/model/department';
import { Address } from '../../models/address';
import { City } from '../../../shared/model/city';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-address-form',
  templateUrl: './client-address-form.component.html',
  styleUrls: ['./client-address-form.component.scss']
})
export class ClientAddressFormComponent implements OnInit {

  private isEditMode = false;

  private selectedClientID: number;
  private selectedAddressID: number;
  private addressModel: Address = new Address();

  private departments: Department[];
  private citiesByDeparmentSelected: City[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private clientService: ClientService,
    private locationService: LocationService) { }

  ngOnInit() {
    this.loadDepartments();
    this.getSelectedIDParameter();
    if (this.isEditMode) {
      this.clientService.getAddressByClientIDAndAddressID(this.selectedClientID, this.selectedAddressID).subscribe((adddress) => {
        this.addressModel = adddress;
        this.fillCitiesBySelectedDepartment(adddress.departmentID);
      });
    }
  }

  private loadDepartments() {
    this.locationService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  private getSelectedIDParameter() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const clientID = params.get('id');
      const addressID = params.get('addressID');
      this.selectedClientID = +clientID;
      if (addressID != null) {
        this.isEditMode = true;
        this.selectedAddressID = +addressID;
      }
    });
  }

  private fillCitiesBySelectedDepartment(departmentID: number) {
    this.locationService.getCitiesByDepartmentID(departmentID).subscribe(cities => {
      this.citiesByDeparmentSelected = cities;
    });
  }

  private onCancel() {
    this.location.back();
  }

  private onSave() {
    if (this.isEditMode) {
      this.clientService.editClientAddress(this.selectedClientID, this.selectedAddressID, this.addressModel)
        .subscribe(clientAddress => {
          this.location.back();
        });
    } else {
      this.clientService.createClientAddress(this.selectedClientID, this.addressModel)
        .subscribe(clientAddress => {
          this.location.back();
        });
    }
  }

}
