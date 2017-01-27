'use strict';

exports.commands = {
	reglas: 'reglas',
	reglas: function (target, room, user) {
		this.popupReply("|html|" + "<font size=4><b>Reglas del Servidor WhiteFlare:</b></font><br />" +
					"<br />" +
					"<b>1.</b> Esta totalmente prohibido hablar de temas sexuales explícitos (+18). En caso de que esta norma se incumpla se penalizará con un ban inmediato o sera decidido entre el staff.<br />" +
					"<br />" +
					"<b>2.</b> Prohibido el Flood. El Flood (inundación) se trata de escribir en varios mensajes lo que podría redactarse en 1. El flood son las de 4 lineas seguidas en una sala.<br />" +
					"<br />" +
					"<b>3.</b> Esta prohibido el uso excesivo de mayúsculas y alargar las palabras.<br />" +
					"<br />" +
					"<b>4.</b> Los links de otros servers no estan permitidos tampoco links de cualquier cosa 18+.<br />" +
					"<br />" +
					"<b>5.</b> El uso excesivo del /me o otras etiquetas esta prohibido al igual que el shitposting.<br />" +
					"<br />" +
					"<b>6.</b> Faltar el respeto a un user tanto en el chat como por mensajes privados no esta permitido.<br />" +
					"<br />" +
					"<b>7.</b> El staff o los moderadores, pueden sancionar cualquier comportamiento que consideren inapropiado incluso si no aparece en estas reglas. Si usted esta en desacuerdo con una descicion tomada, puede contactar al Staff Superior (un Lider (&) o un Administrador (~)).<br />" +
					"<br />" +
					"<b>8.</b> No hacer minimod, se establecio a un staff capaz de pensar por si mismo.<br />" +
					"<br />" +
					"<i>El shitposting se da en mensajes con fin de desviar la conversación o molestar, aquí también podríamos incluir la lenny face la cual está prohibida y sus variantes.</i><br />");
	},
};
