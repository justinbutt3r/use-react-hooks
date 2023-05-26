import { renderHook } from "@testing-library/react-hooks";
import usePrevious from "./usePrevious";

it("should be undefined", () => {
  const { result } = renderHook(() => usePrevious("a"));
  expect(result.current).toBeUndefined();
});

it("should be previous value", () => {
  const hook = renderHook((value = "a") => usePrevious(value));
  hook.rerender("qwert");
  expect(hook.result.current).toBe("a");
});
