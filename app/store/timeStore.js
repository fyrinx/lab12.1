Ext.define('Lab121.store.Times', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'startTime', type: 'string'},
        {name: 'endTime',  type: 'string'},
        {name: 'time',       type: 'int'},
        {name: 'comment',  type: 'string'}
    ]
});

var myStore = Ext.create('Ext.data.Store', {
    model: 'timeStamp',
    proxy: {
        type: 'localStorage',
        url: '/timeStamp.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    autoLoad: true
});