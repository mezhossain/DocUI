Ext.define('DocUI.view.doc.Doc', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'docs',
    id: 'docgrid',
    title: 'Docs',
    controller: 'docs',
    viewModel: { type: 'docs' },
    bind: { store: '{Docs}', selection: '{selectedDoc}' },
    scrollable: true,

    columns: [{
        dataIndex: 'docId',
        text: 'Doc ID',
    }, { 
        dataIndex: 'docVer',
        text: 'Doc Version' 
    }, {
        dataIndex: 'supplierNumber',
        text: 'Supplier Number'
    }, {  
        dataIndex: 'deliveryNoteNo',
        text: 'Delivery Note No.'
    }, {
        dataIndex: 'receiptNo',
        text: 'Receipt No.'
    }, {
        dataIndex: 'documentNumber',
        text: 'Document Number'
    }, {
        dataIndex: 'documentDate',
        text: 'Document Date'
    }, {
        dataIndex: 'recipientOfInvoice',
        text: 'Recipient of Invoice',
    }, {
        dataIndex: 'vatNumber',
        text: 'VAT Number'
    }, {
        dataIndex: 'invoiceNumber',
        text: 'Invoice Number', 
    }, {
        dataIndex: 'despatchDate',
        text: 'Despatch Date',
    }, {
        dataIndex: 'currency',
        text: 'Currency', 
    }, {
        dataIndex: 'accountNumber',
        text: 'Account Number',
    }, {
        dataIndex: 'voucherNumber',
        text: 'Voucher Number',
    }, {
        dataIndex: 'faxNumber',
        text: 'Fax Number', 
    }, {
        dataIndex: 'associationNumber',
        text: 'Association Number',
    }, {
        dataIndex: 'companyAddress',
        text: 'Company Address',
    }, {
        dataIndex: 'invoiceTo',
        text: 'Invoice To',
    }, {
        dataIndex: 'deliverTo',
        text: 'Deliver To',
    }, {
        dataIndex: 'orderId',
        text: 'Order ID',
    }, {
        dataIndex: 'deliveryNote',
        text: 'Delivery Note', 
    }, {
        dataIndex: 'deliveryDetails',
        text: 'Delivery Details',
    }, {
        dataIndex: 'paymentDetails',
        text: 'Payment Details',
    }, {
        dataIndex: 'vat',
        text: 'VAT'
    }, {
        dataIndex: 'vatRate',
        text: 'VAT Rate' 
    }, {
        dataIndex: 'vatPayable',
        text: 'VAT Payable'
    }, {
        dataIndex: 'invoiceAmount',
        text: 'Invoice Amount'
    }, {
        dataIndex: 'totalBeforeVat',
        text: 'Total Before VAT'
    }, {
        dataIndex: 'totalAmountDue',
        text: 'Total Amount Due',
    }, {
        dataIndex: 'discount',
        text: 'Discount',
    }, {
        dataIndex: 'netInvoiceTotal',
        text: 'netInvoiceTotal'
    }, {
        dataIndex: 'modifiedOn',
        text: 'Modified On',
    }],


    listeners: {
        itemdblclick:  'onDoubleClick'
    }
});