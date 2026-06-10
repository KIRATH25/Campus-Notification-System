const axios = require("axios");

const credentials = {
    email: "kiath259@gmail.com",
    name: "kirath kumar sharma",
    rollNo: "2315001135",
    accessCode: "RPsgYt",
    clientID: "d1046a52-b361-47e3-98e7-aad3503cdbb5",
    clientSecret: "jdpMrmzqPtSbMfYG"
};

async function getNotifications() {
    const authResponse = await axios.post(
        "http://4.224.186.213/evaluation-service/auth",
        credentials
    );

    const token = authResponse.data.access_token;

    const notificationsResponse = await axios.get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return notificationsResponse.data.notifications;
}

module.exports = getNotifications;