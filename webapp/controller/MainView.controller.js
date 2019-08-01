sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ATMO.ATMO.controller.MainView", {
		onInit: function () {
			this._oModel = this.getOwnerComponent().getModel();
		}
	});
});