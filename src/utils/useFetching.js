import { useState } from "react";

export default function useFetching(callback) {
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsPostLoading(true);
            await callback;
        } catch (e) {
            setError(e.message);
        } finally {
            setIsPostLoading(false);
        }
    }

    return [fetching, isPostLoading, error];
}