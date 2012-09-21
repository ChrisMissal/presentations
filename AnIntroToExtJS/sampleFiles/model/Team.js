Ext.define('HS.model.Team', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'Id',        type: 'int'    },
		{ name: 'Name',      type: 'string' },
		{ name: 'Key',       type: 'string' }
	],
	
	proxy: {
	    type: 'rest',
	    url: '/api/team'
	}
});
