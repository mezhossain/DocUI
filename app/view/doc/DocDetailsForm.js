Ext.define('DocUI.view.doc.DocDetailsForm', {
    extend: 'Ext.window.Window',
    title: 'Add Doc Details',
    iconCls: 'x-fa fa-plus',
    controller: 'docs',
    viewModel: { type: 'docs' },
    referenceHolder: true,
    modal: true,
    items: [{
        xtype: 'form',
        layout: 'form',
        scrollable: true,
        height: 537,
        width: 450,
        resizable: false,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Doc Details ID',
            name: 'docDetailsId',
            reference: 'docDetailsId',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Doc Details Version',
            value: 0,
            name: 'docDetailsVer',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Doc ID',
            value: 0,
            name: 'docId',
            reference: 'docId',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Part No.',
            name: 'partNo',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Item Quantity',
            name: 'itemQty',
            reference: 'itemQty',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Reference No.',
            name: 'referenceNo',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Item Name',
            name: 'itemName',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Item Code',
            name: 'itemCode',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Rent',
            name: 'rent',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Pack',
            name: 'pack',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textarea',
            fieldLabel: 'Item Description',
            name: 'itemDescription',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textarea',
            fieldLabel: 'Property Address',
            name: 'propertyAddress',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Trade',
            name: 'trade',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Unit Price',
            name: 'unitPrice',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Total Price',
            name: 'totalPrice',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Value of Goods',
            name: 'valueOfGoods',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Net Value',
            name: 'netValue',
            labelStyle: 'font-weight:bold'
        },	{
            xtype: 'textfield',
            fieldLabel: 'Insurance Premium',
            name: 'insurancePremium',
            labelStyle: 'font-weight:bold'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Modified On',
            name: 'modifiedOn',
            reference: 'modifiedOn',
            labelStyle: 'font-weight:bold'
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: [{
            xtype: 'button',
            text: 'Cancel',
            handler: function () {
                Ext.WindowManager.getActive().close();
            }
        },'->',{
            xtype: 'button',
            text: 'Add',
            listeners: {
                click: function () {
                    docdetailskey = this.up('window').down('textfield[name=docDetailsId]').getValue();
                    docdetailsver = this.up('window').down('textfield[name=docDetailsVer]').getValue();

                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dt = date+' '+time;
                    var dateTime = Date.parse(dt);
                    var dttmod = dateTime;

                    var dockey = this.up('window').down('textfield[name=docId]').getValue();
                    var part = this.up('window').down('textfield[name=partNo]').getValue();
                    var itemqty = this.up('window').down('textfield[name=itemQty]').getValue();
                    var reference = this.up('window').down('textfield[name=referenceNo]').getValue();
                    var txitemname = this.up('window').down('textfield[name=itemName]').getValue();
                    var txitemcode = this.up('window').down('textfield[name=itemCode]').getValue();
                    var txrent = this.up('window').down('textfield[name=rent]').getValue();
                    var txpack = this.up('window').down('textfield[name=pack]').getValue();
                    var txitemdesc = this.up('window').down('textfield[name=itemDescription]').getValue();
                    var txprop = this.up('window').down('textfield[name=propertyAddress]').getValue();
                    var flttrade = this.up('window').down('textfield[name=trade]').getValue();
                    var fltunit = this.up('window').down('textfield[name=unitPrice]').getValue();
                    var flttotal = this.up('window').down('textfield[name=totalPrice]').getValue();
                    var fltnet = this.up('window').down('textfield[name=netValue]').getValue();
                    var fltvalue = this.up('window').down('textfield[name=valueOfGoods]').getValue();
                    var fltinsurance = this.up('window').down('textfield[name=insurancePremium]').getValue();

                    var addDocDetails = {
                        docDetailsId: docdetailskey
                        ,docDetailsVer: docdetailsver
                        ,modifiedOn: dttmod
                        ,docId: dockey
                        ,partNo: part
                        ,itemQty: itemqty
                        ,referenceNo: reference
                        ,itemName: txitemname
                        ,itemCode: txitemcode
                        ,rent: txrent
                        ,pack: txpack
                        ,itemDescription: txitemdesc
                        ,propertyAddress: txprop
                        ,trade: flttrade
                        ,unitPrice: fltunit
                        ,totalPrice: flttotal
                        ,netValue: fltnet
                        ,valueOfGoods: fltvalue
                        ,insurancePremium: fltinsurance
                    };

                    var detailsStore = Ext.data.StoreManager.lookup('details');
                    var currentstore = Ext.data.StoreManager.lookup('currentdetails');
                    detailsStore.add(addDocDetails);
                    currentstore.add(addDocDetails);
                    detailsStore.load();

                    var grid = Ext.getCmp('docdetailsgrid');
                    grid.reconfigure(currentstore)

                    Ext.WindowManager.getActive().close();
                }
            }
        }]
    }]
});