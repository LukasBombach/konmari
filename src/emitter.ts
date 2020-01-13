type Events = Record<string, Listener[]>;
type Listener = (...args: any[]) => void;

export default class Emitter {
  private events: Events = {};

  on(event: string, listener: Listener): void {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  }

  off(event: string, listener: Listener): void {
    const index = this.events[event].indexOf(listener);
    if (index > -1) this.events[event].splice(index, 1);
  }

  emit(event: string, ...args: any[]): void {
    if (this.events[event]) this.events[event].forEach(h => h(...args));
    if (this.events["*"]) this.events[event].forEach(h => h(...args));
  }
}
