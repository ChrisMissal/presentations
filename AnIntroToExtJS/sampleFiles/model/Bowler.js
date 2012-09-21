Ext.define('HS.model.Bowler', {
	extend: 'Ext.data.Model',
	idProperty: 'Id',

	fields: [
		{ name: 'Id',    type: 'int'    },
		{ name: 'Key',   type: 'string' },
		{ name: 'Name',  type: 'string' },
		{ name: 'Email', type: 'string' }
	],

	hasMany: { model: 'HS.model.Series', name: 'Series' },
	
	proxy: {
	    type: 'rest',
	    url: '/api/bowler'
	}
});
