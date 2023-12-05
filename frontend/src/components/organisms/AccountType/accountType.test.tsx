import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountType from ".";
import { MemoryRouter } from "react-router-dom";

// describe("AccountType component", () => {
//   test("renders the correct components", () => {
//     const data=[{id:1,accountType:'savings'}]
//     render(
//     <MemoryRouter>
//       <AccountType />
//     </MemoryRouter>
//   );
//   });
//   test("renders click function", () => {
  //   render(
  //   <MemoryRouter>
  //     <AccountType />
  //   </MemoryRouter>
  // );
//     const click=screen.getAllByTestId("icon-text-radio")
//     click.forEach((item) => {
//         expect(item).toBeInTheDocument()

//     })
//     click.forEach((item) => {
//         fireEvent.click(item)

//     })
//   });
// });

describe('AccountType component', () => {
  const mockData = [
    {
      id: 1,
      src: 'image1.png',
      title: 'Account 1',
      text: 'Account 1 description',
    },
    {
      id: 2,
      src: 'image2.png',
      title: 'Account 2',
      text: 'Account 2 description',
    },
  ];

  test('renders component with correct title and info', () => {
    const props = {
      data: mockData,
      Title: 'Account Types',
      Info: 'Select an account type',
    };

    render(<MemoryRouter><AccountType {...props} /></MemoryRouter>);

    // Assert title and info text
    expect(screen.getByText('Account Types')).toBeInTheDocument();
    expect(screen.getByText('Select an account type')).toBeInTheDocument();
  });

  test('renders component with correct number of IconTextRadio components', () => {
    const props = {
      data: mockData,
    };

    render(<MemoryRouter><AccountType {...props} /></MemoryRouter>);

    // Assert the number of IconTextRadio components rendered
    const iconTextRadioComponents = screen.getAllByTestId('icon-text-radio');
    expect(iconTextRadioComponents.length).toBe(mockData.length);
  });

  // Add more test cases as needed
});