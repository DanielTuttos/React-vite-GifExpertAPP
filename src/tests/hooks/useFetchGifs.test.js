import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Tests in Hook useFetchGifs', () => {

    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'))
        // console.log(result);
        const { images, isLoading } = result.current;
        // useFetchGifs();

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading to false', async () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),

        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});