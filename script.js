// DOM elements
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const submitBtn = document.querySelector('.submit-btn');
const btnText = document.querySelector('.btn-text');
const btnLoading = document.querySelector('.btn-loading');

// Form fields configuration
const fields = {
    fullName: {
        element: document.getElementById('fullName'),
        errorElement: document.getElementById('fullNameError'),
        validate: value => {
            if (!value.trim()) return 'Full name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
            return null;
        }
    },
    email: {
        element: document.getElementById('email'),
        errorElement: document.getElementById('emailError'),
        validate: value => {
            if (!value.trim()) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email';
            return null;
        }
    },
    subject: {
        element: document.getElementById('subject'),
        errorElement: document.getElementById('subjectError'),
        validate: value => {
            if (!value.trim()) return 'Subject is required';
            if (value.trim().length < 3) return 'Subject must be at least 3 characters';
            if (value.trim().length > 100) return 'Subject must be less than 100 characters';
            return null;
        }
    },
    message: {
        element: document.getElementById('message'),
        errorElement: document.getElementById('messageError'),
        validate: value => {
            if (!value.trim()) return 'Message is required';
            if (value.trim().length < 10) return 'Message must be at least 10 characters';
            if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
            return null;
        }
    }
};

// State variables
let isSubmitting = false;

// Initialize form
function initForm() {
    // Add event listeners
    Object.values(fields).forEach(field => {
        const { element } = field;
        
        // Real-time validation on input
        element.addEventListener('input', () => {
            validateField(field);
            updateButton();
        });
        
        // Validation on blur
        element.addEventListener('blur', () => {
            validateField(field);
            updateButton();
        });
        
        // Clear error on focus but don't validate yet
        element.addEventListener('focus', () => {
            clearError(field);
            updateButton();
        });
    });
    
    contactForm.addEventListener('submit', handleSubmit);
    updateButton();
}

// Validate single field
function validateField(field) {
    const { element, errorElement, validate } = field;
    const value = element.value;
    const error = validate(value);
    
    if (error) {
        showError(field, error);
        return false;
    } else {
        clearError(field);
        return true;
    }
}

// Show field error
function showError(field, message) {
    const { element, errorElement } = field;
    element.classList.remove('success');
    element.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear field error
function clearError(field) {
    const { element, errorElement } = field;
    element.classList.remove('error');
    element.classList.remove('success');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Validate all fields
function validateAll() {
    let allValid = true;
    Object.values(fields).forEach(field => {
        if (!validateField(field)) {
            allValid = false;
        }
    });
    return allValid;
}

// Update submit button
function updateButton() {
    const isValid = validateAll();
    submitBtn.disabled = !isValid || isSubmitting;
    submitBtn.style.opacity = submitBtn.disabled ? '0.7' : '1';
}

// Show/hide loading state
function setLoading(loading) {
    isSubmitting = loading;
    submitBtn.disabled = loading;
    btnText.style.display = loading ? 'none' : 'block';
    btnLoading.style.display = loading ? 'flex' : 'none';
}

// Show success message
function showSuccess() {
    contactForm.style.display = 'none';
    successMessage.style.display = 'block';
}

// Reset form
function resetForm() {
    Object.values(fields).forEach(field => {
        field.element.value = '';
        clearError(field);
    });
    contactForm.style.display = 'block';
    successMessage.style.display = 'none';
    updateButton();
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateAll() || isSubmitting) return;
    
    setLoading(true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        showSuccess();
        setTimeout(resetForm, 5000);
        
    } catch (error) {
        alert('Error submitting form. Please try again.');
    } finally {
        setLoading(false);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initForm); 