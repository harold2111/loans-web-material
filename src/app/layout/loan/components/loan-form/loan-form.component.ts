import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { LoanService } from '../../services/loan.service';
import { Balance } from '../../models/balance';
import { Loan } from '../../models/loan';
import { Amortization } from '../../models/amortization';
import { LoanWithAmortizations } from '../../models/loan_with_amortizations';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  displayedColumns = ['period', 'paymentDate', 'initialPrincipal', 'payment',
                      'interestRatePeriod', 'toInterest', 'toPrincipal', 'finalPrincipal'];

  private isEditMode = false;

  private selectedLoanId: number;

  private loanModel: Loan = new Loan();
  private amortizationsModel: Amortization[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private loanService: LoanService
  ) { }

  ngOnInit() {
    this.getSelectedIDParameter();
  }

  private getSelectedIDParameter() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id != null) {
        this.isEditMode = true;
        this.selectedLoanId = +id;
      }
    });
  }

  private onSimulate() {
    this.loanService.simulateLoan(this.loanModel).subscribe((result: LoanWithAmortizations) => {
      this.amortizationsModel = result.amortizations;
      console.log(this.amortizationsModel)
    });
  }


}
