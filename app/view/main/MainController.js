/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DocUI.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    newDoc() {
		var me = this;
		var win = Ext.create('Ext.Window', {
			extend: 'Ext.window.Window',
			title: 'Add Doc',
			iconCls: 'x-fa fa-plus',
			modal: true,
			items: [{
				xtype: 'docform'
			}]
		});
	}

});
