/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"ATMO/ATMO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ATMO/ATMO/test/integration/pages/MainView",
	"ATMO/ATMO/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ATMO.ATMO.view.",
		autoWait: true
	});
});