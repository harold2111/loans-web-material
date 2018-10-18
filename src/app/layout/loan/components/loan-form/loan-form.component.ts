import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { LoanService } from '../../services/loan.service';
import { Balance } from '../../models/balance';
import { Loan } from '../../models/loan';

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
  private balanceModel: Balance[] = [];

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
    this.loanService.simulateLoan(this.loanModel).subscribe((result: Balance[]) => {
      this.balanceModel = result;
    });
  }


}
