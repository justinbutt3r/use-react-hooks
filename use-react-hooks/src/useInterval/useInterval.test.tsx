import { renderHook } from "@testing-library/react-hooks";
import useInterval from "./useInterval";

it("should be undefined", () => {
  const { result } = renderHook(() => useInterval(() => {}));
  expect(result.current).toBeUndefined();
});

it("should not call callback with no delay", () => {
  const mockCallback = jest.fn(() => {});

  renderHook(() => useInterval(mockCallback));
  expect(mockCallback).not.toBeCalled();
});

it("should not immediately call callback", () => {
  const mockCallback = jest.fn(() => {});

  renderHook(() => useInterval(mockCallback, 100));
  expect(mockCallback).not.toBeCalled();
});

it("should call callback after delay", async () => {
  const mockCallback = jest.fn(() => {});

  const delay = 2000;

  renderHook(() => useInterval(mockCallback, delay));
  await new Promise((r) => setTimeout(r, delay));

  expect(mockCallback).toBeCalled();
});
