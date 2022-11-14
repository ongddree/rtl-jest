import { render, screen } from '@testing-library/react';
import { Application } from './application';

// https://www.w3.org/TR/html-aria/#docconformance
describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      level: 1,
      name: 'Job application form',
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Section 1',
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'select',
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue('jest test');
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'bio',
    });
    expect(bioElement).toBeInTheDocument();

    //getByRole options - name
    //1. label element
    //2. text of button
    //3. aria-label attribute
    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      'i agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
