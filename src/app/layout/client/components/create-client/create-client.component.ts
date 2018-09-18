import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { Address } from '../../models/address';
import { Department } from '../../../shared/model/department';
import { LocationService } from '../../../shared/services/location.service';
import { City } from '../../../shared/model/city';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  private client: Client;
  private departments: Department[];
  private cities: City[];
  private departmentIdSelected: number;
  private isDepartmentSelected = false;

  constructor(
    private location: Location,
    private clientService: ClientService,
    private locationService: LocationService) { }

  ngOnInit() {
    this.client = new Client();
    this.client.address = new Address();
    this.locationService.getDepartments().subscribe(departments => {
      this.departments = departments;
      console.log(this.departmentIdSelected);
    });
  }

  fillCitiesBySelectedDepartment(evet: any) {
    this.locationService.getCitiesByDepartmentID(this.departmentIdSelected).subscribe(cities => {
      this.isDepartmentSelected = true;
      this.cities = cities;
    });
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
