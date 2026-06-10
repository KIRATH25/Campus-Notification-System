const getNotifications = require(
    "./notificationService"
);

const getTopNotifications = require(
    "./topNotifications"
);

async function main() {
    try {
        const notifications =
            await getNotifications();
                console.log(
                    JSON.stringify(
                        notifications,
                        null,
                        2
                    )
                );

        const topNotifications =
            getTopNotifications(
                notifications,
                10
            );

        console.log(
            "\nTOP 10 PRIORITY NOTIFICATIONS\n"
        );

        topNotifications.forEach(
            (
                notification,
                index
            ) => {
                console.log(
                    `${index + 1}. ${
                        notification.Type
                    } | ${
                        notification.Message
                    } | Score: ${notification.priorityScore.toFixed(
                        2
                    )}`
                );
            }
        );
    } catch (error) {
        console.error(
            error.response?.data ||
                error.message
        );
    }
}

main();