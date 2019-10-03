Ext.define('DocUI.view.doc.DocController', {
    extend: 'Ext.app.ViewController',

	alias: 'controller.docs',

	onDoubleClick: function (dataview, record, item, index, e) {
		var docKey = record.data['id_doc_key'];
		console.log(docKey);
		var docStore = Ext.data.StoreManager.lookup('docs');
		var doc = docStore.findRecord('id_doc_key',docKey);
		var detailsStore = Ext.data.StoreManager.lookup('details');
		var docdetails = detailsStore.findRecord('id_doc_key',docKey);
		console.log(detailsStore);
		var docdetailsgroup = detailsStore.queryRecords('id_doc_key',docKey);
		console.log(docdetailsgroup);
		var dets = [];
		var currentstore = Ext.data.StoreManager.lookup('currentdetails');
		for (var i = 0; i < docdetailsgroup.length; i++){
			dets.push(docdetailsgroup[i].data);
		}
		currentstore.loadData(dets);
		console.log(dets);
		var updateForm = Ext.create('Ext.Window', {
			extend: 'Ext.window.Window',
			title: 'Update Doc',
			iconCls: 'x-fa fa-edit',
			width: 1200,
			height: 625,
			modal: true,
			resizable: false,
			items:[{
				xtype: 'panel',
				layout: {
					type: 'vbox'
				},
				items: [{
					xtype: 'form',
					layout: 'column',
					fieldDefaults: {
						labelAlign: 'top',
						columnWidth: .25,
						padding: 5
					},
					bodyPadding: '20',
					scrollable: true,
					// height: 537,
					//width: 450,
					width: 1190,
					height: 350,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'id_doc_key',
						name: 'id_doc_key',
						value: record.data['id_doc_key'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'id_doc_ver',
						name: 'id_doc_ver',
						value: record.data['id_doc_ver'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'is_active',
						name: 'is_active',
						value: record.data['is_active'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'id_env_key',
						name: 'id_env_key',
						value: record.data['id_env_key'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'id_user_mod_key',
						name: 'id_user_mod_key',
						value: record.data['id_user_mod_key'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'dtt_mod',
						name: 'dtt_mod',
						value: record.data['dtt_mod'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'id_event_key',
						name: 'id_event_key',
						value: record.data['id_event_key'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'id_state_key',
						name: 'id_state_key',
						value: record.data['id_state_key'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'id_action_key',
						name: 'id_action_key',
						value: record.data['id_action_key'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'supplier_number',
						name: 'supplier_number',
						value: record.data['supplier_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'delivery_note_no',
						name: 'delivery_note_no',
						value: record.data['delivery_note_no'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'receipt_number',
						name: 'receipt_number',
						value: record.data['receipt_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'document_number',
						name: 'document_number',
						value: record.data['document_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'dt_document',
						name: 'dt_document',
						value: record.data['dt_document'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'recipient_of_invoice',
						name: 'recipient_of_invoice',
						value: record.data['recipient_of_invoice'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'vat_number',
						name: 'vat_number',
						value: record.data['vat_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'dt_despatch',
						name: 'dt_despatch',
						value: record.data['dt_despatch'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_invoice_number',
						name: 'tx_invoice_number',
						value: record.data['tx_invoice_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_currency',
						name: 'tx_currency',
						value: record.data['tx_currency'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_account_number',
						name: 'tx_account_number',
						value: record.data['tx_account_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_voucher_number',
						name: 'tx_voucher_number',
						value: record.data['tx_voucher_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_fax_number',
						name: 'tx_fax_number',
						value: record.data['tx_fax_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_association_number',
						name: 'tx_association_number',
						value: record.data['tx_association_number'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_order_id',
						name: 'tx_order_id',
						value: record.data['tx_order_id'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textarea',
						fieldLabel: 'tx_company_address',
						name: 'tx_company_address',
						value: record.data['tx_company_address'],
						labelStyle: 'font-weight:bold',
						height: 90
					},	{
						xtype: 'textarea',
						fieldLabel: 'tx_invoice_to',
						name: 'tx_invoice_to',
						value: record.data['tx_invoice_to'],
						labelStyle: 'font-weight:bold',
						height: 90
					},	{
						xtype: 'textarea',
						fieldLabel: 'tx_deliver_to',
						name: 'tx_deliver_to',
						value: record.data['tx_deliver_to'],
						labelStyle: 'font-weight:bold',
						height: 90
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_delivery_note',
						name: 'tx_delivery_note',
						value: record.data['tx_delivery_note'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_delivery_details',
						name: 'tx_delivery_details',
						value: record.data['tx_delivery_details'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'tx_payment_details',
						name: 'tx_payment_details',
						value: record.data['tx_payment_details'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_vat',
						name: 'flt_vat',
						value: record.data['flt_vat'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_vat_rate',
						name: 'flt_vat_rate',
						value: record.data['flt_vat_rate'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_vat_payable',
						name: 'flt_vat_payable',
						value: record.data['flt_vat_payable'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_invoice_amount',
						name: 'flt_invoice_amount',
						value: record.data['flt_invoice_amount'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_total_before_vat',
						name: 'flt_total_before_vat',
						value: record.data['flt_total_before_vat'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_total_amount_due',
						name: 'flt_total_amount_due',
						value: record.data['flt_total_amount_due'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_discount',
						name: 'flt_discount',
						value: record.data['flt_discount'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'flt_net_invoice_total',
						name: 'flt_net_invoice_total',
						value: record.data['flt_net_invoice_total'],
						labelStyle: 'font-weight:bold'
					}]
				},	{
					xtype: 'grid',
					layout: 'fit',
					width: 1190,
					height: 185,
					controller: 'docs',
					viewModel: { type: 'docs' },
					store: currentstore,
					bind: { selection: '{selectedDetails}' },
					scrollable: true,
					columns: [{
						dataIndex: 'id_doc_details_ver',
						text: 'id_doc_details_ver',
					}, {
						dataIndex: 'is_active',
						text: 'is_active'
					}, {  
						dataIndex: 'id_env_key',
						text: 'id_env_key'
					}, {
						dataIndex: 'id_user_mod_key',
						text: 'id_user_mod_key'
					}, {
						dataIndex: 'id_user_mod_key',
						text: 'dtt_mod'
					}, {
						dataIndex: 'id_event_key',
						text: 'id_event_key'
					}, {
						dataIndex: 'id_state_key',
						text: 'id_state_key',
					}, {
						dataIndex: 'id_action_key',
						text: 'id_action_key'
					}, {
						dataIndex: 'id_doc_key',
						text: 'id_doc_key', 
					}, {
						dataIndex: 'part_no',
						text: 'part_no',
					}, {
						dataIndex: 'item_qty',
						text: 'item_qty',
					}, {
						dataIndex: 'reference_no',
						text: 'reference_no'
					}, {
						dataIndex: 'tx_item_name',
						text: 'tx_item_name',
					}, {
						dataIndex: 'tx_item_code',
						text: 'tx_item_code',
					}, {
						dataIndex: 'tx_rent',
						text: 'tx_rent',
					}, {
						dataIndex: 'tx_pack',
						text: 'tx_pack',
					}, {
						dataIndex: 'tx_item_description',
						text: 'tx_item_description',
					}, {
						dataIndex: 'tx_property_address',
						text: 'tx_property_address', 
					}, {
						dataIndex: 'flt_trade',
						text: 'flt_trade',
					}, {
						dataIndex: 'flt_total_price',
						text: 'flt_total_price',
					}, {
						dataIndex: 'flt_net_value',
						text: 'flt_net_value', 
					}, {
						dataIndex: 'flt_value_of_goods',
						text: 'flt_value_of_goods',
					}, {
						dataIndex: 'flt_insurance_premium',
						text: 'flt_insurance_premium',
					}],
				
					listeners: {
						itemdblclick: function (dataview, record, item, index, e) {
							var updateDocForm = Ext.create('Ext.Window', {
								extend: 'Ext.window.Window',
								title: 'Update Doc Details',
								iconCls: 'x-fa fa-edit',
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
										fieldLabel: 'id_doc_details_key',
										name: 'id_doc_details_key',
										value: record.data['id_doc_details_key'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'id_doc_details_ver',
										name: 'id_doc_details_ver',
										value: record.data['id_doc_details_ver'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'part_no',
										name: 'part_no',
										value: record.data['part_no'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'item_qty',
										name: 'item_qty',
										reference: 'itemqty',
										value: record.data['item_qty'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'reference_no',
										name: 'reference_no',
										value: record.data['reference_no'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'tx_item_name',
										name: 'tx_item_name',
										value: record.data['tx_item_name'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'tx_item_code',
										name: 'tx_item_code',
										value: record.data['tx_item_code'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'tx_rent',
										name: 'tx_rent',
										value: record.data['tx_rent'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'tx_pack',
										name: 'tx_pack',
										value: record.data['tx_pack'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'tx_item_description',
										name: 'tx_item_description',
										value: record.data['tx_item_description'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'tx_property_address',
										name: 'tx_property_address',
										value: record.data['tx_property_address'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'flt_trade',
										name: 'flt_trade',
										value: record.data['flt_trade'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'flt_unit_price',
										name: 'flt_unit_price',
										value: record.data['flt_unit_price'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'flt_total_price',
										name: 'flt_total_price',
										value: record.data['flt_total_price'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'flt_value_of_goods',
										name: 'flt_value_of_goods',
										value: record.data['flt_value_of_goods'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'flt_net_value',
										name: 'flt_net_value',
										value: record.data['flt_net_value'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'flt_insurance_premium',
										name: 'flt_insurance_premium',
										value: record.data['flt_insurance_premium'],
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
											updateDocForm.close();
										}
									}, '->', {
										xtype: 'button',
										text: 'Update',
										listeners: {
											click: function () {
												var docdetailskey = this.up('window').down('textfield[name=id_doc_details_key]').getValue();
												var docdetailsver = this.up('window').down('textfield[name=id_doc_details_ver]').getValue();
												var active = record.data['is_active'];
												var envkey = record.data['id_env_key'];
												var modkey = record.data['id_user_mod_key'];
												var dttmod = record.data['dttmod'];
												var eventkey = record.data['id_event_key'];
												var statekey = record.data['is_active'];
												var actionkey = record.data['id_action_key'];
												var dockey = record.data['id_doc_key'];
												var part = this.up('window').down('textfield[name=part_no]').getValue();
												var itemqty = this.up('window').down('textfield[name=item_qty]').getValue();
												var reference = this.up('window').down('textfield[name=reference_no]').getValue();
												var txitemname = this.up('window').down('textfield[name=tx_item_name]').getValue();
												var txitemcode = this.up('window').down('textfield[name=tx_item_code]').getValue();
												var txrent = this.up('window').down('textfield[name=tx_rent]').getValue();
												var txpack = this.up('window').down('textfield[name=tx_pack]').getValue();
												var txitemdesc = this.up('window').down('textfield[name=tx_item_description]').getValue();
												var txprop = this.up('window').down('textfield[name=tx_property_address]').getValue();
												var flttrade = this.up('window').down('textfield[name=flt_trade]').getValue();
												var fltunit = this.up('window').down('textfield[name=flt_unit_price]').getValue();
												var flttotal = this.up('window').down('textfield[name=flt_total_price]').getValue();
												var fltnet = this.up('window').down('textfield[name=flt_net_value]').getValue();
												var fltvalue = this.up('window').down('textfield[name=flt_value_of_goods]').getValue();
												var fltinsurance = this.up('window').down('textfield[name=flt_insurance_premium]').getValue();
												var updatedDocDetails = {
													id_doc_details_key: docdetailskey
													,id_doc_details_ver: docdetailsver
													,is_active: active
													,id_env_key: envkey
													,id_user_mod_key: modkey
													,dtt_mod: dttmod
													,id_event_key: eventkey
													,id_state_key: statekey
													,id_action_key: actionkey
													,id_doc_key: dockey
													,part_no: part
													,item_qty: itemqty
													,reference_no: reference
													,tx_item_name: txitemname
													,tx_item_code: txitemcode
													,tx_rent: txrent
													,tx_pack: txpack
													,tx_item_description: txitemdesc
													,tx_property_address: txprop
													,flt_trade: flttrade
													,flt_unit_price: fltunit
													,flt_total_price: flttotal
													,flt_net_value: fltnet
													,flt_value_of_goods: fltvalue
													,flt_insurance_premium: fltinsurance
												};
												docdetails.set(updatedDocDetails);
												detailsStore.load();
												Ext.Ajax.request({
													url: 'details.json',
													method: 'PUT',
													jsonData: Ext.util.JSON.encode(updatedDocDetails),
													headers:
													{
														'Content-Type': 'application/json'
													},
													success: function (response) {
														var obj = Ext.decode(response.responseText);
														Ext.Msg.alert('Success', "Document details were successfully updated to the database");
														console.log(obj);
													},
													failure: function () {
														console.log("Failed");
														Ext.Msg.alert('Error', "Document details were not updated to the database");
													}
												});
												updateDocForm.close();
											}
										}
									}]
								}]
							}).show();
						}
					}
				}],
				dockedItems: [{
					xtype: 'toolbar',
					dock: 'bottom',
					ui: 'footer',
					items: [{
						xtype: 'button',
						text: 'Cancel',
						handler: function () {
							updateForm.close();
						}
					}, '->', 
					{
						xtype: 'button',
						text: 'Update',
						listeners: {
							click: function () {
								var active = this.up('window').down('textfield[name=is_active]').getValue();
								var envkey = this.up('window').down('textfield[name=id_env_key]').getValue();
								var modkey = this.up('window').down('textfield[name=id_user_mod_key]').getValue();
								var dttmod = this.up('window').down('textfield[name=dtt_mod]').getValue();
								var eventkey = this.up('window').down('textfield[name=id_event_key]').getValue();
								var statekey = this.up('window').down('textfield[name=id_state_key]').getValue();
								var actionkey = this.up('window').down('textfield[name=id_action_key]').getValue();
								var dockey = this.up('window').down('textfield[name=id_doc_key]').getValue();
								var docver = this.up('window').down('textfield[name=id_doc_ver]').getValue();
								var supplier = this.up('window').down('textfield[name=supplier_number]').getValue();
								var delivery_note_no = this.up('window').down('textfield[name=delivery_note_no]').getValue();
								var receipt_number = this.up('window').down('textfield[name=receipt_number]').getValue();
								var document_number = this.up('window').down('textfield[name=document_number]').getValue();
								var dt_document = this.up('window').down('textfield[name=dt_document]').getValue();
								var recipient_of_invoice = this.up('window').down('textfield[name=recipient_of_invoice]').getValue();
								var vat_number = this.up('window').down('textfield[name=vat_number]').getValue();
								var dt_despatch = this.up('window').down('textfield[name=dt_despatch]').getValue();
								var tx_invoice_number = this.up('window').down('textfield[name=tx_invoice_number]').getValue();
								var tx_currency = this.up('window').down('textfield[name=tx_currency]').getValue();
								var tx_account_number = this.up('window').down('textfield[name=tx_account_number]').getValue();
								var tx_voucher_number = this.up('window').down('textfield[name=tx_voucher_number]').getValue();
								var tx_fax_number = this.up('window').down('textfield[name=tx_fax_number]').getValue();
								var tx_association_number = this.up('window').down('textfield[name=tx_association_number]').getValue();
								var tx_company_address = this.up('window').down('textfield[name=tx_company_address]').getValue();
								var tx_invoice_to = this.up('window').down('textfield[name=tx_invoice_to]').getValue();
								var tx_deliver_to = this.up('window').down('textfield[name=tx_deliver_to]').getValue();
								var tx_order_id = this.up('window').down('textfield[name=tx_order_id]').getValue();
								var tx_delivery_note = this.up('window').down('textfield[name=tx_delivery_note]').getValue();
								var tx_delivery_details = this.up('window').down('textfield[name=tx_delivery_details]').getValue();
								var tx_payment_details = this.up('window').down('textfield[name=tx_payment_details]').getValue();
								var flt_vat = this.up('window').down('textfield[name=flt_vat]').getValue();
								var flt_vat_rate = this.up('window').down('textfield[name=flt_vat_rate]').getValue();
								var flt_vat_payable = this.up('window').down('textfield[name=flt_vat_payable]').getValue();
								var flt_invoice_amount = this.up('window').down('textfield[name=flt_invoice_amount]').getValue();
								var flt_total_before_vat = this.up('window').down('textfield[name=flt_total_before_vat]').getValue();
								var flt_total_amount_due = this.up('window').down('textfield[name=flt_total_amount_due]').getValue();
								var flt_discount = this.up('window').down('textfield[name=flt_discount]').getValue();
								var flt_net_invoice_total = this.up('window').down('textfield[name=flt_net_invoice_total]').getValue();
								var updatedDoc = {
									id_doc_key: dockey
									,id_doc_ver: docver
									,is_active: active
									,id_env_key: envkey
									,id_user_mod_key: modkey
									,dtt_mod: dttmod
									,id_event_key: eventkey
									,id_state_key: statekey
									,id_action_key: actionkey
									,supplier_number: supplier
									,delivery_note_no: delivery_note_no
									,receipt_number: receipt_number
									,document_number: document_number
									,dt_document: dt_document
									,recipient_of_invoice: recipient_of_invoice
									,vat_number: vat_number
									,dt_despatch: dt_despatch
									,tx_invoice_number: tx_invoice_number
									,tx_currency: tx_currency
									,tx_account_number: tx_account_number
									,tx_voucher_number: tx_voucher_number
									,tx_fax_number: tx_fax_number
									,tx_association_number: tx_association_number
									,tx_company_address: tx_company_address
									,tx_invoice_to: tx_invoice_to
									,tx_deliver_to: tx_deliver_to
									,tx_order_id: tx_order_id
									,tx_delivery_note: tx_delivery_note
									,tx_delivery_details: tx_delivery_details
									,tx_payment_details: tx_payment_details
									,flt_vat: flt_vat
									,flt_vat_rate: flt_vat_rate
									,flt_vat_payable: flt_vat_payable
									,flt_invoice_amount: flt_invoice_amount
									,flt_total_before_vat: flt_total_before_vat
									,flt_total_amount_due: flt_total_amount_due
									,flt_discount: flt_discount
									,flt_net_invoice_total: flt_net_invoice_total
								};
								doc.set(updatedDoc);
								docStore.load();
								Ext.Ajax.request({
									url: 'docs.json',
									method: 'PUT',
									jsonData: Ext.util.JSON.encode(updatedDoc),
									headers:
									{
										'Content-Type': 'application/json'
									},
									success: function (response) {
										var obj = Ext.decode(response.responseText);
										Ext.Msg.alert('Success', "Document was successfully updated to the database");
										console.log(obj);
									},
									failure: function () {
										Ext.Msg.alert('Error', "Document was not updated to the database");
										console.log("Failed");
									}
								});
								updateForm.close();
							}
						}
					}]
				}]
			}]
		}).show();
	}
});
