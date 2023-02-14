import { renderHook } from "@testing-library/react-hooks";
import useInterval from "./useInterval";

it("should be undefined", () => {
  const { result } = renderHook(() => useInterval());

  expect(result.current).toBeUndefined();
});
