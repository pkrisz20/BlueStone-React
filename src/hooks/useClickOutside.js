import useEventListener from "./useEventListener";

export default function useClickOutside(ref, callback, excludeRef = null) {
    useEventListener("click", e => {
        if (
            ref.current == null
            || ref.current.contains(e.target)
            || excludeRef.current.contains(e.target)
        ) return;
        callback(e);
    }, document);
}
