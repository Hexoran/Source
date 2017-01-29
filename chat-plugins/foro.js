'use strict';

const fs = require('fs');

exports.commands = {
     '!foro': true,
	    foro: function (target, room, user) {
		        if (!this.canBroadcast()) return;
		        this.sendReplyBox('El link del foro de Lightning es: <a href="...">Foro</a>.');
	},
};
