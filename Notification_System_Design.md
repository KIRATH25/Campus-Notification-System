# Notification System Design

## Problem Statement

Build a system that fetches notifications and displays the top 10 most relevant unread notifications.

## Assumptions

- Placement notifications have highest importance.
- Result notifications have medium importance.
- Event notifications have lowest importance.
- Newer notifications are more relevant than older notifications.

## Priority Strategy

Weight Assignment:

Placement = 3

Result = 2

Event = 1

Priority Score:

Priority Score = Type Weight + Recency Score

## Data Flow

Authentication API =   Notification API
=Priority Calculation =Top 10 Selection =Display

## Efficient Maintenance

To efficiently handle continuous incoming notifications, a Min Heap of size 10 can be maintained.

Whenever a new notification arrives:

1. Calculate priority score.
2. Insert into heap.
3. If heap size exceeds 10, remove the lowest priority notification.

This guarantees that only the top 10 notifications are retained.

## Complexity

Current Implementation:

O(n log n)

Optimized Heap-Based Design:

O(log 10)

## Future Improvements

- Read/Unread tracking
- Database persistence
- Real-time WebSocket updates
- User-specific preferences