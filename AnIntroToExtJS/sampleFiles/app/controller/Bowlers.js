Ext.define('HS.controller.Bowlers', {
    extend: 'Ext.app.Controller',

    stores: ['Bowlers'],
    models: ['Bowler'],

    views: [
        'bowler.List',
        'bowler.Edit'
    ],

    init: function () {
        var me = this;

        me.control({
            'viewport > bowlerlist': {
                itemdblclick: me.editBowler
            },
            'bowleredit button[action=save]': {
                click: me.updateBowler
            }
        });
    },

    updateBowler: function(button) {
        var me = this,
            win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);

        var store = me.getStore('Bowlers');
        record.save({
            success: function () {
                win.close();
                store.load();
            },
            failure: function (record, op) {
                Ext.Msg.alert("Save error!", op.request.scope.reader.jsonData["error"]);
            }

        });
    },

    editBowler: function (grid, record) {
        var me = this;
        
        var view = Ext.widget('bowleredit');
        view.down('form').loadRecord(record);
        me.getBowlersStore().load();
    }
});
