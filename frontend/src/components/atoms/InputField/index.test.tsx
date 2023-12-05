
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputField } from '.';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('InputField component', () => {
  it('should render correctly', () => {
    render(<InputField variant={"outlined"} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });


  it('should display the placeholder text if provided', () => {
    const placeholder = 'Enter your name';
    render(<InputField placeholder={placeholder} variant={"outlined"} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should update the value when user types into the input field', () => {
    const handleChange = jest.fn();
    render(<InputField value="" onChange={handleChange} variant={"outlined"} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'John');
    expect(handleChange).toHaveBeenCalledTimes(4); // 4 because there are 4 characters in 'John'
  });

  it('should display helper text if provided', () => {
    const helperText = 'Please enter your name';
    render(<InputField helperText={helperText} variant={"outlined"} />);
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('should display the start icon if provided', () => {
    const startIcon = <span>👋</span>;
    render(<InputField starticon={startIcon} variant={"outlined"} />);
    expect(screen.getByText('👋')).toBeInTheDocument();
  });

  it('should display the end icon if provided', () => {
    const endIcon = <span>👋</span>;
    render(<InputField endicon={endIcon} variant={"outlined"} />);
    expect(screen.getByText('👋')).toBeInTheDocument();
  });

  it('should display select options if "select" prop is true', () => {
    const selectOptions = ['Option 1', 'Option 2', 'Option 3'];
    render(
      <InputField variant="outlined" select>
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </InputField>
    );
    const select = screen.getByRole('button');

    userEvent.click(select);
    selectOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
  
  it('should render the elipses',()=>{
    render(<InputField maxLength={10}/>)
  })

});
