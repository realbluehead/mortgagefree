class Mortgage {
    private _name: String;
    private _startDate: Date;
    private _principal: number;
    private _interestRate: number;
    private _duration: number; // in months
    // calculated
    private _endDate: Date;
    private _monthlyAmount: number;
    private _numberOfPayments: number;
    private _totalInterests: number;
    private _totalCost: number;
    private _totalInterestRate: number;


    public get name(): String {
          return this._name;
     }

     public set name(value: String) {
          this._name = value;
     }

     public get startDate(): Date {
          return this._startDate;
     }

     public set startDate(value: Date) {
          this._startDate = value;
     }

     public get principal(): number {
          return this._principal;
     }

     public set principal(value: number) {
          this._principal = value;
     }

     public get interestRate(): number {
          return this._interestRate;
     }

     public set interestRate(value: number) {
          this._interestRate = value;
     }

     public get duration(): number {
          return this._duration;
     }

     public set duration(value: number) {
          this._duration = value;
     }

     public get endDate(): Date {
          return this._endDate;
     }

     public set endDate(value: Date) {
          this._endDate = value;
     }

     public get monthlyAmount(): number {
          return this._monthlyAmount;
     }

     public set monthlyAmount(value: number) {
          this._monthlyAmount = value;
     }

     public get numberOfPayments(): number {
          return this._numberOfPayments;
     }

     public set numberOfPayments(value: number) {
          this._numberOfPayments = value;
     }

     public get totalInterests(): number {
          return this._totalInterests;
     }

     public set totalInterests(value: number) {
          this._totalInterests = value;
     }

     public get totalCost(): number {
          return this._totalCost;
     }

     public set totalCost(value: number) {
          this._totalCost = value;
     }

     public get totalInterestRate(): number {
          return this._totalInterestRate;
     }

     public set totalInterestRate(value: number) {
          this._totalInterestRate = value;
     }
};
