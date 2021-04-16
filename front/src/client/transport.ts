import {TwirpFetchTransport} from "@protobuf-ts/twirp-transport";
const transport = new TwirpFetchTransport({
  baseUrl: "http://localhost:5000/twirp"
});

export default transport;
