import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { Address } from '../../models/address';
import { Department } from '../../../shared/model/department';
import { LocationService } from '../../../shared/services/location.service';
import { City } from '../../../shared/model/city';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create-edit.component.html',
  styleUrls: ['./client-create-edit.component.scss']
})
export class ClientCreateEditComponent implements OnInit {

  private client: Client;
  private departments: Department[];
  private cities: City[];
  private departmentIdSelected: number;

  private isDepartmentSelected = false;

  private isEditMode = false;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private clientService: ClientService,
    private locationService: LocationService) {
    }

  ngOnInit() {
    this.getEditModeVariables();
    this.loadDepartments();
    if (this.isEditMode) {
      this.clientService.getClientById(this.selectedId).subscribe((client) => {
          this.client = client;
      });
    } else {
      this.client = new Client();
      this.client.addresses = [];
      this.client.addresses.push(new Address());
    }
  }

  private loadDepartments() {
    this.locationService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  private getEditModeVariables() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id != null) {
        this.isEditMode = true;
        this.selectedId = +id;
      }
    });
  }

  fillCitiesBySelectedDepartment(evet: any) {
    this.locationService.getCitiesByDepartmentID(evet).subscribe(cities => {
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

  editClient(): void {
    this.clientService.editClient(this.selectedId, this.client).subscribe(client => {
      //this.goBack();
    });
  }

}
