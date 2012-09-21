Ext.define('HS.model.League', {
	extend: 'Ext.data.Model',
	idProperty: 'Id',

	fields: [
		{ name: 'Id',                 type: 'int'    },
		{ name: 'Key',                type: 'string' },
		{ name: 'HandicapBase',       type: 'int'    },
		{ name: 'HandicapPercentage', type: 'int'    },
		{ name: 'Season',             type: 'string' },
		{ name: 'Name',               type: 'string' },
		{ name: 'Year',               type: 'int'    }
	],

	proxy: {
	    type: 'rest',
	    url: '/api/league'
	}
});
