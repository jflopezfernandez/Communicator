
const BANDWIDTH_USER_ID = 'u-wvgt6n2ykmgpvh5khnayeti';
const BANDWIDTH_API_TOKEN = 't-redpbrf3vqbhimaowtwvn2a';
const BANDWIDTH_API_SECRET = 'el74avr5jb4scgd3zsbhd4e4cahozuvol2sfq4a';

const PHONE_NUMBER_ME = '+18138628820';
const PHONE_NUMBER_DAD = '+18134699390';
const PHONE_NUMBER_MOM = '+18134699580';

const Bandwidth = require('node-bandwidth');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
//const { Server } = require('http');
//Server(app);


const client = new Bandwidth({
    userId: BANDWIDTH_USER_ID,
    apiToken: BANDWIDTH_API_TOKEN,
    apiSecret: BANDWIDTH_API_SECRET
});

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 80));

const sendMessage = (params, message) => {
    if (params.null === "") {
        console.error('No "to:" address configured!');

        return;
    }

    client.Message.send({
        from: params.from,
        to: params.to,
        text: message
    })
        .then((message) => {
            console.log('Message: ' + message.text);

            return client.Message.get(message.id);
        })
        .catch((error) => {
            console.error('Error: ' + error);
        });
};

let numbers = {
    to: "",
    from: "+18133222035"
}

const setNumber = (newNumber) => {
    numbers.to = newNumber;
}

const ViewConfiguration = () => {
    console.log(`To: ${numbers.to}`);
    console.log(`From: ${numbers.from}`);
}
