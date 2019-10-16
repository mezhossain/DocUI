Ext.define('DocUI.view.doc.DocForm', {
    extend: 'Ext.form.Panel',
    xtype: 'docform',
    layout: 'column',
    controller: 'docs',
    viewModel: { type: 'docs' },
    referenceHolder: true,
    id: 'docform',
    scrollable: true,
    width: 1190,
    height: 300,
    // padding: 15,
    fieldDefaults: {
        labelAlign: 'top',
        columnWidth: .25,
        padding: 5
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Doc ID',
        name: 'docId',
        reference: 'docId',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Doc Version',
        name: 'docVer',
        reference: 'docVer',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Modified On',
        name: 'modifiedOn',
        reference: 'modifiedOn',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Supplier Number',
        name: 'supplierNumber',
        reference: 'supplierNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Delivery Note No.',
        name: 'deliveryNoteNo',
        reference: 'deliveryNoteNo',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Receipt Number',
        name: 'receiptNo',
        reference: 'receiptNo',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Document Number',
        name: 'documentNumber',
        reference: 'documentNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'datefield',
        fieldLabel: 'Document Date',
        name: 'documentDate',
        reference: 'documentDate',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Recipient Of Invoice',
        name: 'recipientOfInvoice',
        reference: 'recipientOfInvoice',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'VAT Number',
        name: 'vatNumber',
        reference: 'vatNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'datefield',
        fieldLabel: 'Despatch Date',
        name: 'despatchDate',
        reference: 'despatchDate',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Invoice Number',
        name: 'invoiceNumber',
        reference: 'invoiceNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Currency',
        name: 'currency',
        reference: 'currency',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Account Number',
        name: 'accountNumber',
        reference: 'accountNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Voucher Number',
        name: 'voucherNumber',
        reference: 'voucherNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Fax Number',
        name: 'faxNumber',
        reference: 'faxNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Association Number',
        name: 'associationNumber',
        refence: 'associationNumber',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textarea',
        fieldLabel: 'Company Address',
        name: 'companyAddress',
        reference: 'companyAddress',
        labelStyle: 'font-weight:bold',
        height: 90
    },	{
        xtype: 'textarea',
        fieldLabel: 'Invoice To',
        name: 'invoiceTo',
        reference: 'invoiceTo',
        labelStyle: 'font-weight:bold',
        height: 90
    },	{
        xtype: 'textarea',
        fieldLabel: 'Deliver To',
        name: 'deliverTo',
        reference: 'deliverTo',
        labelStyle: 'font-weight:bold',
        height: 90
    },	{
        xtype: 'textfield',
        fieldLabel: 'Order ID',
        name: 'orderId',
        reference: 'orderId',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Delivery Note',
        name: 'deliveryNote',
        reference: 'deliveryNote',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Delivery Details',
        name: 'deliveryDetails',
        reference: 'deliveryDetails',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Payment Details',
        name: 'paymentDetails',
        reference: 'paymentDetails',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'VAT',
        name: 'vat',
        reference: 'vat',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'VAT Rate',
        name: 'vatRate',
        reference: 'vatRate',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'VAT Payable',
        name: 'vatPayable',
        reference: 'vatPayable',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Invoice Amount',
        name: 'invoiceAmount',
        reference: 'invoiceAmount',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Total Before VAT',
        name: 'totalBeforeVat',
        reference: 'totalBeforeVat',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Total Amount Due',
        name: 'totalAmountDue',
        reference: 'totalAmountDue',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Discount',
        name: 'discount',
        reference: 'discount',
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'Net Invoice Total',
        name: 'netInvoiceTotal',
        reference: 'netInvoiceTotal',
        labelStyle: 'font-weight:bold'
    }]
});