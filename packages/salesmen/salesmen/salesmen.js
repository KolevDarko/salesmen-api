const preReveal = require("./pre-reveal.json");

function main(args) {
  let tokenId = args.id;
  return { body: { id: tokenId, name: preReveal.name } };
}
