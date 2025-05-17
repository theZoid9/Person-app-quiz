
const editBtn = document.getElementById('edit-btn');
const userName = document.getElementById('user-name');
const editInput = document.getElementById('edit-name');

editBtn.addEventListener('click', () => {
  if (editInput.style.display === 'none' || editInput.style.display === '') {

    editInput.style.display = 'inline-block';
    userName.style.display = 'none';
    editBtn.textContent = 'Save';
    editInput.focus();
  }else{
    const newName = editInput.value.trim();
    if (newName) {
      userName.textContent = newName;
    }
    editInput.style.display = 'none';
    userName.style.display = 'block';
    editBtn.textContent = 'Edit';
  }
});


const avatarEditBtn = document.getElementById('avatar-edit-btn');
const avatarInput = document.getElementById('avatar-input');
const userAvatar = document.getElementById('user-avatar');

avatarEditBtn.addEventListener('click', () => {
  avatarInput.click();
});

avatarInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      userAvatar.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
