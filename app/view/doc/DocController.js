Ext.define('DocUI.view.doc.DocController', {
    extend: 'Ext.app.ViewController',

	alias: 'controller.docs',

	onDoubleClick: function (dataview, record, item, index, e) {
		var docKey = record.data['docId'];
		console.log(docKey);
		var docStore = Ext.data.StoreManager.lookup('docs');
		var doc = docStore.findRecord('docId',docKey);
		var detailsStore = Ext.data.StoreManager.lookup('details');
		var docdetails = detailsStore.findRecord('docId',docKey);
		var docdetailsgroup = detailsStore.queryRecords('docId',docKey);
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
						fieldLabel: 'Doc ID',
						name: 'docId',
						value: record.data['docId'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Doc Version',
						name: 'docVer',
						value: record.data['docVer'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Modified On',
						name: 'modifiedOn',
						value: record.data['modifiedOn'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Supplier Number',
						name: 'supplierNumber',
						value: record.data['supplierNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Delivery Note No.',
						name: 'deliveryNoteNo',
						value: record.data['deliveryNoteNo'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Receipt Number',
						name: 'receiptNo',
						value: record.data['receiptNo'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Document Number',
						name: 'documentNumber',
						value: record.data['documentNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Document Date',
						name: 'documentDate',
						value: record.data['documentDate'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Recipient Of Invoice',
						name: 'recipientOfInvoice',
						value: record.data['recipientOfInvoice'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'VAT Number',
						name: 'vatNumber',
						value: record.data['vatNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Despatch Date',
						name: 'despatchDate',
						value: record.data['despatchDate'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Invoice Number',
						name: 'invoiceNumber',
						value: record.data['invoiceNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Currency',
						name: 'currency',
						value: record.data['currency'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Account Number',
						name: 'accountNumber',
						value: record.data['accountNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Voucher Number',
						name: 'voucherNumber',
						value: record.data['voucherNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Fax Number',
						name: 'faxNumber',
						value: record.data['faxNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Association Number',
						name: 'associationNumber',
						value: record.data['associationNumber'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textarea',
						fieldLabel: 'Company Address',
						name: 'companyAddress',
						value: record.data['companyAddress'],
						labelStyle: 'font-weight:bold',
						height: 90
					},	{
						xtype: 'textarea',
						fieldLabel: 'Invoice To',
						name: 'invoiceTo',
						value: record.data['invoiceTo'],
						labelStyle: 'font-weight:bold',
						height: 90
					},	{
						xtype: 'textarea',
						fieldLabel: 'Deliver To',
						name: 'deliverTo',
						value: record.data['deliverTo'],
						labelStyle: 'font-weight:bold',
						height: 90
					},	{
						xtype: 'textfield',
						fieldLabel: 'Order ID',
						name: 'orderId',
						value: record.data['orderId'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Delivery Note',
						name: 'deliveryNote',
						value: record.data['deliveryNote'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Delivery Details',
						name: 'deliveryDetails',
						value: record.data['deliveryDetails'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Payment Details',
						name: 'paymentDetails',
						value: record.data['paymentDetails'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'VAT',
						name: 'vat',
						value: record.data['vat'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'VAT Rate',
						name: 'vatRate',
						value: record.data['vatRate'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'VAT Payable',
						name: 'vatPayable',
						value: record.data['vatPayable'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Invoice Amount',
						name: 'invoiceAmount',
						value: record.data['invoiceAmount'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Total Before VAT',
						name: 'totalBeforeVat',
						value: record.data['totalBeforeVat'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Total Amount Due',
						name: 'totalAmountDue',
						value: record.data['totalAmountDue'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Discount',
						name: 'discount',
						value: record.data['discount'],
						labelStyle: 'font-weight:bold'
					},	{
						xtype: 'textfield',
						fieldLabel: 'Net Invoice Total',
						name: 'netInvoiceTotal',
						value: record.data['netInvoiceTotal'],
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
						text: 'Part No',
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
										fieldLabel: 'Doc Details ID',
										name: 'docDetailsId',
										value: record.data['docDetailsId'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Doc Details Version',
										name: 'docDetailsVer',
										value: record.data['docDetailsVer'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Part No.',
										name: 'partNo',
										value: record.data['partNo'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Item Quantity',
										name: 'itemQty',
										reference: 'itemQty',
										value: record.data['itemQty'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Reference No.',
										name: 'referenceNo',
										value: record.data['referenceNo'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Item Name',
										name: 'itemName',
										value: record.data['itemName'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Item Code',
										name: 'itemCode',
										value: record.data['itemCode'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Rent',
										name: 'rent',
										value: record.data['rent'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Pack',
										name: 'pack',
										value: record.data['pack'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Item Description',
										name: 'tx_item_description',
										value: record.data['itemDescription'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Property Address',
										name: 'propertyAddress',
										value: record.data['propertyAddress'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Trade',
										name: 'trade',
										value: record.data['trade'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Unit Price',
										name: 'unitPrice',
										value: record.data['unitPrice'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Total Price',
										name: 'totalPrice',
										value: record.data['totalPrice'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Value of Goods',
										name: 'valueOfGoods',
										value: record.data['valueOfGoods'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Net Value',
										name: 'netValue',
										value: record.data['netValue'],
										labelStyle: 'font-weight:bold'
									},	{
										xtype: 'textfield',
										fieldLabel: 'Insurance Premium',
										name: 'insurancePremium',
										value: record.data['insurancePremium'],
										labelStyle: 'font-weight:bold'
									}, {
										xtype: 'textfield',
										fieldLabel: 'Modified On',
										name: 'modifiedOn',
										value: record.data['modifiedOn'],
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
												var docdetailskey = this.up('window').down('textfield[name=docDetailsId]').getValue();
												var docdetailsver = this.up('window').down('textfield[name=docDetailsVer]').getValue();
												var dttmod = record.data['modifiedOn'];
												var dockey = record.data['docId'];
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
												var updatedDocDetails = {
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
												docdetails.set(updatedDocDetails);
												detailsStore.load();
												Ext.Ajax.request({
													url: '/details',
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
								var dttmod = this.up('window').down('textfield[name=modifiedOn]').getValue();
								var dockey = this.up('window').down('textfield[name=docId]').getValue();
								var docver = this.up('window').down('textfield[name=docVer]').getValue();
								var supplier = this.up('window').down('textfield[name=supplierNumber]').getValue();
								var delivery_note_no = this.up('window').down('textfield[name=deliveryNoteNo]').getValue();
								var receipt_number = this.up('window').down('textfield[name=receiptNo]').getValue();
								var document_number = this.up('window').down('textfield[name=documentNumber]').getValue();
								var dt_document = this.up('window').down('textfield[name=documentDate]').getValue();
								var recipient_of_invoice = this.up('window').down('textfield[name=recipientOfInvoice]').getValue();
								var vat_number = this.up('window').down('textfield[name=vatNumber]').getValue();
								var dt_despatch = this.up('window').down('textfield[name=despatchDate]').getValue();
								var tx_invoice_number = this.up('window').down('textfield[name=invoiceNumber]').getValue();
								var tx_currency = this.up('window').down('textfield[name=currency]').getValue();
								var tx_account_number = this.up('window').down('textfield[name=accountNumber]').getValue();
								var tx_voucher_number = this.up('window').down('textfield[name=voucherNumber]').getValue();
								var tx_fax_number = this.up('window').down('textfield[name=faxNumber]').getValue();
								var tx_association_number = this.up('window').down('textfield[name=associationNumber]').getValue();
								var tx_company_address = this.up('window').down('textfield[name=companyAddress]').getValue();
								var tx_invoice_to = this.up('window').down('textfield[name=invoiceTo]').getValue();
								var tx_deliver_to = this.up('window').down('textfield[name=deliverTo]').getValue();
								var tx_order_id = this.up('window').down('textfield[name=orderId]').getValue();
								var tx_delivery_note = this.up('window').down('textfield[name=deliveryNote]').getValue();
								var tx_delivery_details = this.up('window').down('textfield[name=deliveryDetails]').getValue();
								var tx_payment_details = this.up('window').down('textfield[name=paymentDetails]').getValue();
								var flt_vat = this.up('window').down('textfield[name=vat]').getValue();
								var flt_vat_rate = this.up('window').down('textfield[name=vatRate]').getValue();
								var flt_vat_payable = this.up('window').down('textfield[name=vatPayable]').getValue();
								var flt_invoice_amount = this.up('window').down('textfield[name=invoiceAmount]').getValue();
								var flt_total_before_vat = this.up('window').down('textfield[name=totalBeforeVat]').getValue();
								var flt_total_amount_due = this.up('window').down('textfield[name=totalAmountDue]').getValue();
								var flt_discount = this.up('window').down('textfield[name=discount]').getValue();
								var flt_net_invoice_total = this.up('window').down('textfield[name=netInvoiceTotal]').getValue();
								var updatedDoc = {
									docId: dockey
									,docVer: docver
									,modifiedOn: dttmod
									,supplierNumber: supplier
									,deliveryNoteNo: delivery_note_no
									,receiptNo: receipt_number
									,documentNumber: document_number
									,documentDate: dt_document
									,recipientOfInvoice: recipient_of_invoice
									,vatNumber: vat_number
									,despatchDate: dt_despatch
									,invoiceNumber: tx_invoice_number
									,currency: tx_currency
									,accountNumber: tx_account_number
									,voucherNumber: tx_voucher_number
									,faxNumber: tx_fax_number
									,associationNumber: tx_association_number
									,companyAddress: tx_company_address
									,invoiceTo: tx_invoice_to
									,deliverTo: tx_deliver_to
									,orderId: tx_order_id
									,deliveryNote: tx_delivery_note
									,deliveryDetails: tx_delivery_details
									,paymentDetails: tx_payment_details
									,vat: flt_vat
									,vatRate: flt_vat_rate
									,vatPayable: flt_vat_payable
									,invoiceAmount: flt_invoice_amount
									,totalBeforeVat: flt_total_before_vat
									,totalAmountDue: flt_total_amount_due
									,discount: flt_discount
									,netInvoiceTotal: flt_net_invoice_total
									,docDetailsId: docdetailskey
									,docDetailsVer: docdetailsver
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
									,netValue: fltnet
									,totalPrice: flttotal
									,valueOfGoods: fltvalue
									,insurancePremium: fltinsurance
									,customerId: record.data['customerId']
									,customerVer: record.data['customerVer']
									,customerNumber: record.data['customerNumber']
									,contactNumber: record.data['contactNumber']
									,customerOrderNo: record.data['customerOrderNo']
									,customerAddress: record.data['customerAddress']
								};
								doc.set(updatedDoc);
								docStore.load();
								Ext.Ajax.request({
									url: '/docs',
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
