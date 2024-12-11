const out = {};

function assignChannel(channel, channelDef) {
    // Optionally validate `channelDef` structure before assigning
    if (typeof channelDef === 'object' && channelDef !== null) {
        out[channel] = channelDef;
    } else {
        throw new Error('Invalid channel definition');
    }
}

// Example usage
const myChannelDef = {
    name: "Channel 1",
    frequency: 101.1
    // other properties...
};

assignChannel("music", myChannelDef);

console.log(out.music); // Output: { name: "Channel 1", frequency: 101.1 }
