import React, {
    EffectCallback,
    DependencyList,
    useLayoutEffect,
    useState,
    useEffect,
} from 'react'

// lib/canUseDOM
const canUseDOM = (): boolean => {
    return (
        typeof window !== 'undefined' &&
        typeof window.document !== 'undefined' &&
        typeof window.document.createElement !== 'undefined'
    )
}

// lib/useIsomorphicLayoutEffect
const useIsomorphicLayoutEffect = (fn: EffectCallback, deps: DependencyList): void => {
    return canUseDOM() ? useLayoutEffect(fn, deps) : useEffect(fn, deps)
}

let serverHandoffComplete = false;
let id = 0;
function genId() {
    return ++id;
}

// Workaround for https://github.com/webpack/webpack/issues/14814
// https://github.com/eps1lon/material-ui/blob/8d5f135b4d7a58253a99ab56dce4ac8de61f5dc1/packages/mui-utils/src/useId.ts#L21
const maybeReactUseId: undefined | (() => string) = (React as any)[
    "useId".toString()
];

/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reach.tech/auto-id
 */
function useId(providedId?: number | string | undefined | null, fallbackId?: string) {
    const baseId = providedId || fallbackId;

    if (maybeReactUseId !== undefined) {
        let generatedId = maybeReactUseId();
        return baseId ?? generatedId;
    }

    // If this instance isn't part of the initial render, we don't have to do the
    // double render/patch-up dance. We can just generate the ID and return it.
    let initialId = baseId ?? (serverHandoffComplete ? genId() : null);
    let [id, setId] = useState(initialId);

    useIsomorphicLayoutEffect(() => {
        if (id === null) {
            // Patch the ID after render. We do this in `useLayoutEffect` to avoid any
            // rendering flicker, though it'll make the first render slower (unlikely
            // to matter, but you're welcome to measure your app and let us know if
            // it's a problem).
            setId(genId());
        }
    }, []);

    useEffect(() => {
        if (serverHandoffComplete === false) {
            // Flag all future uses of `useId` to skip the update dance. This is in
            // `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
            // accidentally bail out of the patch-up dance prematurely.
            serverHandoffComplete = true;
        }
    }, []);

    return baseId ?? id ?? undefined;
}

export { useId };