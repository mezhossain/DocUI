Ext.define('DocUI.view.doc.DocDetails', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'details',
    controller: 'docs',
    viewModel: { type: 'docs' },
    bind: { store: '{CurrentDetails}', selection: '{selectedDetails}' },
    scrollable: true,
    height: 527,
	width: 743,
    columns: [{
        dataIndex: 'docDetailsId',
        text: 'Doc Details ID',
    }, {
        dataIndex: 'docDetailsVer',
        text: 'Doc Details Version',
    }, {
        dataIndex: 'docId',
        text: 'Doc ID', 
    }, {
        dataIndex: 'partNo',
        text: 'Part No.',
    }, {
        dataIndex: 'itemQty',
        text: 'Item Quantity',
    }, {
        dataIndex: 'referenceNo',
        text: 'Reference No.'
    }, {
        dataIndex: 'itemName',
        text: 'Item Name',
    }, {
        dataIndex: 'itemCode',
        text: 'Item Code',
    }, {
        dataIndex: 'rent',
        text: 'Rent',
    }, {
        dataIndex: 'pack',
        text: 'Pack',
    }, {
        dataIndex: 'itemDescription',
        text: 'Item Description',
    }, {
        dataIndex: 'propertyAddress',
        text: 'Property Address', 
    }, {
        dataIndex: 'trade',
        text: 'Trade',
    }, {
        dataIndex: 'unitPrice',
        text: 'Unit Price',
    }, {
        dataIndex: 'totalPrice',
        text: 'Total Price',
    }, {
        dataIndex: 'netValue',
        text: 'Net Value', 
    }, {
        dataIndex: 'valueOfGoods',
        text: 'Value of Goods',
    }, {
        dataIndex: 'insurancePremium',
        text: 'Insurance Premium',
    }, {
        dataIndex: 'modifiedOn',
        text: 'Modified On',
    }],

    listeners: {
        itemdblclick: 'updateDocDetails'
    }
});