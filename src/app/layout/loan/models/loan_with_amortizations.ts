import { Amortization } from './amortization';

export class LoanWithAmortizations {
  id: number;
  principal: number;
  interestRatePeriod: number;
  periodNumbers: number;
  paymentAgreed: number;
  status: string;
  amortizations: Amortization[];
}
