const calculatePriority = require(
    "./priorityCalculator"
);

const MinHeap = require(
    "./minHeap"
);

function getTopNotifications(
    notifications,
    limit = 10
) {
    const heap = new MinHeap();

    for (const notification of notifications) {
        const item = {
            ...notification,
            priorityScore:
                calculatePriority(
                    notification
                )
        };

        if (heap.size() < limit) {
            heap.insert(item);
        } else {
            const lowest =
                heap.heap[0];

            if (
                item.priorityScore >
                lowest.priorityScore
            ) {
                heap.removeMin();
                heap.insert(item);
            }
        }
    }

    return heap
        .getItems()
        .sort(
            (a, b) =>
                b.priorityScore -
                a.priorityScore
        );
}

module.exports =
    getTopNotifications;