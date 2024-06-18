import { render, screen } from '@testing-library/react';
import { Title } from '../../../../src/components/ui/title/Title';
import '@testing-library/jest-dom/extend-expect'; // Import the extend-expect function

describe('Title', () => {
	it("should render title and subtitle when both are provided", () => {
		render(<Title title="Test Title" subtitle="Test Subtitle" />);

		const titleElement = screen.getByText("Test Title");
		const subtitleElement = screen.getByText("Test Subtitle");

		expect(titleElement).toBeInTheDocument();
		expect(subtitleElement).toBeInTheDocument();
	});
});