Ext.define('DocUI.view.doc.DocWindow', {
    extend: 'Ext.window.Window',
    xtype: 'docupdate',
    title: 'Update Doc',
    iconCls: 'x-fa fa-edit',
    controller: 'docs',
    viewModel: { type: 'docs' },
    width: 1200,
    height: 625,
    modal: true,
    resizable: false,
    items:[{
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'docform',
        }, {
            xtype: 'details',
            layout: 'fit'
        }],    
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: [{
            xtype: 'button',
            text: 'Cancel',
            handler: 'onWindowClose'
        }, '->' ,{
            xtype: 'button',
            text: 'Update',
            handler: 'onUpdate'
        }]
    }]
});