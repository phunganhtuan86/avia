/**
 * Throttled function
 *
 * Throttled function encapsulates a function object and allows calls to it,
 * but it limits the call rate to not exceed a given wait time.
 *
 * If there are multiple calls to the function all within the wait time window,
 * they will result in a single function call, which will be executed after
 * the wait time expires.
 */
export declare class ThrottledFunc {
    private func;
    private wait;
    private previous;
    private timeout;
    /**
     * Create a new throttled function
     *
     * @param func function to call
     * @param wait wait time in milliseconds
     */
    constructor(func: () => void, wait: number);
    /** Call the function */
    call(): void;
    private getTime();
    private callLater();
}
