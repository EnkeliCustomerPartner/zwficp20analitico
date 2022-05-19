/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["zwficp20analitico/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
