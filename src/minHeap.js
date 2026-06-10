class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    getItems() {
        return [...this.heap];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeft(index) {
        return index * 2 + 1;
    }

    getRight(index) {
        return index * 2 + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [
            this.heap[j],
            this.heap[i]
        ];
    }

    insert(item) {
        this.heap.push(item);

        let current =
            this.heap.length - 1;

        while (
            current > 0 &&
            this.heap[current].priorityScore <
                this.heap[
                    this.getParent(current)
                ].priorityScore
        ) {
            this.swap(
                current,
                this.getParent(current)
            );

            current =
                this.getParent(current);
        }
    }

    removeMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] =
            this.heap.pop();

        this.heapify(0);

        return min;
    }

    heapify(index) {
        let smallest = index;

        const left =
            this.getLeft(index);

        const right =
            this.getRight(index);

        if (
            left < this.heap.length &&
            this.heap[left].priorityScore <
                this.heap[smallest]
                    .priorityScore
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right]
                .priorityScore <
                this.heap[smallest]
                    .priorityScore
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapify(smallest);
        }
    }
}

module.exports = MinHeap;