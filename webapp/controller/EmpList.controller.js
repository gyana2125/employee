sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("emp.employeelookup.controller.EmpList", {
		/**
		 *@memberOf emp.employeelookup.controller.EmpList
		 */
		detail: function (oEvent) {
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("emp").getPath();
			 sap.ui.core.UIComponent.getRouterFor(this).navTo("details",{
				UserId : oCtx.substr(10)
			});
		}
	
	});
});