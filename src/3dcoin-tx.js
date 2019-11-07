const data = require('3dcore-lib');

module.exports = function(hex) {

    var Transactionraw = new data.Transaction(hex);
    var obj = Transactionraw.toJSON();

    if (obj.inputs[0].prevTxId === "0000000000000000000000000000000000000000000000000000000000000000") {

        var objrender = [];
        var Vin = [];
        var Vin0 = {
            coinbase: obj.inputs[0].script,
            sequence: obj.inputs[0].sequenceNumber,
        };
        Vin.push(Vin0);
        var Vout = [];

        obj.outputs.forEach(function(output, index) {
            var script_PubKey = new data.Script(output.script);
            if (script_PubKey.classify() === "Pay to public key") {

                var pub = new data.PublicKey.fromString(script_PubKey.getPublicKey());
                var addr = data.Address(pub)
                addresses = [];
                addresses.push(addr.addr());

                scriptPubKey = {
                    asm: script_PubKey.toASM(),
                    hex: script_PubKey.toHex(),
                    type: script_PubKey.classify(),
                    addresses: addresses
                };
                var output = {
                    value: (output.satoshis / 10000000000).toFixed(10),
                    valueSat: output.satoshis,
                    n: index,
                    scriptPubKey: scriptPubKey
                };
                Vout.push(output);

            } else {

                var addr = data.Address.fromScript(script_PubKey);
                addresses = [];
                addresses.push(addr.addr());
                scriptPubKey = {
                    asm: script_PubKey.toASM(),
                    hex: script_PubKey.toHex(),
                    type: script_PubKey.classify(),
                    addresses: addresses
                };
                var output = {
                    value: (output.satoshis / 10000000000).toFixed(10),
                    valueSat: output.satoshis,
                    n: index,
                    scriptPubKey: scriptPubKey
                };
                Vout.push(output);
            }
        });

        var objrender = {
            txid: obj.hash,
            size: Transactionraw._estimateSize(),
            version: obj.version,
            locktime: obj.nLockTime,
            Vin: Vin,
            Vout: Vout
        };
    } else {
        var Vin = [];
        obj.inputs.forEach(function(input, index) {
            var script_input = new data.Script(input.script);
            scriptSig = {
                asm: script_input.toASM(),
                hex: script_input.toHex(),
            };
            var input = {
                txid: input.prevTxId,
                vout: input.outputIndex,
                scriptSig: scriptSig,
                sequence: input.sequenceNumber
            };
            Vin.push(input);

        });

        var Vout = [];
        obj.outputs.forEach(function(output, index) {
            var script_PubKey = new data.Script(output.script);
            if (script_PubKey.classify() === "Pay to public key") {

                var pub = new data.PublicKey.fromString(script_PubKey.getPublicKey());
                var addr = data.Address(pub)
                addresses = [];
                addresses.push(addr.addr());

                scriptPubKey = {
                    asm: script_PubKey.toASM(),
                    hex: script_PubKey.toHex(),
                    type: script_PubKey.classify(),
                    addresses: addresses
                };
                var output = {
                    value: (output.satoshis / 10000000000).toFixed(10),
                    valueSat: output.satoshis,
                    n: index,
                    scriptPubKey: scriptPubKey
                };
                Vout.push(output);

            } else {
                var addr = data.Address.fromScript(script_PubKey);
                addresses = [];
                addresses.push(addr.addr());

                scriptPubKey = {
                    asm: script_PubKey.toASM(),
                    hex: script_PubKey.toHex(),
                    type: script_PubKey.classify(),
                    addresses: addresses
                };
                var output = {
                    value: (output.satoshis / 10000000000).toFixed(10),
                    valueSat: output.satoshis,
                    n: index,
                    scriptPubKey: scriptPubKey
                };
                Vout.push(output);
            }
        });

        var objrender = {
            txid: obj.hash,
            size: Transactionraw._estimateSize(),
            version: obj.version,
            locktime: obj.nLockTime,
            Vin: Vin,
            Vout: Vout
        };
    }
    return objrender;
}