Ext.define('HS.model.Series', {
	extend: 'Ext.data.Model',
	idProperty: 'Id',

	fields: [
		{ name: 'Id',        type: 'int'    },
		{ name: 'Key',       type: 'string' },
		{ name: 'League',    type: 'int'    },
		{ name: 'Bowler_Id', type: 'int'    },
		{ name: 'Week',      type: 'int'    },
		{ name: 'Game1',     type: 'int'    },
		{ name: 'Game2',     type: 'int'    },
		{ name: 'Game3',     type: 'int'    },
		{ name: 'Handicap',  type: 'int'    }
	],
	
	belongsTo: 'HS.model.Bowler',
	
	proxy: {
	    type: 'rest',
	    url: '/api/series'
	}
});
