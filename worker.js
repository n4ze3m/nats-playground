const nats = require('nats')
const { connect, StringCodec } = nats;
const main = async () => {
    console.log("WORKER 1: Connecting to NATS server");
    const nc = await connect();
    const sc = StringCodec();
    const sub = nc.subscribe('nats-q');
    (async () => {
        for await (const m of sub) {
            const msg = sc.decode(m.data);
            console.log(msg);
            sub.getProcessed()

        }
        console.log("subscription closed");
    })();
}

main()