/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DocUI.view.doc.DocViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.docs',

    data: {
        selectedDoc: null,
        selectedDetails: null,
        docKey: null
    },
    stores: {
        Docs: {
            model: 'DocUI.model.Doc',
            storeId: 'docs',
            autoLoad: true,
            pageSize: 0,
            remoteSort: false,
            remoteFilter: false,
            autoSync: true,
            autoDestroy: false,
            proxy : {
                type : 'rest',
                url: 'docs.json',
                reader : {
                    type: 'json'
                },
                writer : {
                    writeAllFields : true
                }
            } 
        },
        Details: {
            model: 'DocUI.model.DocDetails',
            storeId: 'details', 
            alias: 'store.details',
            autoLoad: true,
            pageSize: 0,
            remoteSort: false,
            remoteFilter: false,
            autoSync: true,
            autoDestroy: false,
            proxy : {
                type : 'rest',
                url: 'details.json',
                reader : {
                    type: 'json'
                },
                writer : {
                    writeAllFields : true
                }
            },
        },
        CurrentDetails: {
            model: 'DocUI.model.DocDetails',
            storeId: 'currentdetails',
            autoLoad: true,
            remoteSort: false,
            remoteFilter: false,
            autoSync: true,
            autoDestroy: false,
            proxy: {
                type: 'localstorage',
                // url: 'currentdetails.json',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        }
    }
});
