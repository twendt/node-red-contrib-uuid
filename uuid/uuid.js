module.exports = function(RED) {
	const uuidV4 = require('uuid/v4');
	function UuidNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		this.on('input', function(msg) {
			//Generate v4 uuid
			msg.uuid = uuidV4();
			node.send(msg);
			return;
		});
	}
	RED.nodes.registerType("uuid", UuidNode);
}
