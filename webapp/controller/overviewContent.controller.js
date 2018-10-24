sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Sorter"
], function (Controller, Filter, FilterOperator, Sorter) {
	"use strict";

	return Controller.extend("emp.employeelookup.controller.overviewContent", {
		onInit: function () {
			this._oTable = this.byId("employeesTable");
			this._sSearchQuery = null;
		},

onSearchEmployeesTable : function (oEvent) {
			var sQuery = oEvent.getSource().getValue();
			this._applySearchFilter( sQuery );
		},
		_applySearchFilter : function (sSearchQuery) {
			var aFilters, oFilter, oBinding;
			// first check if we already have this search value
			if (this._sSearchQuery === sSearchQuery) {
				return;
			}
			this._sSearchQuery = sSearchQuery;
			this.byId("searchField").setValue(sSearchQuery);
			// add filters for search
			aFilters = [];
			if (sSearchQuery && sSearchQuery.length > 0) {
				aFilters.push(new Filter("firstName", FilterOperator.Contains, sSearchQuery));
				aFilters.push(new Filter("lastName", FilterOperator.Contains, sSearchQuery));
				oFilter = new Filter({ filters: aFilters, and: false });  // OR filter
			} else {
				oFilter = null;
			}
			// update list binding
			oBinding = this._oTable.getBinding("items");
			oBinding.filter(oFilter, "Application");
		}
		,
		onItemPressed : function (oEvent) {
		
			var oItem = oEvent.getParameter("listItem");
			var	oCtx = oItem.getBindingContext("emp").getPath();
			 sap.ui.core.UIComponent.getRouterFor(this).navTo("details",{
				UserId : oCtx.substr(10)
			});
			
		}

	});

});