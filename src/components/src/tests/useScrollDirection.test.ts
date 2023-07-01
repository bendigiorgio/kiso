import { renderHook, act } from "@testing-library/react";
import { useScrollDirection } from "../../../lib/src/useScrollDirection"; // Path to your Hook

describe("useScrollDirection hook", () => {
  beforeEach(() => {
    Object.defineProperty(window, "pageYOffset", {
      writable: true,
      value: 0,
    });
  });

  it("should return initial scroll direction as 'up'", () => {
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current).toBe("up");
  });

  it("should update scroll direction to 'down' when scrolled down", () => {
    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      window.pageYOffset = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe("down");
  });

  it("should update scroll direction to 'up' when scrolled up", () => {
    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      window.pageYOffset = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    act(() => {
      window.pageYOffset = 50;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe("up");
  });

  it("should not update scroll direction when scroll position is unchanged", () => {
    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      window.pageYOffset = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    act(() => {
      window.pageYOffset = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe("down");
  });
});
