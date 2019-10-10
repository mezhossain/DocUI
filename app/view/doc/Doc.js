Ext.define('DocUI.view.doc.Doc', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'docs',

    title: 'Docs',
    controller: 'docs',
    viewModel: { type: 'docs' },
    bind: { store: '{Docs}', selection: '{selectedDoc}' },
    scrollable: true,

    // columns: [{
    //     dataIndex: 'id_doc_key',
    //     text: 'id_doc_key',
    // }, { 
    //     dataIndex: 'id_doc_ver',
    //     text: 'id_doc_ver' 
    // }, {
    //     dataIndex: 'is_active',
    //     text: 'is_active'
    // }, {  
    //     dataIndex: 'id_env_key',
    //     text: 'id_env_key'
    // }, {
    //     dataIndex: 'id_user_mod_key',
    //     text: 'id_user_mod_key'
    // }, {
    //     dataIndex: 'dtt_mod',
    //     text: 'dtt_mod'
    // }, {
    //     dataIndex: 'id_event_key',
    //     text: 'id_event_key'
    // }, {
    //     dataIndex: 'id_state_key',
    //     text: 'id_state_key',
    // }, {
    //     dataIndex: 'id_action_key',
    //     text: 'id_action_key'
    // }, {
    //     dataIndex: 'supplier_number',
    //     text: 'supplier_number', 
    // }, {
    //     dataIndex: 'delivery_note_no',
    //     text: 'delivery_note_no',
    // }, {
    //     dataIndex: 'receipt_number',
    //     text: 'receipt_number',
    // }, {
    //     dataIndex: 'document_number',
    //     text: 'document_number'
    // }, {
    //     dataIndex: 'dt_document',
    //     text: 'dt_document',
    // }, {
    //     dataIndex: 'recipient_of_invoice',
    //     text: 'recipient_of_invoice',
    // }, {
    //     dataIndex: 'vat_number',
    //     text: 'vat_number',
    // }, {
    //     dataIndex: 'dt_despatch',
    //     text: 'dt_despatch',
    // }, {
    //     dataIndex: 'tx_invoice_number',
    //     text: 'tx_invoice_number',
    // }, {
    //     dataIndex: 'tx_currency',
    //     text: 'tx_currency', 
    // }, {
    //     dataIndex: 'tx_account_number',
    //     text: 'tx_account_number',
    // }, {
    //     dataIndex: 'tx_voucher_number',
    //     text: 'tx_voucher_number',
    // }, {
    //     dataIndex: 'tx_fax_number',
    //     text: 'tx_fax_number', 
    // }, {
    //     dataIndex: 'tx_association_number',
    //     text: 'tx_association_number',
    // }, {
    //     dataIndex: 'tx_company_address',
    //     text: 'tx_company_address',
    // }, {
    //     dataIndex: 'tx_invoice_to',
    //     text: 'tx_invoice_to',
    // }, {
    //     dataIndex: 'tx_deliver_to',
    //     text: 'tx_deliver_to',
    // }, {
    //     dataIndex: 'tx_order_id',
    //     text: 'tx_order_id',
    // }, {
    //     dataIndexe: 'tx_delivery_note',
    //     text: 'tx_delivery_note', 
    // }, {
    //     dataIndex: 'tx_delivery_details',
    //     text: 'tx_delivery_details',
    // }, {
    //     dataIndex: 'tx_payment_details',
    //     text: 'tx_payment_details',
    // }, {
    //     dataIndex: 'flt_vat',
    //     text: 'flt_vat'
    // }, {
    //     dataIndex: 'flt_vat_rate',
    //     text: 'flt_vat_rate' 
    // }, {
    //     dataIndex: 'flt_vat_payable',
    //     text: 'flt_vat_payable'
    // }, {
    //     dataIndex: 'flt_invoice_amount',
    //     text: 'flt_invoice_amount'
    // }, {
    //     dataIndex: 'flt_total_before_vat',
    //     text: 'flt_total_before_vat'
    // }, {
    //     dataIndex: 'flt_total_amount_due',
    //     text: 'flt_total_amount_due',
    // }, {
    //     dataIndex: 'flt_discount',
    //     text: 'flt_discount',
    // }, {
    //     dataIndex: 'flt_net_invoice_total',
    //     text: 'flt_net_invoice_total'
    // }],

    columns: [{
        dataIndex: 'docId',
        text: 'Doc Id',
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