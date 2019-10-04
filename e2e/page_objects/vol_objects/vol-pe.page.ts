import { $, element, by, browser, ExpectedConditions, ElementFinder } from "protractor";

export class VolPartsEntryPage{

    public nameSearchField = $("input#txtName");

    public customerSearchButton = $("button#btnsearchCust");

    public selectCustomerButton = $("button#btnselectCust");

    public searchResultsTable = $("div#gridcustomerSearchGrid");

    public searchResultsRowSelector = "div.ui-grid-cell-contents.ng-binding.ng-scope";

    public searchResultsVehicleTable = $("div#gridvehicleSearchGrid");

    public searchResultsVehicleRowSelector = $("div#gridvehicleSearchGrid");

    public searchVehicleSelectFromGrid = $("p.form-control-static.ng-binding");

    public selectVehicleButton = $("button#btnSelect.btn.btn-primary.ng-binding");

    public customerContactContinueButton = $("button#btnContinue.btn.btn-primary.ng-binding");

}