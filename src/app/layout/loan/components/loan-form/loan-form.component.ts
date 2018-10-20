import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { LoanService } from '../../services/loan.service';
import { Loan } from '../../models/loan';
import { Amortization } from '../../models/amortization';
import { LoanWithAmortizations } from '../../models/loan_with_amortizations';
import { Client } from 'src/app/layout/client/models/Client';
import { ClientService } from 'src/app/layout/client/services/client.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  displayedColumns = ['period', 'paymentDate', 'initialPrincipal', 'payment',
    'interestRatePeriod', 'toInterest', 'toPrincipal', 'finalPrincipal'];

  private wasSimulationExecuted = false;
  private selectedClientId: number;
  private interestRatePeriod: number;

  private clientsModel: Client[] = [];
  private loanModel: Loan = new Loan();
  private amortizationsModel: Amortization[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private loanService: LoanService,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (clients: Client[]) => {
        this.clientsModel = clients;
      }
    );
  }


  private onSimulate() {
    this.loanModel.interestRatePeriod = this.interestRatePeriod / 100;
    this.loanModel.clientID = this.selectedClientId;
    this.loanService.simulateLoan(this.loanModel).subscribe(
      (result: LoanWithAmortizations) => {
        this.amortizationsModel = result.amortizations;
        this.wasSimulationExecuted = true;
      },
      err => {
        this.wasSimulationExecuted = false;
        this.amortizationsModel = [];
      }
    );
  }

  private onCreate() {
    this.loanModel.interestRatePeriod = this.interestRatePeriod / 100;
    this.loanModel.clientID = this.selectedClientId;
  }


}
