const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function calculatePriority(notification) {
    const now = new Date();

    const timestamp = new Date(
        notification.Timestamp.replace(" ", "T")
    );

    const ageHours =
        (now - timestamp) / (1000 * 60 * 60);

    const recencyScore = Math.max(
        0,
        100 - ageHours
    );

    return (
        weights[notification.Type] * 100 +
        recencyScore
    );
}

module.exports = calculatePriority;