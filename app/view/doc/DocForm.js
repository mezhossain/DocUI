Ext.define('DocUI.view.doc.DocForm', {
    extend: 'Ext.form.Panel',
    xtype: 'docform',
    layout: 'form',
    scrollable: true,
    height: 537,
    width: 450,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'id_doc_key',
        name: 'id_doc_key',
        reference: 'id_doc_key',
        // value: record.data['id_doc_key'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'id_doc_ver',
        name: 'id_doc_ver',
        reference: 'id_doc_ver',
        // value: record.data['id_doc_ver'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'is_active',
        name: 'is_active',
        reference: 'is_active',
        // value: record.data['is_active'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'id_env_key',
        name: 'id_env_key',
        reference: 'id_env_key',
        // value: record.data['id_env_key'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'id_user_mod_key',
        name: 'id_user_mod_key',
        reference: 'id_user_mod_key',
        // value: record.data['id_user_mod_key'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'dtt_mod',
        name: 'dtt_mod',
        reference: 'dtt_mod',
        // value: record.data['dtt_mod'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'id_event_key',
        name: 'id_event_key',
        reference: 'id_event_key',
        // value: record.data['id_event_key'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'id_state_key',
        name: 'id_state_key',
        reference: 'id_state_key',
        // value: record.data['id_state_key'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'id_action_key',
        name: 'id_action_key',
        reference: 'id_action_key',
        // value: record.data['id_action_key'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'supplier_number',
        name: 'supplier_number',
        reference: 'supplier_number',
        // value: record.data['supplier_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'delivery_note_no',
        name: 'delivery_note_no',
        reference: 'delivery_note_no',
        // value: record.data['delivery_note_no'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'receipt_number',
        name: 'receipt_number',
        reference: 'receipt_number',
        // value: record.data['receipt_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'document_number',
        name: 'document_number',
        reference: 'document_number',
        // value: record.data['document_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'dt_document',
        name: 'dt_document',
        reference: 'dt_document',
        // value: record.data['dt_document'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'recipient_of_invoice',
        name: 'recipient_of_invoice',
        reference: 'recipient_of_invoice',
        // value: record.data['recipient_of_invoice'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'vat_number',
        name: 'vat_number',
        reference: 'vat_number',
        // value: record.data['vat_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'dt_despatch',
        name: 'dt_despatch',
        reference: 'dt_despatch',
        // value: record.data['dt_despatch'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_invoice_number',
        name: 'tx_invoice_number',
        reference: 'tx_invoice_number',
        // value: record.data['tx_invoice_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_currency',
        name: 'tx_currency',
        reference: 'tx_currency',
        // value: record.data['tx_currency'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_account_number',
        name: 'tx_account_number',
        reference: 'tx_account_number',
        // value: record.data['tx_account_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_voucher_number',
        name: 'tx_voucher_number',
        reference: 'tx_voucher_number',
        // value: record.data['tx_voucher_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_fax_number',
        name: 'tx_fax_number',
        reference: 'tx_fax_number',
        //value: record.data['tx_fax_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_association_number',
        name: 'tx_association_number',
        reference: 'tx_association_number',
        // value: record.data['tx_association_number'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textarea',
        fieldLabel: 'tx_company_address',
        name: 'tx_company_address',
        reference: 'tx_company_address',
        // value: record.data['tx_company_address'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textarea',
        fieldLabel: 'tx_invoice_to',
        name: 'tx_invoice_to',
        reference: 'tx_invoice_to',
        // value: record.data['tx_invoice_to'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textarea',
        fieldLabel: 'tx_deliver_to',
        name: 'tx_deliver_to',
        reference: 'tx_deliver_to',
        // value: record.data['tx_deliver_to'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_order_id',
        name: 'tx_order_id',
        reference: 'tx_order_id',
        // value: record.data['tx_order_id'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_delivery_note',
        name: 'tx_delivery_note',
        reference: 'tx_delivery_note',
        // value: record.data['tx_delivery_note'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_delivery_details',
        name: 'tx_delivery_details',
        reference: 'tx_delivery_details',
        // value: record.data['tx_delivery_details'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'tx_payment_details',
        name: 'tx_payment_details',
        reference: 'tx_payment_details',
        // value: record.data['tx_payment_details'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_vat',
        name: 'flt_vat',
        reference: 'flt_vat',
        // value: record.data['flt_vat'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_vat_rate',
        name: 'flt_vat_rate',
        reference: 'flt_vat_rate',
        // value: record.data['flt_vat_rate'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_vat_payable',
        name: 'flt_vat_payable',
        reference: 'flt_vat_payable',
        // value: record.data['flt_vat_payable'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_invoice_amount',
        name: 'flt_invoice_amount',
        reference: 'flt_invoice_amount',
        // value: record.data['flt_invoice_amount'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_total_before_vat',
        name: 'flt_total_before_vat',
        reference: 'flt_total_before_vat',
        // value: record.data['flt_total_before_vat'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_total_amount_due',
        name: 'flt_total_amount_due',
        reference: 'flt_total_amount_due',
        // value: record.data['flt_total_amount_due'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_discount',
        name: 'flt_discount',
        reference: 'flt_discount',
        // value: record.data['flt_discount'],
        labelStyle: 'font-weight:bold'
    },	{
        xtype: 'textfield',
        fieldLabel: 'flt_net_invoice_total',
        name: 'flt_net_invoice_total',
        reference: 'flt_net_invoice_total',
        // value: record.data['flt_net_invoice_total'],
        labelStyle: 'font-weight:bold'
    }]
});