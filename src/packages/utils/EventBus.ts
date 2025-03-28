// Define a type-safe event bus system
export type EventMap = {
    openMenu: undefined; // event with no payload
    closeMenu: undefined;
};

export class EventBus<T extends EventMap> {
    private events: { [K in keyof T]?: Array<(data?: T[K]) => void> } = {};

    // Subscribe to an event with proper typing
    public subscribe<K extends keyof T>(event: K, callback: (data?: T[K]) => void): () => void {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event]!.push(callback);

        // Return an unsubscribe function
        return () => {
            this.events[event] = this.events[event]!.filter((cb) => cb !== callback);
        };
    }

    // Publish an event with type checking for payload
    public publish<K extends keyof T>(event: K, data?: T[K]): void {
        if (!this.events[event]) return;

        this.events[event]!.forEach((callback) => callback(data));
    }

    // Clear all subscriptions for testing/cleanup
    public clear(): void {
        this.events = {};
    }
}

// Create a singleton instance
export const eventBus = new EventBus<EventMap>();
