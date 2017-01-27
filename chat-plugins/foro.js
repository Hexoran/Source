'use strict';

const fs = require('fs');

exports.commands = {
     '!foro': true,
	    foro: function (target, room, user) {
		        if (!this.canBroadcast()) return;
		        this.sendReplyBox('El link del foro de Whiteflare es: <a href="http://whiteflare.freeforums.net/">Foro</a>.');
	},
};
