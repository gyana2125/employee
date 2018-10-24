sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("emp.employeelookup.controller.NotFound", {

	 onInit: function () {
	 /*	var oRouter, oTarget;
			oRouter = this.getRouter();
			oTarget = oRouter.getTarget("notFound");
			oTarget.attachDisplay(function (oEvent) {
				this._oData = oEvent.getParameter("data"); //store the data
			}, this);*/
      },
      	onNavBack: function () {
			
				window.history.go(-1);
		
		}
   });
});