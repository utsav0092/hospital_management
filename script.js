// Add interactivity for tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Add hover effects for cards
const cards = document.querySelectorAll('.stat-card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add click handlers for sidebar icons
const sidebarIcons = document.querySelectorAll('.sidebar i');
sidebarIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        sidebarIcons.forEach(i => i.style.color = '#666');
        icon.style.color = '#4CAF50';
    });
});

const medicines = [
    { id: "M-001", name: "Paracetamol", manufactureDate: "2023-01-01", expiryDate: "2025-01-01", price: 50 },
    { id: "M-002", name: "Aspirin", manufactureDate: "2022-05-15", expiryDate: "2024-05-15", price: 100 },
    { id: "M-003", name: "Amoxicillin", manufactureDate: "2023-03-20", expiryDate: "2025-03-20", price: 150 }
];

module.exports = medicines;