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
                type : 'ajax',
                method: 'GET',
                cors: true,
                url: 'http://localhost:8080/getDoc',
                reader : {
                    type: 'json',
                    rootProperty: 'List',
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
                type : 'ajax',
                method: 'GET',
                // url: 'details.json',
                url: 'http://localhost:8080/getDocDetails',
                cors: true,
                reader : {
                    type: 'json',
                    rootProperty: 'List'
                },
                writer : {
                    writeAllFields : true
                }
            },
        },
        CurrentDetails: {
            model: 'DocUI.model.DocDetails',
            storeId: 'currentdetails',
            autoDestroy: false,
            proxy: {
                type: 'localstorage',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        }
    }
});