// Typing Animation
const typingText = document.getElementById('typingText');
const text = "It's 2AM. You're not sleepy. Let's read something dangerous.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Background Music
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        musicToggle.classList.add('muted');
    } else {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        musicToggle.classList.remove('muted');
    }
    isMusicPlaying = !isMusicPlaying;
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Novel Data
const novels = [
    {
        id: 1,
        title: "Midnight Confessions",
        genre: "romance",
        genreDisplay: "Romance",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        description: "A tale of two strangers who meet every midnight at a 24-hour café, sharing secrets they'd never tell anyone else. As the nights grow longer, so does their connection. Emily, a writer suffering from insomnia, and James, a mysterious artist with a troubled past, find solace in each other's company during the darkest hours.",
        rating: 4,
        pages: 342,
        readTime: 68
    },
    {
        id: 2,
        title: "The Last Witness",
        genre: "thriller",
        genreDisplay: "Thriller",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        description: "She saw something she shouldn't have. Now, someone wants to make sure she never speaks of it. A heart-pounding chase through the dark streets of the city. Detective Sarah Mitchell must protect the only witness to a high-profile murder while uncovering a conspiracy that goes deeper than anyone imagined.",
        rating: 5,
        pages: 428,
        readTime: 85
    },
    {
        id: 3,
        title: "Shadows of Aetheria",
        genre: "fantasy",
        genreDisplay: "Fantasy",
        cover: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=600&fit=crop",
        description: "In a world where shadows have souls, a young girl discovers she can control them. But with great power comes those who wish to steal it. Aria must navigate the treacherous politics of the Shadow Court while learning to harness her abilities before darkness consumes everything she loves.",
        rating: 4,
        pages: 512,
        readTime: 102
    },
    {
        id: 4,
        title: "The Secret History",
        genre: "dark-academia",
        genreDisplay: "Dark Academia",
        cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop",
        description: "Six students. One forbidden ritual. A murder that will bind them forever. Set in an elite university where knowledge comes at the darkest price. Richard Papen transfers to Hampden College and becomes entangled with an elite group of classics students whose obsession with ancient Greek leads to catastrophe.",
        rating: 5,
        pages: 576,
        readTime: 115
    },
    {
        id: 5,
        title: "Tales from the Heart",
        genre: "urdu",
        genreDisplay: "Urdu Novel",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        description: "A story of love that transcends words. Two hearts meeting, breaking apart, and finding their way back to each other. Set in the vibrant streets of Lahore, this tale weaves together poetry, passion, and the eternal search for belonging in a world that constantly changes.",
        rating: 4,
        pages: 389,
        readTime: 77
    },
    {
        id: 6,
        title: "Broken Promises",
        genre: "romance",
        genreDisplay: "Romance",
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
        description: "Love letters from the past resurface, revealing secrets that were meant to stay buried. Can old flames be rekindled, or are some promises meant to stay broken? When Olivia inherits her grandmother's bookstore, she discovers letters that reveal a love story spanning decades.",
        rating: 4,
        pages: 367,
        readTime: 73
    },
    {
        id: 7,
        title: "The Whispering Woods",
        genre: "thriller",
        genreDisplay: "Thriller",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        description: "People enter the woods. Few come back. And those who do are never the same. A journalist investigates the disappearances in a small town surrounded by ancient forests. What she uncovers is far more sinister than she ever imagined, and the woods are listening.",
        rating: 5,
        pages: 445,
        readTime: 89
    },
    {
        id: 8,
        title: "Chronicles of Elyndor",
        genre: "fantasy",
        genreDisplay: "Fantasy",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
        description: "When the last dragon falls, an unlikely hero must rise. A blacksmith's apprentice discovers he's the prophesied savior of a dying realm. With ancient magic awakening and dark forces gathering, Kael must master powers he never knew he possessed and unite the fractured kingdoms.",
        rating: 5,
        pages: 623,
        readTime: 124
    }
];

// Render Novels
const novelsGrid = document.getElementById('novelsGrid');
let currentFilter = 'all';

function renderNovels(filter = 'all') {
    novelsGrid.innerHTML = '';
    const filteredNovels = filter === 'all' ? novels : novels.filter(n => n.genre === filter);
    
    filteredNovels.forEach((novel, index) => {
        const novelCard = document.createElement('div');
        novelCard.className = 'novel-card';
        novelCard.style.animationDelay = `${index * 0.1}s`;
        novelCard.innerHTML = `
            <img src="${novel.cover}" alt="${novel.title}" class="novel-cover">
            <div class="novel-info">
                <h3>${novel.title}</h3>
                <span class="genre-tag">${novel.genreDisplay}</span>
                <div class="rating">
                    ${generateStars(novel.rating)}
                </div>
            </div>
        `;
        novelCard.addEventListener('click', () => openModal(novel));
        novelsGrid.appendChild(novelCard);
    });
}

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderNovels(filter);
    });
});

// Genre Card Click
document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', () => {
        const genre = card.dataset.genre;
        scrollToSection('novels');
        setTimeout(() => {
            const filterBtn = document.querySelector(`[data-filter="${genre}"]`);
            if (filterBtn) {
                filterBtn.click();
            }
        }, 500);
    });
});

renderNovels();

// Modal Functionality
const modal = document.getElementById('novelModal');
const closeModal = document.querySelector('.close-modal');

function openModal(novel) {
    document.getElementById('modalCover').src = novel.cover;
    document.getElementById('modalTitle').textContent = novel.title;
    document.getElementById('modalGenre').textContent = novel.genreDisplay;
    document.getElementById('modalDescription').textContent = novel.description;
    document.getElementById('modalRating').innerHTML = generateStars(novel.rating);
    document.getElementById('modalPages').textContent = novel.pages;
    document.getElementById('modalTime').textContent = novel.readTime;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Bookmark Functionality
const bookmarkBtn = document.getElementById('bookmarkBtn');
let bookmarkedNovels = JSON.parse(localStorage.getItem('bookmarks')) || [];

bookmarkBtn.addEventListener('click', () => {
    const novelTitle = document.getElementById('modalTitle').textContent;
    const index = bookmarkedNovels.indexOf(novelTitle);
    
    if (index > -1) {
        bookmarkedNovels.splice(index, 1);
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> Bookmark';
        bookmarkBtn.classList.remove('bookmarked');
    } else {
        bookmarkedNovels.push(novelTitle);
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
        bookmarkBtn.classList.add('bookmarked');
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedNovels));
});

// Form Validation
const storyForm = document.getElementById('storyForm');
const storyText = document.getElementById('storyText');
const charCount = document.getElementById('charCount');

// Character Counter
storyText.addEventListener('input', () => {
    const count = storyText.value.length;
    charCount.textContent = count;
    const counter = document.querySelector('.char-counter');
    if (count >= 50) {
        counter.classList.add('valid');
    } else {
        counter.classList.remove('valid');
    }
});

// Validation Functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateTitle(title) {
    return title.trim().length >= 3;
}

function validateGenre(genre) {
    return genre !== '';
}

function validateStory(story) {
    return story.trim().length >= 50;
}

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add('invalid');
    error.textContent = message;
    error.style.display = 'block';
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove('invalid');
    error.style.display = 'none';
}

// Real-time validation
document.getElementById('authorName').addEventListener('blur', function() {
    if (!validateName(this.value)) {
        showError('authorName', 'nameError', 'Name must be at least 2 characters');
    } else {
        clearError('authorName', 'nameError');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        showError('email', 'emailError', 'Please enter a valid email address');
    } else {
        clearError('email', 'emailError');
    }
});

document.getElementById('storyTitle').addEventListener('blur', function() {
    if (!validateTitle(this.value)) {
        showError('storyTitle', 'titleError', 'Title must be at least 3 characters');
    } else {
        clearError('storyTitle', 'titleError');
    }
});

document.getElementById('genre').addEventListener('change', function() {
    if (!validateGenre(this.value)) {
        showError('genre', 'genreError', 'Please select a genre');
    } else {
        clearError('genre', 'genreError');
    }
});

storyText.addEventListener('blur', function() {
    if (!validateStory(this.value)) {
        showError('storyText', 'storyError', 'Story must be at least 50 characters');
    } else {
        clearError('storyText', 'storyError');
    }
});

// Form Submission
storyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('authorName').value;
    const email = document.getElementById('email').value;
    const title = document.getElementById('storyTitle').value;
    const genre = document.getElementById('genre').value;
    const story = storyText.value;
    
    let isValid = true;
    
    if (!validateName(name)) {
        showError('authorName', 'nameError', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!validateTitle(title)) {
        showError('storyTitle', 'titleError', 'Title must be at least 3 characters');
        isValid = false;
    }
    
    if (!validateGenre(genre)) {
        showError('genre', 'genreError', 'Please select a genre');
        isValid = false;
    }
    
    if (!validateStory(story)) {
        showError('storyText', 'storyError', 'Story must be at least 50 characters');
        isValid = false;
    }
    
    if (isValid) {
        // Get form data
        const formData = {
            name: name,
            email: email,
            title: title,
            genre: genre,
            story: story,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form Data:', formData);
        
        // Show success message
        storyForm.style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form
        storyForm.reset();
        charCount.textContent = '0';
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
    }
});

function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
    storyForm.style.display = 'block';
}

// File Upload
const fileUpload = document.getElementById('fileUpload');
const fileLabel = document.querySelector('.file-upload-label span');

fileUpload.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        fileLabel.textContent = this.files[0].name;
    } else {
        fileLabel.textContent = 'Choose file or drag here';
    }
});

// Smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.genre-card, .novel-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});