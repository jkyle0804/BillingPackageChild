function onOpen(e) {
  var warning = SpreadsheetApp.getUi();
  warning.alert('This invoice file is part of a test set. If you encounter problems please notify your admin.')
  BillingPackage.onOpen(e);
} 
function showSidebar() {
  BillingPackage.showSidebar();
}
function routeProcess(){
  BillingPackage.routeProcess();
}
function approvalProcess( optSSId, optSheetId ){
  BillingPackage.approvalProcess(optSSId, optSheetId);
} 
function userInput() {
  BillingPackage.userInput();
}
function logData(billmonth, billyear, adjustment) {
  BillingPackage.logData(billmonth, billyear, adjustment);
}
function savePDF( optSSId, optSheetId ) {
  BillingPackage.savePDF(optSSId, optSheetId);
}
function moveBillingLogLineItem() {
  BillingPackage.moveBillingLogLineItem();
}
function mergeTransactionData() {
  BillingPackage.mergeTransactionData();
}
function importCustomerData() {
  BillingPackage.importCustomerData();
}
function searchNumber() {
  BillingPackage.searchNumber();
}
function specialSalesData() {
  BillingPackage.specialSalesData();
}
function refreshCustomerData() {
  BillingPackage.refreshCustomerData();
}
function createCancellation(){
  BillingPackage.createCancellation();
}
function CopyTemplate() {
  BillingPackage.CopyTemplate();
}
function requirePassword(){
  BillingPackage.requirePassword();
}