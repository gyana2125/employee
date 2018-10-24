sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("emp.employeelookup.controller.details", {
	
	onInit: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("details").attachMatched(this._onRouteMatched, this);

		},
		_onRouteMatched : function (oEvent) {
			
		var	oArgs = oEvent.getParameter("arguments");
		var	oView = this.getView();
	//	    oView.byId("inp").setValue(this.getOwnerComponent().getModel("emp").getData().employee[oArgs.UserId].firstName);
			oView.setModel(this.getOwnerComponent().getModel("emp"));
		oView.bindElement("/employee/"+oArgs.UserId);
		
		},
		onNavBack :function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("EmpList");
		}
	
		
		

	});
});