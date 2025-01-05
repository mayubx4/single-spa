import { render, screen, waitFor } from "@testing-library/react";
import Root from "./root.component";

// Mocking the global fetch to return dummy data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
      ]),
  })
);

describe("UsersList", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear previous mock data before each test
  });

  test("renders loading initially", () => {
    render(<Root />);

    // Check that loading is displayed initially
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("renders user names after fetch", async () => {
    render(<Root />);

    // Wait for the fetch call to resolve
    await waitFor(() => screen.getByText("Leanne Graham"));

    // Check that the user names are rendered correctly
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
  });

  test("handles fetch errors", async () => {
    // Mock the fetch to simulate an error
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Error fetching users"))
    );

    render(<Root />);

    // Wait for the error message to appear
    await waitFor(() => screen.getByText("Error fetching users"));

    // Check that the error message is displayed
    expect(screen.getByText("Error fetching users")).toBeInTheDocument();
  });
});
