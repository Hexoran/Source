'use strict';

const fs = require('fs');

exports.commands = {
kickban: function (target, room, user, connection) {
		if (!target) return this.parse('/help kickban');
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");

		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		var name = this.targetUsername;
		var userid = toId(name);

		if (!userid || !targetUser) return this.errorReply("User '" + name + "' not found.");
		if (!this.can('ban', targetUser, room)) return false;
		if (room.bannedUsers[userid] && room.bannedIps[targetUser.latestIp]) return this.sendReply("User " + targetUser.name + " is already banned from room " + room.id + ".");
		if (targetUser in room.users || user.can('lock')) {
			targetUser.popup("|modal|You have been kickbanned from room '" + room.id + "'.  You will be able to rejoin in 1 minute.");
		}
		room.roomBan(targetUser);
		setTimeout(function () {
			room.unRoomBan(targetUser);
		}, 60 * 1000); // one minute
		this.addModCommand("" + targetUser.name + " was kickbanned for 1 minute from room " + room.id + " by " + user.name + ".");
	},
	kickbanhelp: ["/kickban [user] - Roombans [user] for one minute."],
kickhourban: function (target, room, user, connection) {
		if (!target) return this.parse('/help kickhourban');
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");

		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		var name = this.targetUsername;
		var userid = toId(name);

		if (!userid || !targetUser) return this.errorReply("User '" + name + "' not found.");
		if (!this.can('ban', targetUser, room)) return false;
		if (room.bannedUsers[userid] && room.bannedIps[targetUser.latestIp]) return this.sendReply("User " + targetUser.name + " is already banned from room " + room.id + ".");
		if (targetUser in room.users || user.can('lock')) {
			targetUser.popup("|modal|You have been kickbanned from room '" + room.id + "'.  You will be able to rejoin in 1 hour.");
		}
		room.roomBan(targetUser);
		setTimeout(function () {
			room.unRoomBan(targetUser);
		},60 * 60 * 1000); // one hour
		this.addModCommand("" + targetUser.name + " was kickbanned for 1 hour from room " + room.id + " by " + user.name + ".");
	},
	kickhourbanhelp: ["/kickhourban [user] - Roombans [user] for one hour."],
};
