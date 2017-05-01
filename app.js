(function() {
  'use strict';

  angular
    .module('app', []);
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MortgageController', MortgageController);

  MortgageController.$inject = [];

  function MortgageController() {
    var vm = this;
    vm.loanBalance = 0;
    vm.interestRate = 0;
    vm.loanTermInYears = 0;

    vm.calculateMortgage = function() {
      // monthly interest rate
      var monthlyInterestRate = (vm.interestRate / 100) / vm.period;

      // number of payments
      var numberOfPayments = vm.loanTermInYears * vm.period;

      // compounded interest rate
      var compoundedInterestRate = Math.pow((1 + vm.interestRate), numberOfPayments);

      // interest quotient
      var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

      // final calculation
      var monthlyPayment = vm.loanBalance * interestQuotient;
      vm.amount = monthlyPayment.toFixed(2);
    }
  }
})();
