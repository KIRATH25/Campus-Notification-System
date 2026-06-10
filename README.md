# Campus Notification System

A notification prioritization system that fetches notifications from a secured API, assigns priority scores based on notification type and recency, and maintains the top 10 most important notifications.

Priority Order:

1. Placement
2. Result
3. Event

Features:

- Secure authentication
- Notification retrieval
- Priority score calculation
- Top 10 ranking
- Optimized notification management

By performing only the sorting array it shows me the time complexity of O(n log n), which is not eh 50% of required time optimised. So now we are going to proceed with the Min Heap which leads me to to the time O(log 10) ~~ O(n).

A Min Heap of fixed size 10 is used to efficiently maintain the highest priority notifications. Each incoming notification is assigned a priority score based on its type and recency. If the heap contains fewer than 10 notifications, the new notification is inserted directly. Otherwise, it is compared with the minimum priority notification currently in the heap. If the new notification has a higher priority score, the minimum element is removed and the new notification is inserted.

This approach ensures that only the top 10 notifications are maintained at all times without sorting the entire dataset repeatedly. The effective time complexity becomes O(n log 10), which is approximately O(n), making the solution scalable for a large number of incoming notifications.
