# Responsive Contact Form

A modern, responsive contact form built with HTML, CSS, and JavaScript that works beautifully on all screen sizes.

## Features

### ✨ Design & Layout
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Full keyboard navigation and screen reader support
- **Visual Feedback**: Real-time validation with color-coded states

### 🔧 Form Fields
- **Full Name**: Required field with letter-only validation
- **Email Address**: Required field with email format validation
- **Subject**: Required field with length constraints
- **Message**: Required textarea with character limits
- **Submit Button**: Interactive button with loading states

### ✅ Validation Features
- **Real-time Validation**: Instant feedback as users type
- **Required Field Validation**: Ensures all fields are completed
- **Email Format Validation**: Validates proper email structure
- **Length Validation**: Enforces minimum and maximum character limits
- **Visual Indicators**: Success/error states with color coding

### 📱 Responsive Breakpoints
- **Desktop**: 768px and above
- **Tablet**: 480px - 768px
- **Mobile**: Below 480px

## File Structure

```
Task 2 Contact Form/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styles
├── script.js           # JavaScript validation and interactions
└── README.md          # Project documentation
```

## Usage

1. **Open the form**: Simply open `index.html` in any modern web browser
2. **Fill out the form**: Enter your information in each field
3. **Real-time validation**: See immediate feedback as you type
4. **Submit**: Click the "Send Message" button when all fields are valid

## Validation Rules

### Full Name
- Required field
- Minimum 2 characters
- Only letters and spaces allowed

### Email Address
- Required field
- Must be a valid email format (e.g., user@domain.com)

### Subject
- Required field
- Minimum 3 characters
- Maximum 100 characters

### Message
- Required field
- Minimum 10 characters
- Maximum 1000 characters

## Technical Details

### HTML Features
- Semantic HTML5 structure
- Proper form labels and accessibility
- ARIA attributes for screen readers
- Mobile-friendly viewport meta tag

### CSS Features
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Smooth transitions and animations
- High contrast mode support
- Reduced motion support for accessibility

### JavaScript Features
- Real-time form validation
- Debounced input handling
- Loading states and animations
- Keyboard navigation support
- Error handling and user feedback

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all form elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences

## Customization

### Colors
The form uses a purple gradient theme. To change colors, modify these CSS variables in `styles.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Success color */
color: #27ae60;

/* Error color */
color: #e74c3c;
```

### Validation Messages
To customize validation messages, edit the validation functions in `script.js`:

```javascript
validation: (value) => {
    if (!value.trim()) return 'Your custom error message';
    // ... other validation rules
}
```

## Future Enhancements

- [ ] File upload support
- [ ] CAPTCHA integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Form data persistence
- [ ] Email confirmation system

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ using HTML, CSS, and JavaScript** 