const stompClient = new StompJs.Client({
    brokerURL: 'ws://' + window.location.host + '/ws'
});

stompClient.onConnect = (frame) => {
    setConnected(true);
    console.log('Connected: ' + frame);

    stompClient.subscribe('/topic/livechat', (message) => {
        updateLiveChat(JSON.parse(message.body));
    });
};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    connected ? $("#conversation").show() : $("#conversation").hide();
}

function connect() {
    stompClient.activate();
}

function disconnect() {
    stompClient.deactivate();
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    stompClient.publish({
        destination: "/app/chat",
        body: JSON.stringify({
            username: $("#user").val(),
            message: $("#message").val()
        })
    });
    $("#message").val("");
}

function updateLiveChat(body) {
    $("#livechat").append(
        `<tr><td><b>${body.username}:</b> ${body.message}</td></tr>`
    );
}

$(function () {
    $("form").on('submit', (e) => e.preventDefault());
    $("#connect").click(() => connect());
    $("#disconnect").click(() => disconnect());
    $("#send").click(() => sendMessage());
});
