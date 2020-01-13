export type EventName = string;
export type EventMap = Record<EventName, (...args: any[]) => any>;

export interface EventEmitter {
  on(event: EventName, listener: (...args: any[]) => void): any;
  off(event: EventName, listener: (...args: any[]) => void): any;
  emit(event: EventName, ...args: any[]): void;
}

export interface EventEmitterWithMap extends EventEmitter {
  events: EventName[] | EventMap;
}

export default function getEventEmitter(
  events: EventName[] | EventMap,
  eventEmitter?: EventEmitter,
): EventEmitterWithMap {}
