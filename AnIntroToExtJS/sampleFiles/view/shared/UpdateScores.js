Ext.define('HS.view.shared.UpdateScores', {
    extend: 'Ext.window.Window',
    alias: 'widget.updatescores',
    
    title: 'Update Scores',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 300,
    page: 0,

    initComponent: function () {
        var me = this;

        me.leagues = Ext.create('HS.store.Leagues', {
            autoLoad: true
        });

        me.bowlers = Ext.create('HS.store.Bowlers', {
            autoLoad: true
        });

        var navigate = function (panel, direction) {
            var layout = panel.getLayout();
            layout[direction]();
            Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
            Ext.getCmp('move-next').setDisabled(!layout.getNext());
        };

        me.panel = Ext.create('Ext.form.Panel', {
            url: '/api/series',
            layout: 'card',
            defaults: {
                border: false
            },
            bbar: [{
                id: 'move-prev',
                text: 'Back',
                handler: function (btn) {
                    navigate(btn.up("panel"), "prev");
                },
                disabled: true
            }, '->', {
                id: 'move-next',
                text: 'Next',
                handler: function (btn) {
                    navigate(btn.up("panel"), "next");
                }
            }, {
                id: 'save-scores',
                text: 'Save',
                disabled: true,
                formBind: true,
                handler: function () {
                    me.panel.form.submit({
                        success: function() {
                            Ext.Msg.alert('Success', 'Scores added successfully!', function () {
                                me.hide();
                            });
                        },
                        failure: function () {
                            //console.log(arguments);
                            Ext.Msg.confirm('Failed', 'There was a problem updating scores. Would you like to edit and try again?', function (btn) {
                                if (btn === 'yes') {
                                    return;
                                } else {
                                    me.hide();
                                }
                            });
                        }
                    });
                }
            }],

            items: [{
                id: 'card-0',
                title: 'Step 1 - Choose your League and Week Number',
                defaults: {
                    margin: '15 0 0 25',
                    allowBlank: false
                },
                items: [{
                    xtype: 'combobox',
                    name: 'League',
                    fieldLabel: 'League',
                    store: me.leagues,
                    displayField: 'Name',
                    valueField: 'Id',
                    editable: false,
                    listConfig : {
                        itemTpl: '{Name} {Season} {Year}'
                    }
                }, {
                    xtype: 'numberfield',
                    name: 'Week',
                    fieldLabel: 'Week',
                    value: 1,
                    minValue: 1,
                    maxValue: 32
                }]
            }, {
                id: 'card-1',
                title: 'Step 2 - Select Bowler and enter Handicap',
                defaults: {
                    margin: '15 0 0 25',
                    allowBlank: false
                },
                items: [{
                    xtype: 'combobox',
                    name: 'Bowler_Id',
                    fieldLabel: 'Bowler',
                    store: me.bowlers,
                    displayField: 'Name',
                    valueField: 'Id',
                    editable: false
                }, {
                    xtype: 'numberfield',
                    name: 'Handicap',
                    fieldLabel: 'Handicap',
                    minValue: 0,
                    maxValue: 300
                }]
            }, {
                id: 'card-2',
                title: 'Step 3 - Enter your Games',
                defaults: {
                    margin: '15 0 0 25',
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 300,
                    allowBlank: false
                },
                items: [{
                    name: 'Game1',
                    fieldLabel: 'Game 1',
                }, {
                    name: 'Game2',
                    fieldLabel: 'Game 2'
                }, {
                    name: 'Game3',
                    fieldLabel: 'Game 3'
                }]
            }]
        });
        
        me.items = [me.panel];

        me.callParent(arguments);
    }
});