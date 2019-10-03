import { $, element, by, browser, ExpectedConditions, ElementFinder } from "protractor";

export class VolPartsEntryPage{

    public nameSearchField = $("input#txtName");

    public customerSearchButton = $("button#btnsearchCust");

    public selectCustomerButton = $("button#btnselectCust");

    public searchResultsTable = $("div#gridcustomerSearchGrid");

    public searchResultsRowSelector = "div.ui-grid-cell-contents.ng-binding.ng-scope";

    public selectVehicle = $("p.form-control-static.ng-binding)";

    public selectVehicleButton = $("btn.btn-primary.ng-binding");

    public customerContactPage = "h3.modal-title.modal-title-customer-contact.f32light-bl.ng-binding";

    public selectContinueButton = $("button#btnContinue.btn.btn-primary.ng-binding");

    public partsEntryScreen = "div.ui-grid-cell-contents.ng-binding.ng-scope.ui-grid-cell-focus";
}