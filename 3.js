document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const form = document.getElementById('applicationForm');
    const eventNameField = document.getElementById('eventName');
    const buttons = document.querySelectorAll('.calendar-button');
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.type !== 'checkbox' && input.type !== 'hidden') {
            input.setAttribute('placeholder', ' ');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event');
            eventNameField.value = eventName;
            openModal();
        });
    });

    closeModal.addEventListener('click', closeModalFunction);
    
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModalFunction();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModalFunction();
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim() && input.type !== 'hidden') {
                isValid = false;
                highlightError(input);
            } else {
                removeHighlight(input);
            }
        });

        const agreeCheckbox = document.getElementById('agree');
        if (!agreeCheckbox.checked) {
            isValid = false;
            document.querySelector('.checkbox-group label').style.color = '#e74c3c';
        } else {
            document.querySelector('.checkbox-group label').style.color = '#555';
        }
        
        if (isValid) {
            alert(`Заявка на мероприятие "${eventNameField.value}" успешно отправлена!`);
            form.reset();
            closeModalFunction();
        } else {
            alert('Пожалуйста, заполните все обязательные поля и подтвердите согласие.');
        }
    });
    
    function openModal() {
        document.body.style.overflow = 'hidden';
        modalOverlay.classList.add('active');
    }
    
    function closeModalFunction() {
        document.body.style.overflow = 'auto';
        modalOverlay.classList.remove('active');
        form.reset();
    }
        if (mainRegisterBtn) {
        mainRegisterBtn.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event');
            eventNameField.value = eventName;
            openModal();
        });
    }
    
    function highlightError(input) {
        input.style.borderColor = '#e74c3c';
        input.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.2)';
    }
    
    function removeHighlight(input) {
        input.style.borderColor = '#ddd';
        input.style.boxShadow = 'none';
    }
    
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length > 0) {
            formattedValue = '+7 (' + value.substring(1, 4);
        }
        if (value.length >= 4) {
            formattedValue += ') ' + value.substring(4, 7);
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.substring(7, 9);
        }
        if (value.length >= 9) {
            formattedValue += '-' + value.substring(9, 11);
        }
        
        e.target.value = formattedValue;
    });
});